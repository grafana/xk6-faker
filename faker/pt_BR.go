package faker

import (
	"fmt"
	"math/rand"
	"strconv"
	"strings"

	"github.com/brianvoe/gofakeit/v6"
)

// Brazilian states with full name and abbreviation.
//
//nolint:gochecknoglobals
var brStates = []struct {
	Name string
	Abbr string
}{
	{"Acre", "AC"},
	{"Alagoas", "AL"},
	{"Amapá", "AP"},
	{"Amazonas", "AM"},
	{"Bahia", "BA"},
	{"Ceará", "CE"},
	{"Distrito Federal", "DF"},
	{"Espírito Santo", "ES"},
	{"Goiás", "GO"},
	{"Maranhão", "MA"},
	{"Mato Grosso", "MT"},
	{"Mato Grosso do Sul", "MS"},
	{"Minas Gerais", "MG"},
	{"Pará", "PA"},
	{"Paraíba", "PB"},
	{"Paraná", "PR"},
	{"Pernambuco", "PE"},
	{"Piauí", "PI"},
	{"Rio de Janeiro", "RJ"},
	{"Rio Grande do Norte", "RN"},
	{"Rio Grande do Sul", "RS"},
	{"Rondônia", "RO"},
	{"Roraima", "RR"},
	{"Santa Catarina", "SC"},
	{"São Paulo", "SP"},
	{"Sergipe", "SE"},
	{"Tocantins", "TO"},
}

// Brazilian cities (well-known real cities).
//
//nolint:gochecknoglobals
var brCities = []string{
	"São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza",
	"Belo Horizonte", "Manaus", "Curitiba", "Recife", "Goiânia",
	"Belém", "Porto Alegre", "Guarulhos", "Campinas", "São Luís",
	"Maceió", "Campo Grande", "São Gonçalo", "Teresina", "João Pessoa",
	"Natal", "Santo André", "Osasco", "Ribeirão Preto", "Uberlândia",
	"Aracaju", "Feira de Santana", "Cuiabá", "Joinville", "Aparecida de Goiânia",
	"Londrina", "Juiz de Fora", "Niterói", "Florianópolis", "Vitória",
	"São José dos Campos", "Serra", "Caxias do Sul", "Vila Velha", "Macapá",
	"Maringá", "Santos", "Mogi das Cruzes", "Betim", "Piracicaba",
	"Jundiaí", "Carapicuíba", "Bauru", "São Vicente", "Palmas",
}

// Prefixes used to generate dynamic city names.
//
//nolint:gochecknoglobals
var brCityPrefixes = []string{
	"Santa", "São", "Nova", "Vila", "Alto", "Barra", "Porto", "Lagoa",
}

// Suffixes used to generate dynamic city names.
//
//nolint:gochecknoglobals
var brCitySuffixes = []string{
	" do Norte", " do Sul", " do Oeste", " do Leste",
	" da Serra", " dos Campos", " de Nossa Senhora",
	" do Descoberto", " das Flores", " das Pedras",
	" dos Pinheiros", " da Mata", " dos Palmares",
	" da Esperança", " do Rio Verde", "Maria",
}

// Valid Brazilian area codes (DDDs).
//
//nolint:gochecknoglobals
var brAreaCodes = []string{
	"11", "12", "13", "14", "15", "16", "17", "18", "19", // SP
	"21", "22", "24", // RJ
	"27", "28", // ES
	"31", "32", "33", "34", "35", "37", "38", // MG
	"41", "42", "43", "44", "45", "46", // PR
	"47", "48", "49", // SC
	"51", "53", "54", "55", // RS
	"61",       // DF
	"62", "64", // GO
	"63",       // TO
	"65", "66", // MT
	"67",                         // MS
	"68",                         // AC
	"69",                         // RO
	"71", "73", "74", "75", "77", // BA
	"79",       // SE
	"81", "87", // PE
	"82",       // AL
	"83",       // PB
	"84",       // RN
	"85", "88", // CE
	"86", "89", // PI
	"91", "93", "94", // PA
	"92", "97", // AM
	"95",       // RR
	"96",       // AP
	"98", "99", // MA
}

