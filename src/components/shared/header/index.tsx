// Components
import Image from "next/image";
import Link from "next/link";

// Utils
import Contacts from "../../../common/shared/contacts";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center py-6">
      <nav className="flex flex-row justify-center items-center gap-6">
        <Link href={"/"}>
          <Image
            src="https://avatars.githubusercontent.com/u/77071315?v=4"
            alt=""
            width={60}
            height={60}
            className="rounded-full"
          />
        </Link>

        <div className="flex flex-col">
          <span className="font-bold">Antonio</span>
          <span>Lourenço</span>
        </div>
      </nav>

      <nav className="flex flex-row justify-center gap-6">
        {Contacts.map(({ url, icon }, index) => {
          return (
            <Link
              key={index}
              href={url}
              target="_blank"
              className="cursor-pointer p-2"
            >
              <i className={`${icon} text-white text-2xl`} />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
