package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CVKeyPrefix is the prefix to retrieve all CV
	CVKeyPrefix = "CV/value/"
)

// CVKey returns the store key to retrieve a CV from the index fields
func CVKey(
	index uint64,
) []byte {
	var key []byte

	indexBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(indexBytes, index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
