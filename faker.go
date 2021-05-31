package faker

import (
	"github.com/brianvoe/gofakeit/v6"
	"lukechampine.com/frand"
)

type Faker struct {
	*gofakeit.Faker
}

func newFaker(seed int64) *Faker {
	src := frand.NewSource()

	if seed != 0 {
		src.Seed(seed)
	}

	return &Faker{Faker: gofakeit.NewCustom(src)}
}

func (f *Faker) Ipv4Address() string {
	return f.IPv4Address()
}

func (f *Faker) Ipv6Address() string {
	return f.IPv6Address()
}

func (f *Faker) HttpStatusCodeSimple() int {
	return f.HTTPStatusCodeSimple()
}

func (f *Faker) HttpStatusCode() int {
	return f.HTTPStatusCode()
}

func (f *Faker) HttpMethod() string {
	return f.HTTPMethod()
}

func (f *Faker) Bs() string {
	return f.BS()
}

func (f *Faker) Uuid() string {
	return f.UUID()
}

func (f *Faker) RgbColor() []int {
	return f.RGBColor()
}

func (f *Faker) Csv(opts *gofakeit.CSVOptions) ([]byte, error) {
	return f.CSV(opts)
}

func (f *Faker) Json(opts *gofakeit.JSONOptions) ([]byte, error) {
	return f.JSON(opts)
}

func (f *Faker) Xml(opts *gofakeit.XMLOptions) ([]byte, error) {
	return f.XML(opts)
}
