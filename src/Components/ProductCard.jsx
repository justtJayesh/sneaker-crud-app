import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'

export const ProductCard = ({ image, title, price, brand, discount, category, id }) => {

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={image}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Text>{brand}</Text>
                    <Heading style={{ textAlign:'left'}} size='md'>{title}</Heading>
                    <Text style={{ textAlign:'left'}}>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Box style={{ textAlign:'left'}}>
                        <Text color='blue.600' fontSize='2xl'>
                            Rs. {price}
                        </Text>
                        <Text color='red.600' fontSize='xl'>
                            Discount: {discount}%
                        </Text>
                        <Text>Category: {category}</Text>
                    </Box>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    {/* <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button> */}
                    <Button variant='ghost' colorScheme='blue'>
                        <RouterLink to={`/edit/${id}`}>Edit</RouterLink>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}