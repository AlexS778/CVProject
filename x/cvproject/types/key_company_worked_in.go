package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CompanyWorkedInKeyPrefix is the prefix to retrieve all CompanyWorkedIn
	CompanyWorkedInKeyPrefix = "CompanyWorkedIn/value/"
)

// CompanyWorkedInKey returns the store key to retrieve a CompanyWorkedIn from the index fields
func CompanyWorkedInKey(
	uuid string,
) []byte {
	var key []byte

	uuidBytes := []byte(uuid)
	key = append(key, uuidBytes...)
	key = append(key, []byte("/")...)

	return key
}
