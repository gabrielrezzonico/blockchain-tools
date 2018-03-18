export interface Opcode {
  value: string;
  mnemonic: string;
  gas: string;
  removeStack:string;
  addStack:string;
  notes: string;
  formula: string;
}

export const OPCODES:Opcode[] = [
 {
   "value": "0x00",
   "mnemonic": "STOP",
   "gas": "0",
   "removeStack": "0",
   "addStack": "0",
   "notes": "Halts execution.",
   "formula": ""
 },
 {
   "value": "0x01",
   "mnemonic": "ADD",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Addition operation",
   "formula": ""
 },
 {
   "value": "0x02",
   "mnemonic": "MUL",
   "gas": "5",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Multiplication operation.",
   "formula": ""
 },
 {
   "value": "0x03",
   "mnemonic": "SUB",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Subtraction operation.",
   "formula": ""
 },
 {
   "value": "0x04",
   "mnemonic": "DIV",
   "gas": "5",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Integer division operation.",
   "formula": ""
 },
 {
   "value": "0x05",
   "mnemonic": "SDIV",
   "gas": "5",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Signed integer division operation (truncated).",
   "formula": ""
 },
 {
   "value": "0x06",
   "mnemonic": "MOD",
   "gas": "5",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Modulo remainder operation",
   "formula": ""
 },
 {
   "value": "0x07",
   "mnemonic": "SMOD",
   "gas": "5",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Signed modulo remainder operation.",
   "formula": ""
 },
 {
   "value": "0x08",
   "mnemonic": "ADDMOD",
   "gas": "8",
   "removeStack": "3",
   "addStack": "1",
   "notes": "Modulo addition operation.",
   "formula": ""
 },
 {
   "value": "0x09",
   "mnemonic": "MULMOD",
   "gas": "8",
   "removeStack": "3",
   "addStack": "1",
   "notes": "Modulo multiplication operation.",
   "formula": ""
 },
 {
   "value": "0x0a",
   "mnemonic": "EXP",
   "gas": "FORMULA",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Exponential operation.",
   "formula": "(exp == 0) ? 10 : (10 + 10 * (1 + log256(exp)))"
 },
 {
   "value": "0x0b",
   "mnemonic": "SIGNEXTEND",
   "gas": "5",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Extend length of two’s complement signed integer.",
   "formula": ""
 },
 {
   "value": "0x10",
   "mnemonic": "LT",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Less-than comparison.",
   "formula": ""
 },
 {
   "value": "0x11",
   "mnemonic": "GT",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Greater-than comparison.",
   "formula": ""
 },
 {
   "value": "0x12",
   "mnemonic": "SLT",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Signed less-than comparison.",
   "formula": ""
 },
 {
   "value": "0x13",
   "mnemonic": "SGT",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Signed greater-than comparison.",
   "formula": ""
 },
 {
   "value": "0x14",
   "mnemonic": "EQ",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Equality comparison.",
   "formula": ""
 },
 {
   "value": "0x15",
   "mnemonic": "ISZERO",
   "gas": "3",
   "removeStack": "1",
   "addStack": "1",
   "notes": "Simple not operator.",
   "formula": ""
 },
 {
   "value": "0x16",
   "mnemonic": "AND",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Bitwise AND operation.",
   "formula": ""
 },
 {
   "value": "0x17",
   "mnemonic": "OR",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Bitwise OR operation",
   "formula": ""
 },
 {
   "value": "0x18",
   "mnemonic": "XOR",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Bitwise XOR operation.",
   "formula": ""
 },
 {
   "value": "0x19",
   "mnemonic": "NOT",
   "gas": "3",
   "removeStack": "1",
   "addStack": "1",
   "notes": "Bitwise NOT operation.",
   "formula": ""
 },
 {
   "value": "0x1a",
   "mnemonic": "BYTE",
   "gas": "3",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Retrieve single byte from word",
   "formula": ""
 },
 {
   "value": "0x20",
   "mnemonic": "SHA3",
   "gas": "FORMULA",
   "removeStack": "2",
   "addStack": "1",
   "notes": "Compute Keccak-256 hash.",
   "formula": "30 + 6 * (size of input in words)"
 },
 {
   "value": "0x30",
   "mnemonic": "ADDRESS",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get address of currently executing account.",
   "formula": ""
 },
 {
   "value": "0x31",
   "mnemonic": "BALANCE",
   "gas": "400",
   "removeStack": "1",
   "addStack": "1",
   "notes": "Get balance of the given account.",
   "formula": ""
 },
 {
   "value": "0x32",
   "mnemonic": "ORIGIN",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get execution origination address.",
   "formula": ""
 },
 {
   "value": "0x33",
   "mnemonic": "CALLER",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get caller address.",
   "formula": ""
 },
 {
   "value": "0x34",
   "mnemonic": "CALLVALUE",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get deposited value by the instruction/transaction responsible for this execution.",
   "formula": ""
 },
 {
   "value": "0x35",
   "mnemonic": "CALLDATALOAD",
   "gas": "3",
   "removeStack": "1",
   "addStack": "1",
   "notes": "Get input data of current environment.",
   "formula": ""
 },
 {
   "value": "0x36",
   "mnemonic": "CALLDATASIZE",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get size of input data in current environment.",
   "formula": ""
 },
 {
   "value": "0x37",
   "mnemonic": "CALLDATACOPY",
   "gas": "FORMULA",
   "removeStack": "3",
   "addStack": "0",
   "notes": "Copy input data in current environment to memory.",
   "formula": "2 + 3 * (number of words copied, rounded up)"
 },
 {
   "value": "0x38",
   "mnemonic": "CODESIZE",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get size of code running in current environment.",
   "formula": ""
 },
 {
   "value": "0x39",
   "mnemonic": "CODECOPY",
   "gas": "FORMULA",
   "removeStack": "3",
   "addStack": "0",
   "notes": "Copy code running in current environment to memory.",
   "formula": "2 + 3 * (number of words copied, rounded up)"
 },
 {
   "value": "0x3a",
   "mnemonic": "GASPRICE",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get price of gas in current environment.",
   "formula": ""
 },
 {
   "value": "0x3b",
   "mnemonic": "EXTCODESIZE",
   "gas": "700",
   "removeStack": "1",
   "addStack": "1",
   "notes": "Get size of an account’s code.",
   "formula": ""
 },
 {
   "value": "0x3c",
   "mnemonic": "EXTCODECOPY",
   "gas": "FORMULA",
   "removeStack": "4",
   "addStack": "0",
   "notes": "Copy an account’s code to memory.",
   "formula": "700 + 3 * (number of words copied, rounded up)"
 },
 {
   "value": "0x40",
   "mnemonic": "BLOCKHASH",
   "gas": "20",
   "removeStack": "1",
   "addStack": "1",
   "notes": "Get the hash of one of the 256 most recent complete blocks.",
   "formula": ""
 },
 {
   "value": "0x41",
   "mnemonic": "COINBASE",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get the block’s beneficiary address.",
   "formula": ""
 },
 {
   "value": "0x42",
   "mnemonic": "TIMESTAMP",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get the block’s timestamp.",
   "formula": ""
 },
 {
   "value": "0x43",
   "mnemonic": "NUMBER",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get the block’s number.",
   "formula": ""
 },
 {
   "value": "0x44",
   "mnemonic": "DIFFICULTY",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get the block’s difficulty.",
   "formula": ""
 },
 {
   "value": "0x45",
   "mnemonic": "GASLIMIT",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get the block’s gas limit.",
   "formula": ""
 },
 {
   "value": "0x50",
   "mnemonic": "POP",
   "gas": "2",
   "removeStack": "1",
   "addStack": "0",
   "notes": "Remove item from stack.",
   "formula": ""
 },
 {
   "value": "0x51",
   "mnemonic": "MLOAD",
   "gas": "3",
   "removeStack": "1",
   "addStack": "1",
   "notes": "Load word from memory.",
   "formula": ""
 },
 {
   "value": "0x52",
   "mnemonic": "MSTORE",
   "gas": "3",
   "removeStack": "2",
   "addStack": "0",
   "notes": "Save word to memory",
   "formula": ""
 },
 {
   "value": "0x53",
   "mnemonic": "MSTORE8",
   "gas": "3",
   "removeStack": "2",
   "addStack": "0",
   "notes": "Save byte to memory.",
   "formula": ""
 },
 {
   "value": "0x54",
   "mnemonic": "SLOAD",
   "gas": "200",
   "removeStack": "1",
   "addStack": "1",
   "notes": "Load word from storage",
   "formula": ""
 },
 {
   "value": "0x55",
   "mnemonic": "SSTORE",
   "gas": "FORMULA",
   "removeStack": "1",
   "addStack": "1",
   "notes": "Save word to storage.",
   "formula": "((value != 0) && (storage_location == 0)) ? 20000 : 5000"
 },
 {
   "value": "0x56",
   "mnemonic": "JUMP",
   "gas": "8",
   "removeStack": "1",
   "addStack": "0",
   "notes": "Alter the program counter",
   "formula": ""
 },
 {
   "value": "0x57",
   "mnemonic": "JUMPI",
   "gas": "10",
   "removeStack": "2",
   "addStack": "0",
   "notes": "Conditionally alter the program counter.",
   "formula": ""
 },
 {
   "value": "0x58",
   "mnemonic": "PC",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get the value of the program counter prior to the increment corresponding to this instruction.",
   "formula": ""
 },
 {
   "value": "0x59",
   "mnemonic": "MSIZE",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get the size of active memory in bytes.",
   "formula": ""
 },
 {
   "value": "0x5a",
   "mnemonic": "GAS",
   "gas": "2",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Get the amount of available gas, including the corresponding reduction for the cost of this instruction.",
   "formula": ""
 },
 {
   "value": "0x5b",
   "mnemonic": "JUMPDEST",
   "gas": "1",
   "removeStack": "0",
   "addStack": "0",
   "notes": "Mark a valid destination for jumps",
   "formula": ""
 },
 {
   "value": "0x60 -- 0x7f",
   "mnemonic": "PUSH*",
   "gas": "3",
   "removeStack": "0",
   "addStack": "1",
   "notes": "Place * byte item on stack. 0 < * <= 32",
   "formula": ""
 },
 {
   "value": "0x80 -- 0x8f",
   "mnemonic": "DUP*",
   "gas": "3",
   "removeStack": "*",
   "addStack": "* + 1",
   "notes": "Duplicate *th stack item. 0 < * <= 16",
   "formula": ""
 },
 {
   "value": "0x90 -- 0x9f",
   "mnemonic": "SWAP*",
   "gas": "3",
   "removeStack": "* + 1",
   "addStack": "* + 1",
   "notes": "Exchange 1st and (* + 1)th stack items.",
   "formula": ""
 },
 {
   "value": "0xa0",
   "mnemonic": "LOG0",
   "gas": "FORMULA",
   "removeStack": "2",
   "addStack": "0",
   "notes": "Append log record with no topics.",
   "formula": "375 + 8 * (number of bytes in log data)"
 },
 {
   "value": "0xa1",
   "mnemonic": "LOG1",
   "gas": "FORMULA",
   "removeStack": "3",
   "addStack": "0",
   "notes": "Append log record with one topic.",
   "formula": "375 + 8 * (number of bytes in log data) + 375"
 },
 {
   "value": "0xa2",
   "mnemonic": "LOG2",
   "gas": "FORMULA",
   "removeStack": "4",
   "addStack": "0",
   "notes": "Append log record with two topics.",
   "formula": "375 + 8 * (number of bytes in log data) + 2 * 375"
 },
 {
   "value": "0xa3",
   "mnemonic": "LOG3",
   "gas": "FORMULA",
   "removeStack": "5",
   "addStack": "0",
   "notes": "Append log record with three topics.",
   "formula": "375 + 8 * (number of bytes in log data) + 3 * 375"
 },
 {
   "value": "0xa4",
   "mnemonic": "LOG4",
   "gas": "FORMULA",
   "removeStack": "6",
   "addStack": "0",
   "notes": "Append log record with four topics.",
   "formula": "375 + 8 * (number of bytes in log data) + 4 * 375"
 },
 {
   "value": "0xf0",
   "mnemonic": "CREATE",
   "gas": "32000",
   "removeStack": "3",
   "addStack": "1",
   "notes": "Create a new account with associated code.",
   "formula": ""
 },
 {
   "value": "0xf1",
   "mnemonic": "CALL",
   "gas": "FORMULA",
   "removeStack": "7",
   "addStack": "1",
   "notes": "Message-call into an account.",
   "formula": "Complex -- see yellow paper  Appendix H"
 },
 {
   "value": "0xf2",
   "mnemonic": "CALLCODE",
   "gas": "FORMULA",
   "removeStack": "7",
   "addStack": "1",
   "notes": "Message-call into this account with an alternative account’s code.",
   "formula": "Complex -- see yellow paper  Appendix H"
 },
 {
   "value": "0xf3",
   "mnemonic": "RETURN",
   "gas": "0",
   "removeStack": "2",
   "addStack": "0",
   "notes": "Halt execution returning output data.",
   "formula": ""
 },
 {
   "value": "0xf4",
   "mnemonic": "DELEGATECALL",
   "gas": "FORMULA",
   "removeStack": "6",
   "addStack": "1",
   "notes": "Message-call into this account with an alternative account’s code, but persisting the current values for sender and value.",
   "formula": "Complex -- see yellow paper  Appendix H"
 },
 {
   "value": "0xfe",
   "mnemonic": "INVALID",
   "gas": "NA",
   "removeStack": "NA",
   "addStack": "NA",
   "notes": "Designated invalid instruction.",
   "formula": ""
 },
 {
   "value": "0xff",
   "mnemonic": "SELFDESTRUCT",
   "gas": "FORMULA",
   "removeStack": "1",
   "addStack": "0",
   "notes": "Halt execution and register account for later deletion",
   "formula": "5000 + ((create_new_account) ? 25000 : 0)"
 }
]