import Link from "next/link";

let routeLists = [
  {
    keyID: "01",
    name: "Home",
    url: "/"
  },
  {
    keyID: "02",
    name: "About",
    url: "/about"
  },
  {
    keyID: "03",
    name: "Product",
    url: "/product"
  },
  {
    keyID: "04",
    name: "Contact",
    url: "/contact"
  },
  {
    keyID: "05",
    name: "Dashboard",
    url: "/dashboard"
  }
]

export default function MainNav() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="cursor-pointer self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Group Route.
        </Link>
        <div className="flex flex-col w-full md:flex-row md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
              routeLists.map((list) => <li>
                <Link
                  key= {list.keyID}
                  href={list.url}
                  className="mb-2 md:mb-0 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-white"
                  aria-current="page"
                >
                  {list.name}
                </Link>
              </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
