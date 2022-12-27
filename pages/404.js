import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h2>Oopsss ! No page Found</h2>
    </div>
  );
};

export default Error;