func init() { //nolint:funlen
	gofakeit.AddFuncLookup("brcpf", gofakeit.Info{
		Display:     "BR CPF",
		Category:    "br",
		Description: "Brazilian individual taxpayer registry identification number (CPF) with valid check digits",
		Example:     "123.456.789-09",
		Output:      "string",
		Params: []gofakeit.Param{
			{
				Field:   "formatted",
				Display: "Formatted",
				Type:    "bool",
				Default: "true",
				Description: "If true, returns the CPF with formatting " +
					"(XXX.XXX.XXX-XX). If false, returns only digits",
			},
		},
		Generate: brCPF,
	})

	gofakeit.AddFuncLookup("brcnpj", gofakeit.Info{
		Display:     "BR CNPJ",
		Category:    "br",
		Description: "Brazilian company taxpayer registry identification number (CNPJ) with valid check digits",
		Example:     "11.222.333/0001-81",
		Output:      "string",
		Params: []gofakeit.Param{
			{
				Field:   "formatted",
				Display: "Formatted",
				Type:    "bool",
				Default: "true",
				Description: "If true, returns the CNPJ with formatting " +
					"(XX.XXX.XXX/XXXX-XX). If false, returns only digits or characters",
			},
			{
				Field:   "alphanumeric",
				Display: "Alphanumeric",
				Type:    "bool",
				Default: "false",
				Description: "If true, allows alphanumeric characters in positions 1 to 12 as per IN RFB 2.229/2024. " +
					"If false, generates strictly numeric CNPJ",
			},
		},
		Generate: brCNPJ,
	})

	gofakeit.AddFuncLookup("brstate", gofakeit.Info{
		Display:     "BR State",
		Category:    "br",
		Description: "Full name of a random Brazilian state",
		Example:     "Rio Grande do Sul",
		Output:      "string",
		Params:      nil,
		Generate:    brState,
	})

	gofakeit.AddFuncLookup("brstateabbr", gofakeit.Info{
		Display:     "BR State Abbr",
		Category:    "br",
		Description: "Two-letter abbreviation of a random Brazilian state",
		Example:     "RS",
		Output:      "string",
		Params:      nil,
		Generate:    brStateAbbr,
	})

	gofakeit.AddFuncLookup("brcity", gofakeit.Info{
		Display:     "BR City",
		Category:    "br",
		Description: "Name of a random Brazilian city, either from a real city list or dynamically generated",
		Example:     "Santa Maria",
		Output:      "string",
		Params:      nil,
		Generate:    brCity,
	})

	gofakeit.AddFuncLookup("brzipcode", gofakeit.Info{
		Display:     "BR Zip Code",
		Category:    "br",
		Description: "Brazilian postal code (CEP) in the format XXXXX-XXX",
		Example:     "01310-100",
		Output:      "string",
		Params:      nil,
		Generate:    brZipCode,
	})

	gofakeit.AddFuncLookup("brrg", gofakeit.Info{
		Display:     "BR RG",
		Category:    "br",
		Description: "Brazilian general registration number (RG) as a 9-digit numeric string",
		Example:     "284736519",
		Output:      "string",
		Params:      nil,
		Generate:    brRG,
	})

	gofakeit.AddFuncLookup("brphonenumber", gofakeit.Info{
		Display:     "BR Phone Number",
		Category:    "br",
		Description: "Brazilian fake phone number with area code (DDD) in mobile or landline format",
		Example:     "(55) 98765-4321",
		Output:      "string",
		Params: []gofakeit.Param{
			{
				Field:   "mobile",
				Display: "Mobile",
				Type:    "bool",
				Default: "true",
				Description: "If true, generates a mobile number (XX) 9XXXX-XXXX. " +
					"If false, generates a landline number (XX) XXXX-XXXX",
			},
		},
		Generate: brPhoneNumber,
	})

	gofakeit.AddFuncLookup("brsearchterm", gofakeit.Info{
		Display:     "BR Search Term",
		Category:    "br",
		Description: "Random Brazilian e-commerce search query term (marketplace/products)",
		Example:     "smartphone 128gb",
		Output:      "string",
		Params: []gofakeit.Param{
			{
				Field:   "mode",
				Display: "Mode",
				Type:    "string",
				Default: "random",
				Description: "Search term mode: 'random' (mix of simple and compound), " +
					"'simple' (single/core product term), or 'compound' (product with brand/attributes/specs)",
			},
		},
		Generate: brSearchTerm,
	})
}

