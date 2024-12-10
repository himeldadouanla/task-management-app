import Link from 'next/link';

export default function Navigation() {
    return (
        <div className="rounded-full">
            <ul className="flex flex-wrap gap-1 sm:gap-4 justify-center text-sm sm:text-base font-medium text-center text-slate-500 border-b border-slate-200 ">
                <Link
                    href="/"
                    className= "inline-block px-4 sm:px-14 py-2 rounded focus:outline-none"
                >
                    Message
                </Link>

                <Link
                    href="/?tasks=Open"
                    className= " bg-emerald-200 text-slate-900  inline-block px-4 sm:px-14 py-2 rounded focus:outline-none"
                >
                    Today's Task
                </Link>

                <Link
                    href="/"
                    className= " inline-block px-4 sm:px-14 py-2 rounded focus:outline-none"
                >
                    Last Activity
                </Link>

            </ul>
        </div>

    );
}