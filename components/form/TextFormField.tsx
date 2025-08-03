import { Control } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Input } from "../ui/input";


interface TextFormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type?: string;
  inputMode?: "text" | "numeric" | "search" | "none" | "tel" | "url" | "email" | "decimal" | undefined;
}


function TextFormField({
  control,
  name,
  label,
  placeholder,
  description,
  type = 'text',
  inputMode ='numeric'
}: TextFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              inputMode={inputMode}
              className="bg-white"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    >
    </FormField>
  )
}


export default TextFormField;