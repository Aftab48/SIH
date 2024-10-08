import Image from "next/image";
import Link from "next/link";

import { DoctorColumns } from "@/components/table/DoctorsColumns";
import { DTable } from "@/components/table/DTable";
import { DoctorsData } from "@/constants";

const DoctorsAvailability = () => {
  const data = DoctorsData;

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Doctors Availability</h1>
        </section>

        <DTable columns={DoctorColumns} data={data} />
      </main>
    </div>
  );
};

export default DoctorsAvailability;
