import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    HStack,
    Radio,
    RadioGroup,
  } from '@chakra-ui/react'
function CalculatorForm( {handleChange} ){
    return (
        <>
            <FormControl as='fieldset'  w='fit-content' margin='0 auto' >
                <FormLabel as='legend'>Select the course </FormLabel>
                <RadioGroup defaultValue='2' >
                    <HStack spacing='24px'>
                        <Radio value='DSA' name='course'onChange={handleChange} >DSA</Radio>
                        <Radio value='Coding' name='course' onChange={handleChange}> Coding </Radio>
                        <Radio value='English' name='course' onChange={handleChange}>English</Radio>
                         </HStack>
                </RadioGroup>
                {/* <FormHelperText>Select only if you're a fan.</FormHelperText> */}
            </FormControl>
        </>
    )
}
export default CalculatorForm;