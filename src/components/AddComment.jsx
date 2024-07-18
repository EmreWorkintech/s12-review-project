import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddComment } from "../services/mutations";

export default function AddComment() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      username: "Emre",
    },
    mode: "onChange",
  });
  const mutation = useAddComment();
  const history = useHistory();

  const submitFormData = (formData) => {
    mutation.mutate(formData, {
      onSuccess: () => {
        toast("Yeni yorumunuz eklendi..");
        history.push("/comments");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className="w-3/4 mx-auto mt-6 border-2 p-4">
      <h2>Add Comment</h2>
      <form className="mt-2" onSubmit={handleSubmit(submitFormData)}>
        <div>
          <input
            {...register("title", {
              required: true,
              minLength: {
                value: 3,
                message: "Bir yorum girdiniz mi?",
              },
            })}
            type="text"
            placeholder="yorumunuzu giriniz"
          />
          {errors.title && (
            <div className="border-2 border-red-500 bg-red-200 text-red-500 p-3 rounded-md">
              {errors.title.message}
            </div>
          )}
        </div>
        <button
          className="p-2 border-2 rounded-md text-slate-50 bg-blue-400 mt-4 cursor-pointer"
          disabled={!isValid}
          type="submit"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
}
