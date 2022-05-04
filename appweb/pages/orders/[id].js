import { useRouter } from "next/router";

export default function Order() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Order: {id}</p>;
}