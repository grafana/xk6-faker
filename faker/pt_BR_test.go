package faker

import (
	"math/rand"
	"regexp"
	"strconv"
	"testing"

	"github.com/brianvoe/gofakeit/v6"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func newTestRand() *rand.Rand {
	const seed = 42

	return rand.New(rand.NewSource(seed)) //#nosec G404
}

func TestBrCPFFormatted(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	pattern := regexp.MustCompile(`^\d{3}\.\d{3}\.\d{3}-\d{2}$`)

	for range 100 {
		result, err := brCPF(r, nil, nil)
		require.NoError(t, err)

		cpf, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, cpf, "CPF should match format XXX.XXX.XXX-XX")
	}
}

func TestBrCPFUnformatted(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("formatted", "false")

	pattern := regexp.MustCompile(`^\d{11}$`)

	for range 100 {
		result, err := brCPF(r, params, nil)
		require.NoError(t, err)

		cpf, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, cpf, "Unformatted CPF should have exactly 11 digits")
	}
}

func TestBrCPFCheckDigits(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("formatted", "false")

	for range 500 {
		result, err := brCPF(r, params, nil)
		require.NoError(t, err)

		cpf, ok := result.(string)
		require.True(t, ok)
		assert.True(t, isValidCPF(cpf), "Generated CPF %s should have valid check digits", cpf)
	}
}

func TestBrCPFNotAllSameDigits(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("formatted", "false")

	allSameDigits := []string{
		"00000000000", "11111111111", "22222222222", "33333333333",
		"44444444444", "55555555555", "66666666666", "77777777777",
		"88888888888", "99999999999",
	}

	for range 500 {
		result, err := brCPF(r, params, nil)
		require.NoError(t, err)

		cpf, ok := result.(string)
		require.True(t, ok)

		for _, invalid := range allSameDigits {
			assert.NotEqual(t, invalid, cpf, "CPF should not have all same digits")
		}
	}
}

func TestBrCNPJFormatted(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	pattern := regexp.MustCompile(`^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$`)

	for range 100 {
		result, err := brCNPJ(r, nil, nil)
		require.NoError(t, err)

		cnpj, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, cnpj, "CNPJ should match format XX.XXX.XXX/XXXX-XX")
	}
}

func TestBrCNPJUnformatted(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("formatted", "false")

	pattern := regexp.MustCompile(`^\d{14}$`)

	for range 100 {
		result, err := brCNPJ(r, params, nil)
		require.NoError(t, err)

		cnpj, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, cnpj, "Unformatted CNPJ should have exactly 14 digits")
	}
}

func TestBrCNPJCheckDigits(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("formatted", "false")

	for range 500 {
		result, err := brCNPJ(r, params, nil)
		require.NoError(t, err)

		cnpj, ok := result.(string)
		require.True(t, ok)
		assert.True(t, isValidCNPJ(cnpj), "Generated CNPJ %s should have valid check digits", cnpj)
	}
}

func TestBrCNPJAlphanumericFormatted(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("formatted", "true")
	params.Add("alphanumeric", "true")

	pattern := regexp.MustCompile(`^[0-9A-Z]{2}\.[0-9A-Z]{3}\.[0-9A-Z]{3}/[0-9A-Z]{4}-\d{2}$`)
	letterPattern := regexp.MustCompile(`[A-Z]`)

	for range 100 {
		result, err := brCNPJ(r, params, nil)
		require.NoError(t, err)

		cnpj, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, cnpj, "Alphanumeric CNPJ should match format XX.XXX.XXX/XXXX-XX")
		assert.Regexp(t, letterPattern, cnpj[:15], "Alphanumeric CNPJ should contain at least one uppercase letter in root/branch")
	}
}

func TestBrCNPJAlphanumericUnformatted(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("formatted", "false")
	params.Add("alphanumeric", "true")

	pattern := regexp.MustCompile(`^[0-9A-Z]{12}\d{2}$`)

	for range 100 {
		result, err := brCNPJ(r, params, nil)
		require.NoError(t, err)

		cnpj, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, cnpj, "Unformatted alphanumeric CNPJ should have exactly 14 characters")
	}
}

