function Footer() {
  const date = new Date();
  const lastUpdate = Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <footer className="flex flex-col justify-center items-center py-6 gap-4">
      <span>Last update at {lastUpdate} - Antonio Lourenço © {date.getFullYear()}</span>
    </footer>
  );
}

export default Footer;
