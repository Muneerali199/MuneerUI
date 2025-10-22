import { Table, Box, Text } from '@chakra-ui/react';

const CodeCell = ({ content = '' }) => {
  return (
    <Box
      fontFamily="monospace"
      py={1}
      px={2}
      ml={2}
      borderRadius="5px"
      width="fit-content"
      fontWeight={500}
      color="#e9e9e9"
      backgroundColor="#FFD700"
    >
      {content}
    </Box>
  );
};

const PropTable = ({ data }) => {
  return (
    <Box mt={12}>
      <h2 className="demo-title-extra">Props</h2>
      <Box overflowX="auto" mt={6}>
        <Table.Root variant="line" size="sm" className="props-table">
          <Table.Header borderBottom="1px solid #333">
            <Table.Row backgroundColor="#333" borderRadius="20px">
              <Table.ColumnHeader
                letterSpacing="-.5px"
                borderRight="1px solid #333"
                textTransform={'capitalize'}
                fontSize={'l'}
                p={4}
                color="#FFD700"
              >
                Property
              </Table.ColumnHeader>
              <Table.ColumnHeader
                letterSpacing="-.5px"
                borderRight="1px solid #333"
                textTransform={'capitalize'}
                fontSize={'l'}
                p={4}
                color="#FFD700"
              >
                Type
              </Table.ColumnHeader>
              <Table.ColumnHeader
                letterSpacing="-.5px"
                borderRight="1px solid #333"
                textTransform={'capitalize'}
                fontSize={'l'}
                p={4}
                color="#FFD700"
              >
                Default
              </Table.ColumnHeader>
              <Table.ColumnHeader letterSpacing="-.5px" textTransform={'capitalize'} fontSize={'l'} p={4} color="#FFD700">
                Description
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((prop, index) => (
              <Table.Row key={index} borderBottom={index === data.length - 1 ? 'none' : '1px solid #333'}>
                <Table.Cell
                  borderColor="#333"
                  p={2}
                  color="white"
                  width={0}
                  borderRight="1px solid #333"
                  bg={'#333'}
                >
                  <CodeCell rightJustified content={prop.name} />
                </Table.Cell>
                <Table.Cell
                  borderColor="#333"
                  p={4}
                  color="white"
                  whiteSpace="nowrap"
                  width={'120px'}
                  borderRight="1px solid #333"
                  bg={'#333'}
                >
                  <Text fontFamily="monospace" fontWeight={500}>
                    {prop.type}
                  </Text>
                </Table.Cell>
                <Table.Cell
                  borderColor="#333"
                  p={2}
                  color="white"
                  borderRight="1px solid #333"
                  whiteSpace="nowrap"
                  bg={'#333'}
                >
                  <CodeCell content={prop.default && prop.default.length ? prop.default : '—'} />
                </Table.Cell>
                <Table.Cell borderColor="#333" p={4} color="white" bg={'#333'}>
                  <Text maxW={300}>{prop.description}</Text>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
};

export default PropTable;
