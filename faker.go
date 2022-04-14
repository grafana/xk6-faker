package faker

import (
	"github.com/brianvoe/gofakeit/v6"
	"github.com/dop251/goja"
	"go.k6.io/k6/js/modules"
	"lukechampine.com/frand"
)

type Faker struct {
	vu modules.VU

	*gofakeit.Faker
}

func newFaker(vu modules.VU, seed int64) *Faker {
	src := frand.NewSource()

	if seed != 0 {
		src.Seed(seed)
	}

	return &Faker{vu: vu, Faker: gofakeit.NewCustom(src)}
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

func (f *Faker) ImageJpeg(width int, height int) goja.ArrayBuffer {
	return f.vu.Runtime().NewArrayBuffer(f.Faker.ImageJpeg(width, height))
}

func (f *Faker) ImagePng(width int, height int) goja.ArrayBuffer {
	return f.vu.Runtime().NewArrayBuffer(f.Faker.ImagePng(width, height))
}
