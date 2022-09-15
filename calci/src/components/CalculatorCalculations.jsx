import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Input,
    Button,
    Flex,
    Text,
  } from '@chakra-ui/react'
import { useState } from 'react'
function CalculatorCalculation( {course} ){
   const initialScoreState={
    Evaluvation_1:'',
    Score_1:'',
    Evaluvation_2:'',
    Score_2:'',
    Evaluvation_3:'',
    Score_3:'',
    Evaluvation_4:'',
    Score_4:'',
    Evaluvation_5:'',
    Score_5:'',
    Result_1:'',
    Result_2:'',
    Result_3:'',
    Result_4:'',
    Result_5:'',
    totalResult:'',
   }
   const [data , setData] = useState(initialScoreState);
   const handleChangeScore = (e)=>{
    const{name:key , value} = e.target;
    const val = +value
    console.log( 'value:', typeof val)
    setData({
        ...data , [key]:val,
    })
   }
   console.log('data:', data)
   const handleSubmit =()=>{
        const evaluvation1Result = (data.Evaluvation_1*data.Score_1)/100;
        const evaluvation2Result = (data.Evaluvation_2*data.Score_2)/100;
        const evaluvation3Result = (data.Evaluvation_3*data.Score_3)/100;
        const evaluvation4Result = (data.Evaluvation_4*data.Score_4)/100;
        const evaluvation5Result = (data.Evaluvation_5*data.Score_5)/100;
        const overallScore = evaluvation1Result+evaluvation2Result+evaluvation3Result+evaluvation4Result+evaluvation5Result;

        
        setData({
            ...data ,
             Result_1:evaluvation1Result,
             Result_2:evaluvation2Result,
             Result_3:evaluvation3Result,
             Result_4:evaluvation4Result,
             Result_5:evaluvation5Result,
             totalResult:overallScore

        })
        
    }
    const handleReset = () =>{
        setData(initialScoreState);
    }
    if(course.course == 'DSA'){
        return(
            <>
            <TableContainer border='2px' w='fit-content' margin='0 auto' p={2} >
                <Table variant='simple' size='sm' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                    <Tr >
                        <Th>Weightage (%) </Th>
                        <Th>Score (out of 10)</Th>
                        <Th isNumeric>result</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr >
                        <Td>
                            <Input textAlign='center' value={data.Evaluvation_1} placeholder='Weightage of week1'  onChange={handleChangeScore}  name='Evaluvation_1' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td>
                            <Input  textAlign='center' value={data.Score_1} placeholder='Score of week1'  onChange={handleChangeScore}  name='Score_1' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td isNumeric> {`${data.Result_1 } / ${data.Evaluvation_1/10} `}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Input  textAlign='center'  value={data.Evaluvation_2} placeholder='Weightage of week2'  onChange={handleChangeScore}  name='Evaluvation_2' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td>
                            <Input  textAlign='center' value={data.Score_2} placeholder='Score of week2' onChange={handleChangeScore}  name='Score_2' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td isNumeric>{`${data.Result_2 } / ${data.Evaluvation_2/10} `}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Input textAlign='center'   value={data.Evaluvation_3} placeholder='Weightage of week3'  onChange={handleChangeScore}  name='Evaluvation_3' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td>
                            <Input textAlign='center' value={data.Score_3} placeholder='Score of week3'  onChange={handleChangeScore}  name='Score_3' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td isNumeric>{`${data.Result_3 } / ${data.Evaluvation_3/10} `}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Input  textAlign='center' value={data.Evaluvation_4} placeholder='Weightage of week4'   onChange={handleChangeScore}  name='Evaluvation_4' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td>
                            <Input  textAlign='center' value={data.Score_4} placeholder='Score of week4' onChange={handleChangeScore}  name='Score_4' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td isNumeric>{`${data.Result_4 } / ${data.Evaluvation_4/10} `}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Input  textAlign='center'  value={data.Evaluvation_5} placeholder='Weightage of week5'  onChange={handleChangeScore}  name='Evaluvation_5' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td>
                            <Input  textAlign='center' value={data.Score_5} placeholder='Score of week5' onChange={handleChangeScore}  name='Score_5' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td isNumeric>{`${data.Result_5 } / ${data.Evaluvation_5/10} `}</Td>
                    </Tr>
                    </Tbody>
                    <Tfoot>
                    <Tr>
                        <Td> the Weightage alltogether equal to 100 </Td>
                        <Th> The Score must be from 1 to 10  </Th>
                        <Th isNumeric> Total: <Text as='b' fontSize='xl'  >{ data.totalResult } </Text>  </Th>
                    </Tr> 
                    </Tfoot>
                </Table>
                    <Flex  justifyContent='center' alignItems='center' w='100%' gap={5} >
                        <Button onClick={handleReset} bg='red.500' color='#fff' >Reset</Button>
                        <Button onClick={handleSubmit} bg='red.500' color='#fff' > Get My Score </Button>
                    </Flex>
            </TableContainer>
            
            
            </>
        )
    }else if(course.course == 'Coding'){
        return(
            <>
            <TableContainer border='2px' w='fit-content' margin='0 auto' p={2} >
                <Table variant='simple' size='sm' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                    <Tr >
                        <Th>Weightage (%) </Th>
                        <Th>Score (out of 10)</Th>
                        <Th isNumeric>result</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr >
                        <Td>
                            <Input  onChange={handleChangeScore}  value={data.Evaluvation_1} placeholder='Weightage of week1'  name='Evaluvation_1' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td>
                            <Input  onChange={handleChangeScore} value={data.Score_1} placeholder='Score of week1' name='Score_1' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td isNumeric> {`${data.Result_1 } / ${data.Evaluvation_1/10} `}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Input  onChange={handleChangeScore}  value={data.Evaluvation_2} placeholder='Weightage of week2'  name='Evaluvation_2' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td>
                            <Input  onChange={handleChangeScore} value={data.Score_2} placeholder='Score of week2' name='Score_2' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td isNumeric>{`${data.Result_2 } / ${data.Evaluvation_2/10} `}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Input  onChange={handleChangeScore}  value={data.Evaluvation_3} placeholder='Weightage of week3'  name='Evaluvation_3' type='number' w='auto' variant='flushed'borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td>
                            <Input  onChange={handleChangeScore} value={data.Score_3} placeholder='Score of week3' name='Score_3' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td isNumeric>{`${data.Result_3 } / ${data.Evaluvation_3/10} `}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Input  onChange={handleChangeScore}  value={data.Evaluvation_4} placeholder='Weightage of week4'  name='Evaluvation_4' type='number' w='auto' variant='flushed' borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td>
                            <Input  onChange={handleChangeScore} value={data.Score_4} placeholder='Score of week4' name='Score_4' type='number' w='auto' variant='flushed'borderBottom='1px' borderColor='red.400' />
                        </Td>
                        <Td isNumeric>{`${data.Result_4 } / ${data.Evaluvation_4/10} `}</Td>
                    </Tr>
                    </Tbody>
                    <Tfoot>
                    <Tr>
                        <Td> the Weightage alltogether equal to 100 </Td>
                        <Th> The Score must be from 1 to 10  </Th>
                        <Th isNumeric> Total: <Text as='b' fontSize='xl'  >{ data.totalResult } </Text>  </Th>
                    </Tr> 
                    </Tfoot>
                </Table>
                    <Flex  justifyContent='center' alignItems='center' w='100%' gap={3} >
                        <Button onClick={handleReset} bg='red.500' color='#fff' >Reset</Button>
                        <Button onClick={handleSubmit} bg='red.500' color='#fff' > Get My Score </Button>
                    </Flex>
            </TableContainer>
            
            
            </>
        )
    }
    return(  <Text> we are still <Text as='b'>working</Text>   on that . It will soon be updated </Text>)
    
}
export default CalculatorCalculation;