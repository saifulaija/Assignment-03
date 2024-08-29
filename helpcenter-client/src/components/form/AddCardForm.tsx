"use client";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useCreateCardMutation } from "@/redux/features/card/cardApi";
import { toast } from "react-toastify";
import LoadingButton from "../shared/LoadingButton";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Enter card title",
  }),
  description: z.string().min(1, {
    message: "Enter card description",
  }),
});

const CreateCardForm = () => {
    const router=useRouter();
  const [createCard, { isLoading }] = useCreateCardMutation();

  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
 

    try {
      const res = await createCard(values).unwrap();

      if (res?.data) {
        toast.success("user added successfully", { position: "bottom-left" });
        router.push("/");
      }
    } catch (err: any) {
      toast.error(err?.message, { position: "bottom-left" });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="w-full space-y-4 md:px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter card title"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter card description"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <LoadingButton
            type="submit"
            className="w-full font-semibold"
            loading={isLoading}
          >
            Add Card
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default CreateCardForm;
