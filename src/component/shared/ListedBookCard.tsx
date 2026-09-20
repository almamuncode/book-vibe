import Image from "next/image";
import Link from "next/link";

const ListedBookCard = ({ book, listType }: { book: any; listType: string }) => {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row">
      <div className="flex h-48 shrink-0 items-center justify-center rounded-xl bg-stone-100 p-4 sm:w-36">
        <Image
          src={book.image}
          alt={`Cover of ${book.bookName}`}
          width={110}
          height={160}
          className="h-full w-auto rounded-md object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-emerald-700">{book.category}</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">
              {book.bookName}
            </h3>
            <p className="mt-1 text-sm text-slate-500">By {book.author}</p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              listType === "Reading List"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-rose-100 text-rose-700"
            }`}
          >
            {listType}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags?.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <div className="flex gap-4 text-slate-500">
            <span>{book.totalPages} pages</span>
            <span className="font-medium text-amber-600">★ {book.rating}</span>
          </div>

          <Link
            href={`/books/${book.bookId}`}
            className="font-semibold text-emerald-700 hover:text-emerald-900"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ListedBookCard;