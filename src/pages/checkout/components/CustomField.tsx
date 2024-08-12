import { ErrorMessage, Field } from "formik";

interface Props {
  fieldName: string;
  fieldId: string;
  fieldLabel: string;
  placeholder: string;
  fieldType: string;
}

const CustomField = ({
  fieldName,
  fieldId,
  fieldLabel,
  placeholder,
  fieldType,
}: Props) => {
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium leading-6">
        {fieldLabel}
      </label>
      <div className="mt-2">
        <Field
          type={fieldType}
          name={fieldName}
          id={fieldId}
          autoComplete="family-name"
          placeholder={placeholder}
          className="block w-full rounded-md border-0 bg-background-secondary py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
        <ErrorMessage
          name={fieldName}
          component="div"
          className="text-red-500"
        />
      </div>
    </div>
  );
};

export default CustomField;