// brCPF generates a valid Brazilian CPF number.
func brCPF(r *rand.Rand, m *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
	formatted := true

	if m != nil && m.Get("formatted") != nil {
		val, err := strconv.ParseBool(m.Get("formatted")[0])
		if err == nil {
			formatted = val
		}
	}

	const cpfLen = 11

	digits := make([]int, cpfLen)
	for i := range digits[:9] {
		digits[i] = r.Intn(10) //nolint:mnd
	}

	// Avoid all-same-digit CPFs (e.g. 111.111.111-11).
	allSame := true
	for _, d := range digits[1:9] {
		if d != digits[0] {
			allSame = false

			break
		}
	}

	const lastBaseDigit = 8

	if allSame {
		digits[lastBaseDigit] = (digits[0] + 1) % 10 //nolint:mnd
	}

	digits[9] = cpfCheckDigit(digits[:9], []int{10, 9, 8, 7, 6, 5, 4, 3, 2})
	digits[10] = cpfCheckDigit(digits[:10], []int{11, 10, 9, 8, 7, 6, 5, 4, 3, 2})

	if formatted {
		return fmt.Sprintf(
			"%d%d%d.%d%d%d.%d%d%d-%d%d",
			digits[0], digits[1], digits[2],
			digits[3], digits[4], digits[5],
			digits[6], digits[7], digits[8],
			digits[9], digits[10],
		), nil
	}

	return digitsToString(digits), nil
}

// cpfCheckDigit calculates a CPF check digit using modulo 11.
func cpfCheckDigit(digits []int, weights []int) int {
	sum := 0
	for i, w := range weights {
		sum += digits[i] * w
	}

	remainder := sum % 11 //nolint:mnd

	const threshold = 2

	if remainder < threshold {
		return 0
	}

	return 11 - remainder //nolint:mnd
}

func parseBoolParam(m *gofakeit.MapParams, key string, def bool) bool {
	if m == nil {
		return def
	}

	v := m.Get(key)
	if len(v) == 0 {
		return def
	}

	val, err := strconv.ParseBool(v[0])
	if err != nil {
		return def
	}

	return val
}

const cnpjAlphanumericChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// brCNPJ generates a valid Brazilian CNPJ number (numeric or alphanumeric).
func brCNPJ(r *rand.Rand, m *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
	formatted := parseBoolParam(m, "formatted", true)
	alphanumeric := parseBoolParam(m, "alphanumeric", false)

	const (
		rootAndBranchLen = 12
		cnpjLen          = 14
		asciiZero        = 48
		numDigits        = 10
	)

	// values holds the numeric value for each character for check digit calculation.
	// As per IN RFB 2.229/2024: value = ASCII - 48.
	// Digits '0'-'9' (ASCII 48-57) -> values 0-9.
	// Letters 'A'-'Z' (ASCII 65-90) -> values 17-42.
	values := make([]int, cnpjLen)
	chars := make([]byte, rootAndBranchLen)

	if alphanumeric {
		hasLetter := false
		for i := range rootAndBranchLen {
			c := cnpjAlphanumericChars[r.Intn(len(cnpjAlphanumericChars))]
			chars[i] = c
			values[i] = int(c) - asciiZero
			if c >= 'A' && c <= 'Z' {
				hasLetter = true
			}
		}

		// Ensure at least one letter is present when alphanumeric is explicitly requested.
		if !hasLetter {
			pos := r.Intn(rootAndBranchLen)
			letterIdx := numDigits + r.Intn(len(cnpjAlphanumericChars)-numDigits)
			c := cnpjAlphanumericChars[letterIdx]
			chars[pos] = c
			values[pos] = int(c) - asciiZero
		}
	} else {
		for i := range rootAndBranchLen {
			d := r.Intn(numDigits)
			chars[i] = cnpjAlphanumericChars[d]
			values[i] = d
		}
	}

	values[12] = cnpjCheckDigit(values[:12], []int{5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2})
	values[13] = cnpjCheckDigit(values[:13], []int{6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2})

	dv1 := values[12]
	dv2 := values[13]

	if formatted {
		return fmt.Sprintf(
			"%s.%s.%s/%s-%d%d",
			string(chars[0:2]),
			string(chars[2:5]),
			string(chars[5:8]),
			string(chars[8:12]),
			dv1,
			dv2,
		), nil
	}

	return fmt.Sprintf("%s%d%d", string(chars), dv1, dv2), nil
}

