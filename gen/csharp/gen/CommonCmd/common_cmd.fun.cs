// Code generated by protokitgo. DO NOT EDIT.
// source: common_command/common_cmd.proto

#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using System;

namespace gen.CommonCmd {
	/// <summary>
	/// 方法定义,支持两种使用方式
	/// - gateway模式，请求路径为：QueryPath，推荐使用该模式
	/// - 传统模式，请求路径为：FullPathHTTP
	/// 两种模式下，请求对象的URI都要使用 URIRequest 而非 XXX.Descriptor.FullName
	/// </summary> 
	public static partial class CommonCmd_Ping {
		/// <summary>
		/// 当前 Service 的请求根路径
		/// </summary> 
		public static readonly string QueryPath = "/";

		/// <summary>
		/// HTTP 请求全路径，格式为 QueryPath /XXX, 其中XXX部分可以是自定义字符串或URIRequest
		/// </summary>
		public static readonly string FullPathHTTP = "/common_command.CommonCmd/Ping";


		[Obsolete("使用 NewRequest 构造对象", false)]
		public static readonly netutils.Ping  Request  = new netutils.Ping();

		[Obsolete("使用 NewResponse 构造对象", false)]
		public static readonly netutils.PingAck Response = new netutils.PingAck();

		/// <summary>
		/// 是否为 Actor 系统方法
		/// </summary> 
		public static readonly bool IsActor = false;

		/// <summary>
		/// 当为 Actor 系统方法时，是否为 Tell 类型
		/// </summary> 
		public static readonly bool IsTell  = false;

		/// <summary>
		/// 当前方法请求对象的URI
		/// 注意在发起请求的时候，请求对象的URI要使用 URIRequest 而非 XXX.Descriptor.FullName
		/// </summary>
		public static readonly string URIRequest = "/common_command.CommonCmd/Ping";

		/// <summary>
		/// 构造当前方法的请求对象
		/// </summary> 
		/// <returns> 当前方法的请求对象，类型: netutils.Ping </returns>
		public static netutils.Ping NewRequest() { return new netutils.Ping(); }

		/// <summary>
		/// 当前方法返回对象的URI，即: XXX.Descriptor.FullName
		/// </summary> 
		public static readonly string URIResponse = netutils.PingAck.Descriptor.FullName;

		/// <summary>
		/// 构造当前方法的返回对象
		/// </summary> 
		/// <returns> 当前方法的返回对象，类型: netutils.PingAck </returns>
		public static netutils.PingAck NewResponse() { return new netutils.PingAck(); }

		/// <summary>
		/// 当前请求的 HTTP 路径，用户自定义的路径 或 自动生成的路径
		/// 由于历史原因，自动生成的路径并不包含QueryPath,但用户自定义的路径可能包含了QueryPath，存在歧义
		/// </summary>
		[Obsolete("不要继续使用 PathHTTP，优先使用 FullPathHTTP", false)]
		public static readonly string PathHTTP = "/common_command.CommonCmd/Ping";
	}
}

#endregion Designer generated code
