# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: terra/tx/v1beta1/service.proto
# plugin: python-betterproto
import warnings
from dataclasses import dataclass
from typing import Dict, List

import betterproto
from betterproto.grpc.grpclib_server import ServiceBase
import grpclib


@dataclass(eq=False, repr=False)
class ComputeTaxRequest(betterproto.Message):
    """
    ComputeTaxRequest is the request type for the Service.ComputeTax RPC
    method.
    """

    # tx is the transaction to simulate. Deprecated. Send raw tx bytes instead.
    tx: "___cosmos_tx_v1_beta1__.Tx" = betterproto.message_field(1)
    # tx_bytes is the raw transaction.
    tx_bytes: bytes = betterproto.bytes_field(2)

    def __post_init__(self) -> None:
        super().__post_init__()
        if self.tx:
            warnings.warn("ComputeTaxRequest.tx is deprecated", DeprecationWarning)


@dataclass(eq=False, repr=False)
class ComputeTaxResponse(betterproto.Message):
    """
    ComputeTaxResponse is the response type for the Service.ComputeTax RPC
    method.
    """

    # amount is the amount of coins to be paid as a fee
    tax_amount: List["___cosmos_base_v1_beta1__.Coin"] = betterproto.message_field(1)


class ServiceStub(betterproto.ServiceStub):
    async def compute_tax(
        self, *, tx: "___cosmos_tx_v1_beta1__.Tx" = None, tx_bytes: bytes = b""
    ) -> "ComputeTaxResponse":

        request = ComputeTaxRequest()
        if tx is not None:
            request.tx = tx
        request.tx_bytes = tx_bytes

        return await self._unary_unary(
            "/terra.tx.v1beta1.Service/ComputeTax", request, ComputeTaxResponse
        )


class ServiceBase(ServiceBase):
    async def compute_tax(
        self, tx: "___cosmos_tx_v1_beta1__.Tx", tx_bytes: bytes
    ) -> "ComputeTaxResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_compute_tax(self, stream: grpclib.server.Stream) -> None:
        request = await stream.recv_message()

        request_kwargs = {
            "tx": request.tx,
            "tx_bytes": request.tx_bytes,
        }

        response = await self.compute_tax(**request_kwargs)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/terra.tx.v1beta1.Service/ComputeTax": grpclib.const.Handler(
                self.__rpc_compute_tax,
                grpclib.const.Cardinality.UNARY_UNARY,
                ComputeTaxRequest,
                ComputeTaxResponse,
            ),
        }


from ....cosmos.base import v1beta1 as ___cosmos_base_v1_beta1__
from ....cosmos.tx import v1beta1 as ___cosmos_tx_v1_beta1__