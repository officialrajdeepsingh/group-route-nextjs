
import Link from "next/link";

let routeLists = [
  {
    keyID: "01",
    name: "Dashboard",
    url: "/dashboard"
  },
  {
    keyID: "02",
    name: "Profile",
    url: "/dashboard/profile"
  }
]

export function DashboardNav() {
  return (
    <nav className="bg-white border-t-2 border-gray-300 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="flex flex-col w-full md:flex-row md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
            md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 
            md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
              routeLists.map((list) => <li>
                <Link
                  key= {list.keyID}
                  href={list.url}
                  className="mb-2 md:mb-0 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-white"
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
