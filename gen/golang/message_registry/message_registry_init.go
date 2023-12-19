// Code generated by protokitgo. DO NOT EDIT.
package message_registry

import (
	// fixed import by protokitgo
	"context"
	"fmt"
	"math"
	"reflect"
	"strings"

	"bitbucket.org/funplus/sandwich/message"
	"bitbucket.org/funplus/sandwich/protocol/netutils"

	"google.golang.org/protobuf/proto"
	protobufEmpty "google.golang.org/protobuf/types/known/emptypb"
	// dynamic import
)

// Reference imports to suppress errors if they are not otherwise used.
var _ netutils.RawPacket
var _ context.Context
var _ = fmt.Errorf
var _ = math.Inf
var _ reflect.Type
var _ strings.Builder
var _ protobufEmpty.Empty
var _ = proto.Error

func MustRegisterPackageMessages(ms message.Registry) {
	ms.Register(new(protobufEmpty.Empty))

	// message with url alias
	ms.Register(new(netutils.Ping), "/common_command.CommonCmd/Ping")

	initActorRequestUriMap(ms)
}
func init() {
	MustRegisterPackageMessages(message.DefaultRegistry())
}

var actorRequestTypeMap = map[interface{}]struct{}{}

var actorRequestUriMap = map[string]struct{}{}

func initActorRequestUriMap(ms message.Registry) {
	for req := range actorRequestTypeMap {
		actorRequestUriMap[ms.URI(req)] = struct{}{}
	}
}

func IsActorRequest(uri string) bool {
	_, ok := actorRequestUriMap[uri]
	return ok
}
