import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
console.log(session)
  return ( 
  <Layout>
   <div className="text-blue-900 flex justify-between">
    <div>
      <h2>Hello, <b>{session?.user?.name}</b></h2>
    </div>
    <div className="flex gap-2 text-black bg-gray-300 rounded-lg overflow-hidden">
    <img src={session?.user?.image} alt={"hero"} className=" w-6 h-6" />
<span className="px-2">
{session?.user?.name}

</span>
    </div>
   </div>
  </Layout>
  );
}
