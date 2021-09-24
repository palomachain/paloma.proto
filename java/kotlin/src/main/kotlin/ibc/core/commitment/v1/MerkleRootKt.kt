//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/commitment/v1/commitment.proto

package ibc.core.commitment.v1;

@kotlin.jvm.JvmSynthetic
inline fun merkleRoot(block: ibc.core.commitment.v1.MerkleRootKt.Dsl.() -> Unit): ibc.core.commitment.v1.Commitment.MerkleRoot =
  ibc.core.commitment.v1.MerkleRootKt.Dsl._create(ibc.core.commitment.v1.Commitment.MerkleRoot.newBuilder()).apply { block() }._build()
object MerkleRootKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.commitment.v1.Commitment.MerkleRoot.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.commitment.v1.Commitment.MerkleRoot.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.commitment.v1.Commitment.MerkleRoot = _builder.build()

    /**
     * <code>bytes hash = 1;</code>
     */
    var hash: com.google.protobuf.ByteString
      @JvmName("getHash")
      get() = _builder.getHash()
      @JvmName("setHash")
      set(value) {
        _builder.setHash(value)
      }
    /**
     * <code>bytes hash = 1;</code>
     */
    fun clearHash() {
      _builder.clearHash()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.commitment.v1.Commitment.MerkleRoot.copy(block: ibc.core.commitment.v1.MerkleRootKt.Dsl.() -> Unit): ibc.core.commitment.v1.Commitment.MerkleRoot =
  ibc.core.commitment.v1.MerkleRootKt.Dsl._create(this.toBuilder()).apply { block() }._build()