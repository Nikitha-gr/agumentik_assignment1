import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";
import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert(`${product.name} added to cart`)
    };

    return (
        <Box
            w="300px"
            borderWidth="1px"
            borderRadius="5px"
            p={4}
            m={4}
        >
            <Image
                src={`/assets/${product.image}`}
                alt={product.name}
                boxSize="100%"
            />

            <VStack mt={4}>
                <Text fontSize="1rem" fontWeight="bold"> {product.name} </Text>
                <HStack justify="space-between">
                    <Text fontSize="1rem" color="gray.500">₹{product.price}</Text>
                </HStack>

                <Button 
                    backgroundColor="orchid"
                    color="white"
                    padding="10px 20px"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </Button>
            </VStack>
        </Box>
    )
}

export default ProductCard;