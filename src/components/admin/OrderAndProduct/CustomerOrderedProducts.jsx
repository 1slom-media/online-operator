import { Divider, Stack } from "@mui/material";
import ProductSelectRow from "./ProductSelectRow";

const CustomerOrderedProducts = ({ input: { value, onChange } }) => {
  console.log("valueeeeeee", value);
  return (
    <Stack>
      {value?.map((item, indx) => (
        <Stack key={indx} pt={1}>
          <ProductSelectRow
            isEdit
            {...item}
            variant={item}
            onChange={onChange}
            value={value}
          />
          <Stack pt={1}>
            <Divider />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

CustomerOrderedProducts.defaultProps = {
  input: {
    value: [],
    onChange: () => {},
  },
};

export default CustomerOrderedProducts;
