// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cvproject/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the cvproject module's genesis state.
type GenesisState struct {
	Params              Params            `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	CVList              []CV              `protobuf:"bytes,2,rep,name=cVList,proto3" json:"cVList"`
	CompanyList         []Company         `protobuf:"bytes,4,rep,name=companyList,proto3" json:"companyList"`
	CompanyWorkedInList []CompanyWorkedIn `protobuf:"bytes,5,rep,name=companyWorkedInList,proto3" json:"companyWorkedInList"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1c0df4c9cb08a0, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetCVList() []CV {
	if m != nil {
		return m.CVList
	}
	return nil
}

func (m *GenesisState) GetCompanyList() []Company {
	if m != nil {
		return m.CompanyList
	}
	return nil
}

func (m *GenesisState) GetCompanyWorkedInList() []CompanyWorkedIn {
	if m != nil {
		return m.CompanyWorkedInList
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "alexs778.cvproject.cvproject.GenesisState")
}

func init() { proto.RegisterFile("cvproject/genesis.proto", fileDescriptor_fe1c0df4c9cb08a0) }

var fileDescriptor_fe1c0df4c9cb08a0 = []byte{
	// 304 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4f, 0x2e, 0x2b, 0x28,
	0xca, 0xcf, 0x4a, 0x4d, 0x2e, 0xd1, 0x4f, 0x4f, 0xcd, 0x4b, 0x2d, 0xce, 0x2c, 0xd6, 0x2b, 0x28,
	0xca, 0x2f, 0xc9, 0x17, 0x92, 0x49, 0xcc, 0x49, 0xad, 0x28, 0x36, 0x37, 0xb7, 0xd0, 0x83, 0xab,
	0x40, 0xb0, 0xa4, 0x44, 0xd2, 0xf3, 0xd3, 0xf3, 0xc1, 0x0a, 0xf5, 0x41, 0x2c, 0x88, 0x1e, 0x29,
	0x31, 0x84, 0x61, 0x05, 0x89, 0x45, 0x89, 0xb9, 0x50, 0xb3, 0xa4, 0x84, 0x10, 0xe2, 0xc9, 0x65,
	0x50, 0x31, 0x45, 0x24, 0xb1, 0xfc, 0xdc, 0x82, 0xc4, 0xbc, 0xca, 0xf8, 0xf2, 0xfc, 0xa2, 0xec,
	0xd4, 0x94, 0xf8, 0xcc, 0x3c, 0x88, 0x12, 0xa5, 0x13, 0x4c, 0x5c, 0x3c, 0xee, 0x10, 0x47, 0x05,
	0x97, 0x24, 0x96, 0xa4, 0x0a, 0x39, 0x71, 0xb1, 0x41, 0xcc, 0x95, 0x60, 0x54, 0x60, 0xd4, 0xe0,
	0x36, 0x52, 0xd1, 0xc3, 0xe7, 0x48, 0xbd, 0x00, 0xb0, 0x5a, 0x27, 0x96, 0x13, 0xf7, 0xe4, 0x19,
	0x82, 0xa0, 0x3a, 0x85, 0xec, 0xb8, 0xd8, 0x92, 0xc3, 0x7c, 0x32, 0x8b, 0x4b, 0x24, 0x98, 0x14,
	0x98, 0x35, 0xb8, 0x8d, 0x14, 0xf0, 0x9b, 0xe1, 0x1c, 0x06, 0xd3, 0x0f, 0xd1, 0x25, 0xe4, 0xcb,
	0xc5, 0x0d, 0x75, 0x2f, 0xd8, 0x10, 0x16, 0xb0, 0x21, 0xaa, 0x04, 0x0c, 0x81, 0x68, 0x80, 0x9a,
	0x84, 0xac, 0x5f, 0x28, 0x95, 0x4b, 0x18, 0xca, 0x0d, 0x07, 0xfb, 0xde, 0x33, 0x0f, 0x6c, 0x2c,
	0x2b, 0xd8, 0x58, 0x5d, 0xa2, 0x8c, 0x85, 0x69, 0x84, 0x1a, 0x8f, 0xcd, 0x3c, 0x27, 0xcf, 0x13,
	0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39, 0x86,
	0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88, 0xd2, 0x4f, 0xcf, 0x2c, 0xc9, 0x28, 0x4d,
	0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x77, 0xcc, 0x49, 0xad, 0x08, 0x36, 0x37, 0xb7, 0xd0, 0x77, 0x0e,
	0x0b, 0x80, 0xc6, 0x4d, 0x85, 0x3e, 0x22, 0x9e, 0x4a, 0x2a, 0x0b, 0x52, 0x8b, 0x93, 0xd8, 0xc0,
	0x91, 0x63, 0x0c, 0x08, 0x00, 0x00, 0xff, 0xff, 0x16, 0xfc, 0xd4, 0x85, 0x3a, 0x02, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.CompanyWorkedInList) > 0 {
		for iNdEx := len(m.CompanyWorkedInList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.CompanyWorkedInList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.CompanyList) > 0 {
		for iNdEx := len(m.CompanyList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.CompanyList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.CVList) > 0 {
		for iNdEx := len(m.CVList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.CVList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if len(m.CVList) > 0 {
		for _, e := range m.CVList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.CompanyList) > 0 {
		for _, e := range m.CompanyList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.CompanyWorkedInList) > 0 {
		for _, e := range m.CompanyWorkedInList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CVList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CVList = append(m.CVList, CV{})
			if err := m.CVList[len(m.CVList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CompanyList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CompanyList = append(m.CompanyList, Company{})
			if err := m.CompanyList[len(m.CompanyList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CompanyWorkedInList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CompanyWorkedInList = append(m.CompanyWorkedInList, CompanyWorkedIn{})
			if err := m.CompanyWorkedInList[len(m.CompanyWorkedInList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
