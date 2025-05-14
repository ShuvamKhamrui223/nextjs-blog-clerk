import NewsLetterForm from "../forms/NewsLetterForm";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <NewsLetterForm />

        <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
          <p className="text-center text-xs/relaxed text-gray-500 dark:text-gray-400">
            © Company 2022. All rights reserved.
            <br />
            Created with
            <a
              href="#"
              className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              Laravel
            </a>
            and
            <a
              href="#"
              className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              Laravel Livewire
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
