import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-[100px]">
      {/* <h1 className="text-2xl font-bold flex justify-center">Welcome!</h1> */}
      <section className="flex flex-col items-center mt-[30px]">
        <h2 className="text-xl font-semibold">
          Hey, I am{" "}
          <Link
            href={"https://priyankrajai.com/"}
            target="_blank"
            className="underline hover:text-[#008060]"
          >
            Priyank Rajai
          </Link>
          .
        </h2>
        <div className="mt-[30px] px-5">
          <h3 className="text-[18px] font-medium">Exercises</h3>
          <ol className="list-decimal pl-[40px]">
            <li className="mt-[10px]">
              <div>
                <Link href={"/center-a-div"} className="underline">
                  Center a div
                </Link>{" "}
                - I have created three divs, each 100vh height, and centered
                them using three different methods: flexbox, CSS Grid, and
                position absolute. Each method showcases a unique approach to
                achieving perfect alignment.
              </div>
            </li>
            <li className="mt-[10px]">
              <div>
                <Link href={"/table"} className="underline">
                  Table
                </Link>{" "}
                - I have used grid to create Table view and position absolute
                for tooltip.
              </div>
            </li>
            <li className="mt-[10px]">
              <div>
                <Link href={"/javascript"} className="underline">
                  Javascript
                </Link>{" "}
                - I have developed a dynamic table featuring pagination, search
                capabilities, and sortable row in both ascending and descending
                order.
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
