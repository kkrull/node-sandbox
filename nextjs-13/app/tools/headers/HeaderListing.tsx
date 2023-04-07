//Listing of HTTP headers
export default function HeaderListing({ headersList }: HeaderListProps) {
  return (
    <div>
      <h2>HTTP Request Headers</h2>
      <ul>
        {Array.from(headersList.entries()).map(([name, value], i) =>
          <HeaderItem key={i} name={name} value={value}/>
        )}
      </ul>
    </div>
  );
}

type HeaderListProps = {
  headersList: Headers
};

function HeaderItem({ name, value }: HeaderItemProps) {
  return (
    <li>{name}: {value}</li>
  );
}

type HeaderItemProps = {
  name: string;
  value: string;
}
