interface Props<T> {
  list: T[],
  renderItem: (item: T, i: number) => any
}

const MapList: <T>(props: Props<T>) => any = ({ list = [], renderItem }) => {
  return (
    <div>
      {list.map(renderItem)}
    </div>
  );
}

// function MapList<T>({ list = [], renderItem }: Props<T>) {
//   return (
//     <div>
//       {list.map(renderItem)}
//     </div>
//   );
// }

export default MapList;