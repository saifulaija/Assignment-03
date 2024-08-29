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

import { toast } from "react-toastify";
import LoadingButton from "../shared/LoadingButton";

import { useAddCardsMutation } from "@/redux/features/card/cardApi";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Enter card title",
  }),
  description: z.string().min(1, {
    message: "Enter card description",
  }),
});

const CreateCardForm = () => {
  const [createCard, { isLoading }] = useAddCardsMutation();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      const res = await createCard(values);

      if (res?.data) {
        toast.success("Card added successfully");
        router.push("/");
      } 
    } catch (err: any) {
     toast.warning('something went wrong')
    } 
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="w-full space-y-4 md:px-4 py-6">
          <div className="">
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
            loading={loading}
          >
            Add Card
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default CreateCardForm;