func TestBrCNPJAlphanumericCheckDigits(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("formatted", "false")
	params.Add("alphanumeric", "true")

	for range 500 {
		result, err := brCNPJ(r, params, nil)
		require.NoError(t, err)

		cnpj, ok := result.(string)
		require.True(t, ok)
		assert.True(t, isValidAlphanumericCNPJ(cnpj), "Generated alphanumeric CNPJ %s should have valid check digits", cnpj)
	}
}

func TestBrState(t *testing.T) {
	t.Parallel()

	r := newTestRand()

	validStates := make(map[string]bool)
	for _, s := range brStates {
		validStates[s.Name] = true
	}

	for range 100 {
		result, err := brState(r, nil, nil)
		require.NoError(t, err)

		name, ok := result.(string)
		require.True(t, ok)
		assert.True(t, validStates[name], "State %q should be a valid Brazilian state", name)
	}
}

func TestBrStateAbbr(t *testing.T) {
	t.Parallel()

	r := newTestRand()

	validAbbrs := make(map[string]bool)
	for _, s := range brStates {
		validAbbrs[s.Abbr] = true
	}

	pattern := regexp.MustCompile(`^[A-Z]{2}$`)

	for range 100 {
		result, err := brStateAbbr(r, nil, nil)
		require.NoError(t, err)

		abbr, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, abbr, "State abbreviation should be 2 uppercase letters")
		assert.True(t, validAbbrs[abbr], "Abbreviation %q should be a valid Brazilian state abbreviation", abbr)
	}
}

func TestBrCity(t *testing.T) {
	t.Parallel()

	r := newTestRand()

	for range 100 {
		result, err := brCity(r, nil, nil)
		require.NoError(t, err)

		city, ok := result.(string)
		require.True(t, ok)
		assert.NotEmpty(t, city, "City name should not be empty")
		assert.Greater(t, len(city), 2, "City name should have more than 2 characters") //nolint:mnd
	}
}

func TestBrZipCode(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	pattern := regexp.MustCompile(`^\d{5}-\d{3}$`)

	for range 100 {
		result, err := brZipCode(r, nil, nil)
		require.NoError(t, err)

		cep, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, cep, "CEP should match format XXXXX-XXX")
	}
}

func TestBrRG(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	pattern := regexp.MustCompile(`^\d{9}$`)

	for range 100 {
		result, err := brRG(r, nil, nil)
		require.NoError(t, err)

		rg, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, rg, "RG should have exactly 9 digits")
	}
}

func TestBrPhoneNumberMobile(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	pattern := regexp.MustCompile(`^\(\d{2}\) 9\d{4}-\d{4}$`)

	for range 100 {
		result, err := brPhoneNumber(r, nil, nil)
		require.NoError(t, err)

		phone, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, phone, "Mobile phone should match format (XX) 9XXXX-XXXX")
	}
}

func TestBrPhoneNumberLandline(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("mobile", "false")

	pattern := regexp.MustCompile(`^\(\d{2}\) \d{4}-\d{4}$`)

	for range 100 {
		result, err := brPhoneNumber(r, params, nil)
		require.NoError(t, err)

		phone, ok := result.(string)
		require.True(t, ok)
		assert.Regexp(t, pattern, phone, "Landline phone should match format (XX) XXXX-XXXX")
	}
}

func TestBrPhoneNumberValidAreaCode(t *testing.T) {
	t.Parallel()

	r := newTestRand()

	validDDDs := make(map[string]bool)
	for _, ddd := range brAreaCodes {
		validDDDs[ddd] = true
	}

	dddPattern := regexp.MustCompile(`^\((\d{2})\)`)

	for range 100 {
		result, err := brPhoneNumber(r, nil, nil)
		require.NoError(t, err)

		phone, ok := result.(string)
		require.True(t, ok)

		matches := dddPattern.FindStringSubmatch(phone)
		require.Len(t, matches, 2, "Should extract DDD from phone number") //nolint:mnd
		assert.True(t, validDDDs[matches[1]], "DDD %q should be a valid Brazilian area code", matches[1])
	}
}

