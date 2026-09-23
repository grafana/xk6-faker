import faker from "k6/x/faker";

export default function () {
  console.log("=== Brazilian Faker Data ===\n");

  console.log("CPF (formatado):     " + faker.br.brCpf());
  console.log("CPF (sem máscara):   " + faker.br.brCpf(false));

  console.log("CNPJ (formatado):    " + faker.br.brCnpj());
  console.log("CNPJ (sem máscara):  " + faker.br.brCnpj(false));
  console.log("CNPJ Alfanumérico:   " + faker.br.brCnpj(true, true));
  console.log("CNPJ Alfa sem másc:  " + faker.br.brCnpj(false, true));

  console.log("Estado:              " + faker.br.brState());
  console.log("Estado (sigla):      " + faker.br.brStateAbbr());

  console.log("Cidade:              " + faker.br.brCity());

  console.log("CEP:                 " + faker.br.brZipCode());

  console.log("RG:                  " + faker.br.brRg());

  console.log("Celular:             " + faker.br.brPhoneNumber());
  console.log("Telefone fixo:       " + faker.br.brPhoneNumber(false));

  console.log("Busca E-comm (auto): " + faker.br.brSearchTerm());
  console.log("Busca (simples):     " + faker.br.brSearchTerm("simple"));
  console.log("Busca (composta):    " + faker.br.brSearchTerm("compound"));
}

/*
  === Brazilian Faker Data ===               
  CPF (formatado):     737.365.072-40           
  CPF (sem máscara):   93852830222              
  CNPJ (formatado):    66.964.034/0965-43       
  CNPJ (sem máscara):  37909325963510           
  Estado:              Rio Grande do Sul        
  Estado (sigla):      RS                       
  Cidade:              Santa Maria                  
  CEP:                 18596-092                
  RG:                  946170602                
  Celular:             (87) 97111-9481          
  Telefone fixo:       (87) 2376-6322           
*/