// cnpjCheckDigit calculates a CNPJ check digit using modulo 11.
func cnpjCheckDigit(digits []int, weights []int) int {
	sum := 0
	for i, w := range weights {
		sum += digits[i] * w
	}

	remainder := sum % 11 //nolint:mnd

	const threshold = 2

	if remainder < threshold {
		return 0
	}

	return 11 - remainder //nolint:mnd
}

// brState returns the full name of a random Brazilian state.
func brState(r *rand.Rand, _ *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
	return brStates[r.Intn(len(brStates))].Name, nil
}

// brStateAbbr returns the two-letter abbreviation of a random Brazilian state.
func brStateAbbr(r *rand.Rand, _ *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
	return brStates[r.Intn(len(brStates))].Abbr, nil
}

// brCity returns the name of a random Brazilian city.
// It uses a hybrid approach: 50% chance of returning a real city name,
// and 50% chance of generating a dynamic city name using prefix + suffix.
func brCity(r *rand.Rand, _ *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
	const halfChance = 2

	if r.Intn(halfChance) == 0 {
		return brCities[r.Intn(len(brCities))], nil
	}

	prefix := brCityPrefixes[r.Intn(len(brCityPrefixes))]
	suffix := brCitySuffixes[r.Intn(len(brCitySuffixes))]

	return prefix + suffix, nil
}

// brZipCode generates a Brazilian postal code (CEP) in the format XXXXX-XXX.
func brZipCode(r *rand.Rand, _ *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
	const (
		prefixMax = 100000
		suffixMax = 1000
	)

	prefix := r.Intn(prefixMax)
	suffix := r.Intn(suffixMax)

	return fmt.Sprintf("%05d-%03d", prefix, suffix), nil
}

// brRG generates a Brazilian general registration number (RG) as a 9-digit string.
func brRG(r *rand.Rand, _ *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
	const numDigits = 9

	digits := make([]int, numDigits)
	for i := range digits {
		digits[i] = r.Intn(10) //nolint:mnd
	}

	return digitsToString(digits), nil
}

// brPhoneNumber generates a Brazilian phone number with area code.
func brPhoneNumber(r *rand.Rand, m *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
	mobile := true

	if m != nil && m.Get("mobile") != nil {
		val, err := strconv.ParseBool(m.Get("mobile")[0])
		if err == nil {
			mobile = val
		}
	}

	areaCode := brAreaCodes[r.Intn(len(brAreaCodes))]

	const (
		firstPartMax  = 10000
		secondPartMax = 10000
	)

	if mobile {
		firstPart := r.Intn(firstPartMax)
		secondPart := r.Intn(secondPartMax)

		return fmt.Sprintf("(%s) 9%04d-%04d", areaCode, firstPart, secondPart), nil
	}

	firstPart := r.Intn(firstPartMax)
	secondPart := r.Intn(secondPartMax)

	return fmt.Sprintf("(%s) %04d-%04d", areaCode, firstPart, secondPart), nil
}

// digitsToString converts a slice of single-digit integers to a string.
func digitsToString(digits []int) string {
	var builder strings.Builder

	for _, d := range digits {
		builder.WriteString(strconv.Itoa(d))
	}

	return builder.String()
}

// brSearchSimpleTerms contains single and core Brazilian e-commerce product query terms.
//
//nolint:gochecknoglobals,misspell
var brSearchSimpleTerms = []string{
	// Eletrônicos & Informática
	"smartphone", "celular", "notebook", "tablet", "smart tv",
	"monitor gamer", "teclado mecânico", "mouse sem fio", "fone bluetooth",
	"caixa de som", "smartwatch", "console", "placa de vídeo", "webcam",
	// Eletrodomésticos
	"geladeira", "fogão", "micro-ondas", "air fryer", "máquina de lavar",
	"lava e seca", "cafeteira", "liquidificador", "aspirador robô", "ar condicionado",
	"ventilador", "batedeira", "sanduicheira",
	// Moda & Calçados
	"tênis", "tênis de corrida", "calça jeans", "camisa polo", "camiseta",
	"vestido", "moletom", "jaqueta", "mochila", "relógio",
	// Casa & Decoração
	"jogo de panelas", "faqueiro inox", "edredom", "travesseiro", "cortina blackout",
	"sofá", "cadeira gamer", "cadeira de escritório", "mesa de jantar", "espelho",
	// Beleza, Saúde & Fitness
	"perfume", "protetor solar", "secador de cabelo", "chapinha", "escova secadora",
	"whey protein", "creatina", "tapete de yoga", "bicicleta", "esteira ergométrica",
}