// isValidCPF validates CPF check digits.
func isValidCPF(cpf string) bool {
	if len(cpf) != 11 { //nolint:mnd
		return false
	}

	digits := make([]int, 11) //nolint:mnd

	for i, ch := range cpf {
		d, err := strconv.Atoi(string(ch))
		if err != nil {
			return false
		}

		digits[i] = d
	}

	// Check all same digits.
	allSame := true
	for _, d := range digits[1:] {
		if d != digits[0] {
			allSame = false

			break
		}
	}

	if allSame {
		return false
	}

	dv1 := cpfCheckDigit(digits[:9], []int{10, 9, 8, 7, 6, 5, 4, 3, 2})
	if dv1 != digits[9] {
		return false
	}

	dv2 := cpfCheckDigit(digits[:10], []int{11, 10, 9, 8, 7, 6, 5, 4, 3, 2})

	return dv2 == digits[10]
}

// isValidCNPJ validates CNPJ check digits.
func isValidCNPJ(cnpj string) bool {
	if len(cnpj) != 14 { //nolint:mnd
		return false
	}

	digits := make([]int, 14) //nolint:mnd

	for i, ch := range cnpj {
		d, err := strconv.Atoi(string(ch))
		if err != nil {
			return false
		}

		digits[i] = d
	}

	dv1 := cnpjCheckDigit(digits[:12], []int{5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2})
	if dv1 != digits[12] {
		return false
	}

	dv2 := cnpjCheckDigit(digits[:13], []int{6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2})

	return dv2 == digits[13]
}

// isValidAlphanumericCNPJ validates alphanumeric CNPJ check digits per IN RFB 2.229/2024.
func isValidAlphanumericCNPJ(cnpj string) bool {
	const (
		totalLen         = 14
		rootAndBranchLen = 12
		asciiZero        = 48
	)

	if len(cnpj) != totalLen {
		return false
	}

	values := make([]int, totalLen)

	for i, ch := range cnpj {
		if i >= rootAndBranchLen {
			if ch < '0' || ch > '9' {
				return false
			}

			values[i] = int(ch - '0')

			continue
		}

		switch {
		case ch >= '0' && ch <= '9':
			values[i] = int(ch - '0')
		case ch >= 'A' && ch <= 'Z':
			values[i] = int(ch) - asciiZero
		default:
			return false
		}
	}

	dv1 := cnpjCheckDigit(values[:rootAndBranchLen], []int{5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2})
	if dv1 != values[rootAndBranchLen] {
		return false
	}

	dv2 := cnpjCheckDigit(values[:13], []int{6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2})

	return dv2 == values[13]
}

func TestBrSearchTermSimple(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("mode", "simple")

	validTerms := make(map[string]bool)
	for _, term := range brSearchSimpleTerms {
		validTerms[term] = true
	}

	for range 100 {
		result, err := brSearchTerm(r, params, nil)
		require.NoError(t, err)

		term, ok := result.(string)
		require.True(t, ok)
		assert.NotEmpty(t, term)
		assert.True(t, validTerms[term], "Search term %q should be one of the simple terms", term)
	}
}

func TestBrSearchTermCompound(t *testing.T) {
	t.Parallel()

	r := newTestRand()
	params := gofakeit.NewMapParams()
	params.Add("mode", "compound")

	for range 100 {
		result, err := brSearchTerm(r, params, nil)
		require.NoError(t, err)

		term, ok := result.(string)
		require.True(t, ok)
		assert.NotEmpty(t, term)
		assert.Contains(t, term, " ", "Compound search term %q should contain space between words", term)
	}
}

func TestBrSearchTermRandomAndDefault(t *testing.T) {
	t.Parallel()

	r := newTestRand()

	// Testing nil params (default "random")
	for range 50 {
		result, err := brSearchTerm(r, nil, nil)
		require.NoError(t, err)

		term, ok := result.(string)
		require.True(t, ok)
		assert.NotEmpty(t, term)
	}

	// Testing explicit "random"
	params := gofakeit.NewMapParams()
	params.Add("mode", "random")

	for range 50 {
		result, err := brSearchTerm(r, params, nil)
		require.NoError(t, err)

		term, ok := result.(string)
		require.True(t, ok)
		assert.NotEmpty(t, term)
	}
}
