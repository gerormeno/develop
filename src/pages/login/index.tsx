import { FC, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import KIEVLogo from "@/assets/kievIngenieriaLogo.png";
import { useAuth } from "@/security/AuthContext";
import Video from "@/assets/cannabis-plant-indoor-2-compressed.mp4";
import SkeletonPicture from "@/assets/cannabis-plant-indoor-2-skeleton.webp";

const Login: FC = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setIsFormVisible(false);
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Formato de mail incorrecto")
        .required("Por favor completá este dato"),
      password: Yup.string()
        .min(6, "La debe tener al menos 6 caracteres")
        .required("Por favor completá este dato"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setMessage(null);
      try {
        await login(values.email, values.password);
        resetForm();
        navigate("/admin");
      } catch (error) {
        setMessage(
          "Error al iniciar sesión. Por favor, revisá tus datos y volvé a intentar."
        );
        setIsFormVisible(true);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleLogOut = () => {
    setIsFormVisible(false);
    window.location.assign("/");
    setTimeout(async () => {
      await logout();
      formik.resetForm();
    }, 0);
  };

  return (
    <section className="lg:px-8 mx-auto pt-10">
      <div className="relative w-full overflow-hidden">
        <div aria-hidden="true" className="overflow absolute inset-0">
          <video
            src={Video}
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={SkeletonPicture}
          />
        </div>
        <div className="lg:px-16 relative flex w-full items-center justify-center bg-gray-900 bg-opacity-40 px-6 py-20 sm:px-12">
          <div className="mt-10 w-full max-w-md rounded-2xl bg-black bg-opacity-40 p-8 backdrop-blur-md backdrop-filter">
            <img
              className="mx-auto mb-20 mt-10 h-24 w-auto invert filter"
              src={KIEVLogo}
              alt="KIEV Ingeniería"
            />
            {!user && (
              <h2
                id="impacto-social-titulo"
                className="mb-6 text-3xl font-bold tracking-tight text-gray-300"
              >
                Iniciá sesión
              </h2>
            )}
            {isFormVisible && !user ? (
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-4"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-2 block text-left font-bold text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Ingresá tu correo electrónico"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full rounded-lg border border-gray-300 bg-transparent p-3 ring-1 ring-inset ${
                      formik.touched.email && formik.errors.email
                        ? "ring-red-500"
                        : "ring-gray-300"
                    } focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-sm text-red-600">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-left font-bold text-gray-300"
                  >
                    Contraseña
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Ingresá tu contraseña"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`mb-6 w-full rounded-lg border border-gray-300 bg-transparent p-3 ring-1 ring-inset ${
                      formik.touched.password && formik.errors.password
                        ? "ring-red-500"
                        : "ring-gray-300"
                    } focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-sm text-red-600">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                {message && (
                  <div className="text-sm text-red-600">{message}</div>
                )}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-white bg-opacity-10 p-3 text-gray-300 backdrop-filter transition-all duration-500 hover:bg-opacity-5"
                >
                  Ingresar
                </button>
              </form>
            ) : (
              <div>
                <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-login-text-primary">
                  Ya estás logueado...
                </h2>
                <button
                  onClick={handleLogOut}
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