// brSearchProducts contains product bases used to build compound search queries.
//
//nolint:gochecknoglobals,misspell
var brSearchProducts = []string{
	"smartphone", "celular", "notebook", "smart tv", "monitor gamer",
	"fone bluetooth", "caixa de som", "smartwatch", "teclado mecânico",
	"geladeira", "fogão", "micro-ondas", "air fryer", "máquina de lavar",
	"lava e seca", "cafeteira", "aspirador robô", "ar condicionado", "ventilador",
	"tênis", "tênis de corrida", "calça jeans", "camisa polo", "moletom",
	"jaqueta", "vestido", "mochila", "jogo de panelas", "cadeira gamer",
	"cadeira de escritório", "perfume", "secador de cabelo", "escova secadora",
	"whey protein", "creatina", "bicicleta",
}

// brSearchModifiers contains attributes, specs, adjectives, and qualifiers.
//
//nolint:gochecknoglobals,misspell
var brSearchModifiers = []string{
	"128gb", "256gb", "512gb", "4k", "50 polegadas", "55 polegadas", "65 polegadas",
	"gamer", "sem fio", "bluetooth", "16gb ram", "i5", "i7", "ryzen 5", "ryzen 7",
	"frost free", "inox", "inverter", "12000 btus", "9000 btus", "digital",
	"masculino", "feminino", "unissex", "infantil", "de corrida", "casual",
	"couro", "algodão", "impermeável", "ergonômica", "blackout", "antiaderente",
	"isolado", "monohidratada", "100% puro", "importado", "profissional", "bivolt",
}

// brSearchBrands contains popular Brazilian and global brands common in e-commerce searches.
//
//nolint:gochecknoglobals
var brSearchBrands = []string{
	"samsung", "apple", "xiaomi", "motorola", "lg", "dell", "lenovo", "acer", "asus",
	"sony", "jbl", "philips", "electrolux", "brastemp", "consul", "mondial", "britânia",
	"arno", "oster", "nike", "adidas", "puma", "olympikus", "mizuno", "asics",
	"tramontina", "growth", "max titanium", "natura", "o boticário",
}

// brSearchTerm generates a random Brazilian e-commerce search query term.
func brSearchTerm(r *rand.Rand, m *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
	mode := "random"

	if m != nil {
		if v := m.Get("mode"); len(v) > 0 && len(v[0]) > 0 {
			mode = strings.ToLower(v[0])
		}
	}

	var isCompound bool

	switch mode {
	case "simple":
		isCompound = false
	case "compound":
		isCompound = true
	default: // "random" or any unrecognized mode
		isCompound = r.Intn(2) == 1 //nolint:mnd
	}

	if !isCompound {
		return brSearchSimpleTerms[r.Intn(len(brSearchSimpleTerms))], nil
	}

	return generateCompoundSearchTerm(r), nil
}

func generateCompoundSearchTerm(r *rand.Rand) string {
	prod := brSearchProducts[r.Intn(len(brSearchProducts))]
	brand := brSearchBrands[r.Intn(len(brSearchBrands))]
	mod1 := brSearchModifiers[r.Intn(len(brSearchModifiers))]
	mod2 := brSearchModifiers[r.Intn(len(brSearchModifiers))]
	for mod2 == mod1 {
		mod2 = brSearchModifiers[r.Intn(len(brSearchModifiers))]
	}

	const numPatterns = 4
	switch r.Intn(numPatterns) {
	case 0:
		return prod + " " + mod1
	case 1:
		return prod + " " + brand
	case 2:
		return prod + " " + brand + " " + mod1
	default:
		return prod + " " + mod1 + " " + mod2
	}
}
