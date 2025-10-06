package cli

import (
	"context"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListCompanyWorkedIn() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-company-worked-in",
		Short: "list all CompanyWorkedIn",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCompanyWorkedInRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CompanyWorkedInAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowCompanyWorkedIn() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-company-worked-in [uuid]",
		Short: "shows a CompanyWorkedIn",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argUuid := args[0]

			params := &types.QueryGetCompanyWorkedInRequest{
				Uuid: argUuid,
			}

			res, err := queryClient.CompanyWorkedIn(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
