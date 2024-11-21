import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const CustomInput = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">Email</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder="Enter your email...."
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
        // <FormItem>
        //   <FormLabel>Username</FormLabel>
        //   <FormControl>
        //     <Input placeholder="shadcn" {...field} />
        //   </FormControl>
        //   <FormDescription>
        //     This is your public display name.
        //   </FormDescription>
        //   <FormMessage />
        // </FormItem>
      )}
    />
  );
};

export default CustomInput;
