package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CompanyKeyPrefix is the prefix to retrieve all Company
	CompanyKeyPrefix = "Company/value/"
)

// CompanyKey returns the store key to retrieve a Company from the index fields
func CompanyKey(
	uUID string,
) []byte {
	var key []byte

	uUIDBytes := []byte(uUID)
	key = append(key, uUIDBytes...)
	key = append(key, []byte("/")...)

	return key
}
