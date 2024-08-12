import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export const sendEmail = (
  templateId: string,
  form: React.RefObject<HTMLFormElement>,
  setIsLoading: (isLoading: boolean) => void
) => {
  setIsLoading(true);
  if (form.current) {
    emailjs
      .sendForm(
        "service_65ahc09",
        templateId,
        form.current,
        "9TpLtLJ_GQin1KkmZ"
      )
      .then(() => {
        setIsLoading(false);
        form.current?.reset();
        toast.success("Email sent successfully");
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Failed to send email");
      });
  }
};
