package cli

import (
	"strconv"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdGetCvByCosmosAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-cv-by-cosmos-address [cosmos-address]",
		Short: "Query getCvByCosmosAddress",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqCosmosAddress := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetCvByCosmosAddressRequest{

				CosmosAddress: reqCosmosAddress,
			}

			res, err := queryClient.GetCvByCosmosAddress(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
