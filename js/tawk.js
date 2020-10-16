(function (global) {
	global.$_Tawk_AccountKey = '5f897a03a2eb1124c0bd81fa';
	global.$_Tawk_WidgetId = '1ekogtjnp';
	global.$_Tawk_Unstable = false;
	global.$_Tawk = global.$_Tawk || {};
	(function (global) {
		global.$_Tawk.widgetSettings = {
			"t": "inline",
			"h": 0,
			"w": 0,
			"minh": 60,
			"minw": 60,
			"pos": "br",
			"woc": "max",
			"dsw": false,
			"lc": "en",
			"hwol": false,
			"hwof": false,
			"hab": false,
			"dws": false,
			"hwt": true,
			"thm": {
				"hbg": "#03a84e",
				"htx": "#ffffff",
				"topc": 5,
				"btmc": 0,
				"aBblBg": "#039746",
				"aBblTx": "#ffffff",
				"vBblBg": "#e5e5e5",
				"vBblTx": "#333333"
			},
			"bbl": {
				"name": "168",
				"type": "gallery",
				"width": 124,
				"height": 79,
				"zIndex": 1,
				"rightOffset": 0,
				"bottomOffset": 30,
				"topOffset": 0,
				"leftOffset": 0,
				"rotate": 0
			},
			"mw": "round",
			"dw": "min",
			"wv": 0,
			"ws": null,
			"offlineForm": {
				"shortMessage": "Send message",
				"text": "Please fill out the form below and we will get back to you as soon as possible.",
				"fields": [{
					"label": "Name",
					"isRequired": true,
					"type": "name"
				}, {
					"label": "Email",
					"isRequired": true,
					"type": "email"
				}, {
					"label": "Message",
					"isRequired": true,
					"type": "message"
				}]
			},
			"prechatForm": null,
			"onlineGreeting": {
				"actionMessage": "Write a reply..",
				"shortMessage": "Online",
				"longMessage": "We are live and ready to chat with you now. Say something to start a live chat."
			},
			"awayGreeting": {
				"shortMessage": "Away",
				"longMessage": ""
			},
			"cf": null,
			"emoji": true,
			"uploads": true,
			"rating": true,
			"mprvw": true,
			"atyping": true,
			"vtyping": true,
			"tbi": true
		};
	})(global);
	(function (b) {
		var a = {
			pluralFormFunction: function (a) {
				return 1 === a ? "one" : "other"
			},
			form: {}
		};
		a.form.SaveButton = {
			message: "Save"
		};
		a.form.SubmitButton = {
			message: "Submit"
		};
		a.form.StartChatButton = {
			message: "Start Chat"
		};
		a.form.CancelButton = {
			message: "Cancel"
		};
		a.form.CloseButton = {
			message: "Close"
		};
		a.form.SendButton = {
			message: "Send"
		};
		a.form.EmailPlaceholder = {
			message: "Email Address"
		};
		a.form.QuestionPlaceholder = {
			message: "your query.."
		};
		a.form.DepartmentsPlaceholder = {
			message: "select department.."
		};
		a.form.MessagePlaceholder = {
			message: "your message.."
		};
		a.form.NameErrorMessage = {
			message: "Name must be provided."
		};
		a.form.EmailErrorMessage = {
			message: "Invalid email address."
		};
		a.form.DepartmentsErrorMessage = {
			message: "Department is required."
		};
		a.form.QuestionErrorMessage = {
			message: "Question is required and must not be longer then 500 characters."
		};
		a.form.MessageErrorMessage = {
			message: "Message is required and must not be longer then 500 characters."
		};
		a.form.NameFormMessage = {
			message: "Please change your name so we can recognize you the next time."
		};
		a.form.EmailTranscriptFormMessage = {
			message: "Please fill out the form below to have this conversation sent to your email address."
		};
		a.form.PreChatFormMessage = {
			message: "Please fill out the form below to start chatting with the next available agent."
		};
		a.form.OfflineFormMessage = {
			message: "Please fill out the form below and we will get back to you as soon as possible."
		};
		a.form.PreChatFormMessageProfile = {
			message: "Please fill out the form below to start chatting with me."
		};
		a.form.OfflineMessageSent = {
			message: "Your message was sent successfully!"
		};
		a.form.OfflineMessageNotSent = {
			message: "Your message was not delivered, please retry"
		};
		a.form.EndChatTitle = {
			message: "Are you sure you want to end this chat?"
		};
		a.form.RequiredErrorMessage = {
			message: "This field is required"
		};
		a.form.PhoneErrorMessage = {
			message: "Invalid phone number"
		};
		a.form.saved = {
			message: "Saved"
		};
		a.form.errorSaving = {
			message: "Unable to save. Please try again"
		};
		a.form.visitButton = {
			message: "Visit tawk.to"
		};
		a.form.SubmittingProcess = {
			message: "Submitting"
		};
		a.form.EndingProcess = {
			message: "Ending"
		};
		a.form.SendingProcess = {
			message: "Sending"
		};
		a.form.SavingProcess = {
			message: "Saving"
		};
		a.form.EmailTranscriptTo = {
			message: "Email transcript to"
		};
		a.form.name = {
			message: "Name"
		};
		a.form.email = {
			message: "Email"
		};
		a.form.department = {
			message: "Department"
		};
		a.form.message = {
			message: "Message"
		};
		a.form.any = {
			message: "Any"
		};
		a.form.phone = {
			message: "Phone"
		};
		a.form.question = {
			message: "Question"
		};
		a.form.saving = {
			message: "Saving.."
		};
		a.form.SubmittedFrom = {
			message: "Submitted From"
		};
		a.form.SendMessage = {
			message: "Send message"
		};
		a.form.sendAgain = {
			message: "Send Again"
		};
		a.form.ChangeUsername = {
			message: "Change username"
		};
		a.form.HelloAndWelcome = {
			message: "Hello and Welcome"
		};
		a.form.EndChatMessage = {
			message: "Thank you for chatting with us. Feel free to start new chat session or enter your email and send a transcript of this conversation to your inbox."
		};
		a.form.TranscriptMessage = {
			message: "Feel free to enter your email and send a transcript of this conversation to your inbox."
		};
		a.form.chatEnded = {
			message: "Your chat has ended"
		};
		a.form.skip = {
			message: "Skip"
		};
		a.rollover = {};
		a.rollover.popOut = {
			message: "Pop out"
		};
		a.rollover.minimize = {
			message: "Minimize"
		};
		a.rollover.resize = {
			message: "Resize"
		};
		a.rollover.resendMessage = {
			message: "Resend message"
		};
		a.rollover.emailTranscriptOption = {
			message: "Email Transcript"
		};
		a.rollover.positiveRating = {
			message: "Rate this conversation with +1"
		};
		a.rollover.negativeRating = {
			message: "Rate this conversation with -1"
		};
		a.rollover.maximize = {
			message: "Maximize"
		};
		a.rollover.end = {
			message: "End Chat"
		};
		a.rollover.uploadFile = {
			message: "Upload File"
		};
		a.rollover.videoCall = {
			message: "Video Call"
		};
		a.rollover.voiceCall = {
			message: "Voice Call"
		};
		a.rollover.screenShare = {
			message: "Screen Share"
		};
		a.rollover.chatMenu = {
			message: "Menu"
		};
		a.rollover.knowledgeBase = {
			message: "knowledge Base"
		};
		a.transcript = {};
		a.transcript.transcriptSubject = {
			message: "Chat email transcript on #host started on #startedOn",
			vars: ["host", "startedOn"]
		};
		a.transcript.transcriptStartedOn = {
			message: "#dateString, at #time",
			vars: ["dateString", "time"]
		};
		a.transcript.me = {
			message: "Me"
		};
		a.transcript.CONVERSATION_STARTED_ON = {
			message: "Conversation started on"
		};
		a.overlay = {};
		a.overlay.inactive = {
			message: "Click here to reinitiate the chat"
		};
		a.overlay.maintenance = {
			message: "Chat is in maintenance"
		};
		a.overlay.cookiesOff = {
			message: "You can't use this chat because your browser's cookie functionality is turned off. Please turn it on and refresh your browser."
		};
		a.overlay.tawkContent = {
			message: "This widget is powered by tawk.to - a free messaging application that lets you monitor and engage with the visitors on your website."
		};
		a.chat = {};
		a.chat.visitor_name = {
			message: "Visitor name"
		};
		a.chat.like = {
			message: "You liked this conversation"
		};
		a.chat.dislike = {
			message: "You disliked this conversation"
		};
		a.chat.remove_rate = {
			message: "You removed your rating for this conversation"
		};
		a.chat.sayButton = {
			message: "Say"
		};
		a.chat.hideButton = {
			message: "Hide Chat"
		};
		a.chat.send_mail = {
			message: "Send Mail"
		};
		a.chat.AGENT_JOIN_CONVERSATION = {
			message: "#n has joined the conversation",
			vars: ["n"]
		};
		a.chat.AGENT_LEFT_CONVERSATION = {
			message: "#n has left the conversation",
			vars: ["n"]
		};
		a.chat.defaultName = {
			message: "You (change name)"
		};
		a.chat.messageQueuedTitile = {
			message: "message queued"
		};
		a.chat.live_chat = {
			message: "Live Chat"
		};
		a.chat.notificationTitle = {
			message: "notification"
		};
		a.chat.departmentIsOffline = {
			message: "Department #strongStart #departmentName #strongEnd is currently offline. You might be served by another department.",
			vars: ["departmentName", "strongStart", "strongEnd"]
		};
		a.chat.departmentIsAway = {
			message: "Department #strongStart #departmentName #strongEnd is currently away.",
			vars: ["departmentName", "strongStart", "strongEnd"]
		};
		a.chat.mobileName = {
			message: "You"
		};
		a.chat.chatEnded = {
			message: "Your chat has ended"
		};
		a.chat.newChat = {
			message: "Start New Chat"
		};
		a.chat.newMessages = {
			message: "New messages"
		};
		a.chat.say_something = {
			message: "Write a reply.."
		};
		a.chat.downloadFile = {
			message: "Download File"
		};
		a.chat.download = {
			message: "Download"
		};
		a.chat.limit50 = {
			message: "The maximum file size is 50MB, please upload a smaller file."
		};
		a.chat.limit2 = {
			message: "The maximum file size is 2MB for mobile browsers, please upload a smaller file."
		};
		a.chat.generalUploadError = {
			message: '"#fileName", please try again.',
			vars: ["fileName"]
		};
		a.chat.generalUploadErrorLabel = {
			message: "Unable to upload file"
		};
		a.chat.retry = {
			message: "Retry."
		};
		a.chat.tryAgain = {
			message: "Try again."
		};
		a.chat.dragDropText = {
			message: "Drop files here to upload"
		};
		a.chat.pasted_image_title = {
			message: "Pasted image at #dateTime",
			vars: ["dateTime"]
		};
		a.chat.chat_qm = {
			message: "Chat?"
		};
		a.chat.we_are_live = {
			message: "We are live and ready to chat with you now. Say something to start a live chat."
		};
		a.chat.profile_prechat_text = {
			message: "Please fill out the form below to start chatting with me."
		};
		a.chat.incoming_call_message = {
			message: "Incoming call from #name",
			vars: ["name"]
		};
		a.chat.accept_call = {
			message: "Accept"
		};
		a.chat.decline_call = {
			message: "Decline"
		};
		a.chat.video_call_error = {
			message: "Video call is not available."
		};
		a.chat.voice_call_error = {
			message: "Voice call is not available."
		};
		a.chat.screen_share_error = {
			message: "Screen share is not available."
		};
		a.chat.message_too_long = {
			message: "Message cannot exceed 5000 characters"
		};
		a.chat.message_not_delivered = {
			message: "Message not delivered, click here to resend."
		};
		a.chat.visitor_ringing = {
			message: "Calling..."
		};
		a.chat.agent_ringing = {
			message: "Incoming Call"
		};
		a.chat.ongoing_call = {
			message: "Ongoing Call"
		};
		a.chat.completed_call = {
			message: "Call ended"
		};
		a.chat.missed_agent = {
			message: "Your call was missed"
		};
		a.chat.missed_visitor = {
			message: "You missed a call"
		};
		a.chat.missed_visitor_messagePreview = {
			message: "You missed a call from"
		};
		a.chat.rejected_call = {
			message: "You rejected this call"
		};
		a.chat.call_end_details = {
			message: "Started at #startedOn and lasted #duration",
			vars: ["startedOn", "duration"]
		};
		a.chat.call_started_on = {
			message: "Started at #startedOn",
			vars: ["startedOn"]
		};
		a.chat.error_title = {
			message: "Error"
		};
		a.chat.call_error_load = {
			message: "Unable to load call details."
		};
		a.chat.insert_emoji = {
			message: "Insert emoji"
		};
		a.chat.uploading = {
			message: "Uploading..."
		};
		a.chat.failed = {
			message: "Failed"
		};
		a.chat.resend = {
			message: "Resend"
		};
		a.chat.justNow = {
			message: "just now"
		};
		a.chat.Warning = {
			message: "Warning"
		};
		a.chat.chat_text = {
			message: "Chat"
		};
		a.chat.message_text = {
			message: "Message"
		};
		a.chat.mail_text = {
			message: "Mail"
		};
		a.chat.emoji_error_load = {
			message: "Unable to load emojis"
		};
		a.status = {};
		a.status.online = {
			message: "Online"
		};
		a.status.away = {
			message: "Away"
		};
		a.status.offline = {
			message: "Offline"
		};
		a.months = {};
		a.months["0"] = {
			message: "January"
		};
		a.months["1"] = {
			message: "February"
		};
		a.months["2"] = {
			message: "March"
		};
		a.months["3"] = {
			message: "April"
		};
		a.months["4"] = {
			message: "May"
		};
		a.months["5"] = {
			message: "June"
		};
		a.months["6"] = {
			message: "July"
		};
		a.months["7"] = {
			message: "August"
		};
		a.months["8"] = {
			message: "September"
		};
		a.months["9"] = {
			message: "October"
		};
		a.months["10"] = {
			message: "November"
		};
		a.months["11"] = {
			message: "December"
		};
		a.days = {};
		a.days["0"] = {
			message: "Sunday"
		};
		a.days["1"] = {
			message: "Monday"
		};
		a.days["2"] = {
			message: "Tuesday"
		};
		a.days["3"] = {
			message: "Wednesday"
		};
		a.days["4"] = {
			message: "Thursday"
		};
		a.days["5"] = {
			message: "Friday"
		};
		a.days["6"] = {
			message: "Saturday"
		};
		a.menu = {};
		a.menu.change_name = {
			message: "Change Name"
		};
		a.menu.sound_on = {
			message: "Sound On"
		};
		a.menu.sound_off = {
			message: "Sound Off"
		};
		a.menu.email_transcript = {
			message: "Email transcript"
		};
		a.menu.popout_widget = {
			message: "Pop out widget"
		};
		a.menu.end_chat_session = {
			message: "End this chat session"
		};
		a.notifications = {};
		a.notifications.maximum_file_upload_warning = {
			message: "Sorry, file transfer is limited to #limitFileNumber files at a time. Please try the following file(s) again :",
			vars: ["limitFileNumber"]
		};
		a.notifications.maximum_size_upload_warning = {
			message: "Sorry, file transfer is limited to #limitFileSize per file. Please compress the following file(s) and try again.",
			vars: ["limitFileSize"]
		};
		a.notifications.retry = {
			message: "Retry"
		};
		a.chat = a.chat || {};
		a.chat.messageQueuedText = {
			vars: ["strongStart", "strongEnd"],
			pluralVars: ["t"],
			message: {
				one: "Estimated wait time is #strongStart #t minute #strongEnd",
				other: "Estimated wait time is #strongStart #t minutes #strongEnd"
			}
		};
		a.chat.newMessage = {
			vars: [],
			pluralVars: ["num"],
			message: {
				one: "#num new message",
				other: "#num new messages"
			}
		};
		a.chat.seconds = {
			vars: [],
			pluralVars: ["num"],
			message: {
				one: "#num second",
				other: "#num seconds"
			}
		};
		a.chat.minutes = {
			vars: [],
			pluralVars: ["num"],
			message: {
				one: "#num minute",
				other: "#num minutes"
			}
		};
		a.chat.hours = {
			vars: [],
			pluralVars: ["num"],
			message: {
				one: "#num hour",
				other: "#num hours"
			}
		};
		b.$_Tawk.language = a;
		b.$_Tawk.languageUpdater && b.$_Tawk.languageUpdater()
	})("undefined" === typeof global ? window : global);

	(function () {
		! function (u) {
			var g;
			"undefined" != typeof window ? g = window : "undefined" != typeof global ? g = global : "undefined" != typeof self && (g = self);
			g.$__TawkEngine = u()
		}(function () {
			return function g(p, q, h) {
				function m(d, x) {
					if (!q[d]) {
						if (!p[d]) {
							var b = "function" == typeof require && require;
							if (!x && b) return b(d, !0);
							if (k) return k(d, !0);
							throw Error("Cannot find module '" + d + "'");
						}
						b = q[d] = {
							exports: {}
						};
						p[d][0].call(b.exports, function (b) {
							var k = p[d][1][b];
							return m(k ? k : b)
						}, b, b.exports, g, p, q, h)
					}
					return q[d].exports
				}
				for (var k = "function" ==
						typeof require && require, d = 0; d < h.length; d++) m(h[d]);
				return m
			}({
				debug: [function (g, p, q) {
					p.exports = g("n9i2g6")
				}, {}],
				n9i2g6: [function (g, p, q) {
					p.exports = function () {
						return function () {}
					}
				}, {}],
				3: [function (g, p, q) {
					function h() {}
					p.exports = function (m, k, d) {
						function g(b, h) {
							if (0 >= g.count) throw Error("after called too many times");
							--g.count;
							b ? (p = !0, k(b), k = d) : 0 !== g.count || p || k(null, h)
						}
						var p = !1;
						d = d || h;
						g.count = m;
						return 0 === m ? k() : g
					}
				}, {}],
				4: [function (g, p, q) {
					p.exports = function (h, m, k) {
						var d = h.byteLength;
						m = m || 0;
						k = k || d;
						if (h.slice) return h.slice(m,
							k);
						0 > m && (m += d);
						0 > k && (k += d);
						k > d && (k = d);
						if (m >= d || m >= k || 0 === d) return new ArrayBuffer(0);
						h = new Uint8Array(h);
						for (var d = new Uint8Array(k - m), g = 0; m < k; m++, g++) d[g] = h[m];
						return d.buffer
					}
				}, {}],
				5: [function (g, p, q) {
					(function (h) {
						q.encode = function (m) {
							m = new Uint8Array(m);
							var k, d = m.length,
								g = "";
							for (k = 0; k < d; k += 3) g += h[m[k] >> 2], g += h[(m[k] & 3) << 4 | m[k + 1] >> 4], g += h[(m[k + 1] & 15) << 2 | m[k + 2] >> 6], g += h[m[k + 2] & 63];
							2 === d % 3 ? g = g.substring(0, g.length - 1) + "=" : 1 === d % 3 && (g = g.substring(0, g.length - 2) + "==");
							return g
						};
						q.decode = function (m) {
							var k =
								0.75 * m.length,
								d = m.length,
								g = 0,
								p, b, t, q;
							"=" === m[m.length - 1] && (k--, "=" === m[m.length - 2] && k--);
							for (var w = new ArrayBuffer(k), O = new Uint8Array(w), k = 0; k < d; k += 4) p = h.indexOf(m[k]), b = h.indexOf(m[k + 1]), t = h.indexOf(m[k + 2]), q = h.indexOf(m[k + 3]), O[g++] = p << 2 | b >> 4, O[g++] = (b & 15) << 4 | t >> 2, O[g++] = (t & 3) << 6 | q & 63;
							return w
						}
					})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
				}, {}],
				6: [function (g, p, q) {
					(function (h) {
						function m(b) {
							for (var d = 0; d < b.length; d++) {
								var k = b[d];
								if (k.buffer instanceof ArrayBuffer) {
									var h =
										k.buffer;
									if (k.byteLength !== h.byteLength) {
										var m = new Uint8Array(k.byteLength);
										m.set(new Uint8Array(h, k.byteOffset, k.byteLength));
										h = m.buffer
									}
									b[d] = h
								}
							}
						}

						function k(b, d) {
							d = d || {};
							var k = new g;
							m(b);
							for (var h = 0; h < b.length; h++) k.append(b[h]);
							return d.type ? k.getBlob(d.type) : k.getBlob()
						}

						function d(b, d) {
							m(b);
							return new Blob(b, d || {})
						}
						var g = h.BlobBuilder || h.WebKitBlobBuilder || h.MSBlobBuilder || h.MozBlobBuilder,
							q;
						try {
							q = 2 === (new Blob(["hi"])).size
						} catch (b) {
							q = !1
						}
						var t;
						if (t = q) try {
							t = 2 === (new Blob([new Uint8Array([1, 2])])).size
						} catch (H) {
							t = !1
						}
						var w = g && g.prototype.append && g.prototype.getBlob;
						h = q ? t ? h.Blob : d : w ? k : void 0;
						p.exports = h
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {}],
				7: [function (g, p, q) {}, {}],
				8: [function (g, p, q) {
					function h(m) {
						if (m) {
							for (var k in h.prototype) m[k] = h.prototype[k];
							return m
						}
					}
					p.exports = h;
					h.prototype.on = h.prototype.addEventListener = function (h, k) {
						this._callbacks = this._callbacks || {};
						(this._callbacks[h] = this._callbacks[h] || []).push(k);
						return this
					};
					h.prototype.once = function (h, k) {
						function d() {
							g.off(h,
								d);
							k.apply(this, arguments)
						}
						var g = this;
						this._callbacks = this._callbacks || {};
						d.fn = k;
						this.on(h, d);
						return this
					};
					h.prototype.off = h.prototype.removeListener = h.prototype.removeAllListeners = h.prototype.removeEventListener = function (h, k) {
						this._callbacks = this._callbacks || {};
						if (0 == arguments.length) return this._callbacks = {}, this;
						var d = this._callbacks[h];
						if (!d) return this;
						if (1 == arguments.length) return delete this._callbacks[h], this;
						for (var g, p = 0; p < d.length; p++)
							if (g = d[p], g === k || g.fn === k) {
								d.splice(p, 1);
								break
							}
						return this
					};
					h.prototype.emit = function (h) {
						this._callbacks = this._callbacks || {};
						var k = [].slice.call(arguments, 1),
							d = this._callbacks[h];
						if (d)
							for (var d = d.slice(0), g = 0, p = d.length; g < p; ++g) d[g].apply(this, k);
						return this
					};
					h.prototype.listeners = function (h) {
						this._callbacks = this._callbacks || {};
						return this._callbacks[h] || []
					};
					h.prototype.hasListeners = function (h) {
						return !!this.listeners(h).length
					}
				}, {}],
				9: [function (g, p, q) {
					p.exports = function (h, g) {
						var k = function () {};
						k.prototype = g.prototype;
						h.prototype = new k;
						h.prototype.constructor =
							h
					}
				}, {}],
				10: [function (g, p, q) {
					p.exports = g("./lib/")
				}, {
					"./lib/": 11
				}],
				11: [function (g, p, q) {
					p.exports = g("./socket");
					p.exports.parser = g("engine.io-parser")
				}, {
					"./socket": 12,
					"engine.io-parser": 20
				}],
				12: [function (g, p, q) {
					(function (h) {
						function m(b, d) {
							if (!(this instanceof m)) return new m(b, d);
							d = d || {};
							b && "object" == typeof b && (d = b, b = null);
							b ? (b = t(b), d.hostname = b.host, d.secure = "https" == b.protocol || "wss" == b.protocol, d.port = b.port, b.query && (d.query = b.query)) : d.host && (d.hostname = t(d.host).host);
							this.secure = null != d.secure ?
								d.secure : h.location && "https:" == location.protocol;
							d.hostname && !d.port && (d.port = this.secure ? "443" : "80");
							this.agent = d.agent || !1;
							this.hostname = d.hostname || (h.location ? location.hostname : "localhost");
							this.port = d.port || (h.location && location.port ? location.port : this.secure ? 443 : 80);
							this.query = d.query || {};
							"string" == typeof this.query && (this.query = w.decode(this.query));
							this.upgrade = !1 !== d.upgrade;
							this.path = (d.path || "/engine.io").replace(/\/$/, "") + "/";
							this.forceJSONP = !!d.forceJSONP;
							this.jsonp = !1 !== d.jsonp;
							this.forceBase64 = !!d.forceBase64;
							this.enablesXDR = !!d.enablesXDR;
							this.timestampParam = d.timestampParam || "t";
							this.timestampRequests = d.timestampRequests;
							this.transports = d.transports || ["polling", "websocket"];
							this.readyState = "";
							this.writeBuffer = [];
							this.policyPort = d.policyPort || 843;
							this.rememberUpgrade = d.rememberUpgrade || !1;
							this.binaryType = null;
							this.onlyBinaryUpgrades = d.onlyBinaryUpgrades;
							this.perMessageDeflate = !1 !== d.perMessageDeflate ? d.perMessageDeflate || {} : !1;
							!0 === this.perMessageDeflate && (this.perMessageDeflate = {});
							this.perMessageDeflate &&
								null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024);
							this.pfx = d.pfx || null;
							this.key = d.key || null;
							this.passphrase = d.passphrase || null;
							this.cert = d.cert || null;
							this.ca = d.ca || null;
							this.ciphers = d.ciphers || null;
							this.rejectUnauthorized = void 0 === d.rejectUnauthorized ? !0 : d.rejectUnauthorized;
							var k = "object" == typeof h && h;
							k.global === k && (d.extraHeaders && 0 < Object.keys(d.extraHeaders).length) && (this.extraHeaders = d.extraHeaders);
							this.open()
						}
						var k = g("./transports"),
							d = g("component-emitter"),
							q =
							g("debug")("engine.io-client:socket"),
							x = g("indexof"),
							b = g("engine.io-parser"),
							t = g("parseuri"),
							H = g("parsejson"),
							w = g("parseqs");
						p.exports = m;
						m.priorWebsocketSuccess = !1;
						d(m.prototype);
						m.protocol = b.protocol;
						m.Socket = m;
						m.Transport = g("./transport");
						m.transports = g("./transports");
						m.parser = g("engine.io-parser");
						m.prototype.createTransport = function (d) {
							q('creating transport "%s"', d);
							var h = this.query,
								g = {},
								m;
							for (m in h) h.hasOwnProperty(m) && (g[m] = h[m]);
							g.EIO = b.protocol;
							g.transport = d;
							this.id && (g.sid = this.id);
							return new k[d]({
								agent: this.agent,
								hostname: this.hostname,
								port: this.port,
								secure: this.secure,
								path: this.path,
								query: g,
								forceJSONP: this.forceJSONP,
								jsonp: this.jsonp,
								forceBase64: this.forceBase64,
								enablesXDR: this.enablesXDR,
								timestampRequests: this.timestampRequests,
								timestampParam: this.timestampParam,
								policyPort: this.policyPort,
								socket: this,
								pfx: this.pfx,
								key: this.key,
								passphrase: this.passphrase,
								cert: this.cert,
								ca: this.ca,
								ciphers: this.ciphers,
								rejectUnauthorized: this.rejectUnauthorized,
								perMessageDeflate: this.perMessageDeflate,
								extraHeaders: this.extraHeaders
							})
						};
						m.prototype.open = function () {
							var b;
							if (this.rememberUpgrade && m.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) b = "websocket";
							else {
								if (0 === this.transports.length) {
									var d = this;
									setTimeout(function () {
										d.emit("error", "No transports available")
									}, 0);
									return
								}
								b = this.transports[0]
							}
							this.readyState = "opening";
							try {
								b = this.createTransport(b)
							} catch (h) {
								this.transports.shift();
								this.open();
								return
							}
							b.open();
							this.setTransport(b)
						};
						m.prototype.setTransport = function (b) {
							q("setting transport %s", b.name);
							var d = this;
							this.transport && (q("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners());
							this.transport = b;
							b.on("drain", function () {
								d.onDrain()
							}).on("packet", function (b) {
								d.onPacket(b)
							}).on("error", function (b) {
								d.onError(b)
							}).on("close", function () {
								d.onClose("transport close")
							})
						};
						m.prototype.probe = function (b) {
							function d() {
								if (t.onlyBinaryUpgrades) {
									var c = !this.supportsBinary && t.transport.supportsBinary;
									r = r || c
								}
								r || (q('probe transport "%s" opened', b), v.send([{
										type: "ping",
										data: "probe"
									}]),
									v.once("packet", function (c) {
										r || ("pong" == c.type && "probe" == c.data ? (q('probe transport "%s" pong', b), t.upgrading = !0, t.emit("upgrading", v), v && (m.priorWebsocketSuccess = "websocket" == v.name, q('pausing current transport "%s"', t.transport.name), t.transport.pause(function () {
											r || "closed" == t.readyState || (q("changing transport and sending upgrade packet"), p(), t.setTransport(v), v.send([{
												type: "upgrade"
											}]), t.emit("upgrade", v), v = null, t.upgrading = !1, t.flush())
										}))) : (q('probe transport "%s" failed', b), c = Error("probe error"),
											c.transport = v.name, t.emit("upgradeError", c)))
									}))
							}

							function h() {
								r || (r = !0, p(), v.close(), v = null)
							}

							function k(c) {
								var d = Error("probe error: " + c);
								d.transport = v.name;
								h();
								q('probe transport "%s" failed because of error: %s', b, c);
								t.emit("upgradeError", d)
							}

							function g() {
								k("transport closed")
							}

							function c() {
								k("socket closed")
							}

							function z(b) {
								v && b.name != v.name && (q('"%s" works - aborting "%s"', b.name, v.name), h())
							}

							function p() {
								v.removeListener("open", d);
								v.removeListener("error", k);
								v.removeListener("close", g);
								t.removeListener("close",
									c);
								t.removeListener("upgrading", z)
							}
							q('probing transport "%s"', b);
							var v = this.createTransport(b, {
									probe: 1
								}),
								r = !1,
								t = this;
							m.priorWebsocketSuccess = !1;
							v.once("open", d);
							v.once("error", k);
							v.once("close", g);
							this.once("close", c);
							this.once("upgrading", z);
							v.open()
						};
						m.prototype.onOpen = function () {
							q("socket open");
							this.readyState = "open";
							m.priorWebsocketSuccess = "websocket" == this.transport.name;
							this.emit("open");
							this.flush();
							if ("open" == this.readyState && this.upgrade && this.transport.pause) {
								q("starting upgrade probes");
								for (var b = 0, d = this.upgrades.length; b < d; b++) this.probe(this.upgrades[b])
							}
						};
						m.prototype.onPacket = function (b) {
							if ("opening" == this.readyState || "open" == this.readyState) switch (q('socket receive: type "%s", data "%s"', b.type, b.data), this.emit("packet", b), this.emit("heartbeat"), b.type) {
								case "open":
									this.onHandshake(H(b.data));
									break;
								case "pong":
									this.setPing();
									this.emit("pong");
									break;
								case "error":
									var d = Error("server error");
									d.code = b.data;
									this.onError(d);
									break;
								case "message":
									this.emit("data", b.data), this.emit("message",
										b.data)
							} else q('packet received with socket readyState "%s"', this.readyState)
						};
						m.prototype.onHandshake = function (b) {
							this.emit("handshake", b);
							this.id = b.sid;
							this.transport.query.sid = b.sid;
							this.upgrades = this.filterUpgrades(b.upgrades);
							this.pingInterval = b.pingInterval;
							this.pingTimeout = b.pingTimeout;
							this.onOpen();
							"closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
						};
						m.prototype.onHeartbeat = function (b) {
							clearTimeout(this.pingTimeoutTimer);
							var d = this;
							d.pingTimeoutTimer = setTimeout(function () {
								if ("closed" != d.readyState) d.onClose("ping timeout")
							}, b || d.pingInterval + d.pingTimeout)
						};
						m.prototype.setPing = function () {
							var b = this;
							clearTimeout(b.pingIntervalTimer);
							b.pingIntervalTimer = setTimeout(function () {
								q("writing ping packet - expecting pong within %sms", b.pingTimeout);
								b.ping();
								b.onHeartbeat(b.pingTimeout)
							}, b.pingInterval)
						};
						m.prototype.ping = function () {
							var b = this;
							this.sendPacket("ping", function () {
								b.emit("ping")
							})
						};
						m.prototype.onDrain = function () {
							this.writeBuffer.splice(0,
								this.prevBufferLen);
							this.prevBufferLen = 0;
							0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
						};
						m.prototype.flush = function () {
							"closed" != this.readyState && (this.transport.writable && !this.upgrading && this.writeBuffer.length) && (q("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
						};
						m.prototype.write = m.prototype.send = function (b, d, h) {
							this.sendPacket("message", b, d, h);
							return this
						};
						m.prototype.sendPacket =
							function (b, d, h, k) {
								"function" == typeof d && (k = d, d = void 0);
								"function" == typeof h && (k = h, h = null);
								if ("closing" != this.readyState && "closed" != this.readyState) {
									h = h || {};
									h.compress = !1 !== h.compress;
									b = {
										type: b,
										data: d,
										options: h
									};
									this.emit("packetCreate", b);
									this.writeBuffer.push(b);
									if (k) this.once("flush", k);
									this.flush()
								}
							};
						m.prototype.close = function () {
							function b() {
								k.onClose("forced close");
								q("socket closing - telling transport to close");
								k.transport.close()
							}

							function d() {
								k.removeListener("upgrade", d);
								k.removeListener("upgradeError",
									d);
								b()
							}

							function h() {
								k.once("upgrade", d);
								k.once("upgradeError", d)
							}
							if ("opening" == this.readyState || "open" == this.readyState) {
								this.readyState = "closing";
								var k = this;
								if (this.writeBuffer.length) this.once("drain", function () {
									this.upgrading ? h() : b()
								});
								else this.upgrading ? h() : b()
							}
							return this
						};
						m.prototype.onError = function (b) {
							q("socket error %j", b);
							m.priorWebsocketSuccess = !1;
							this.emit("error", b);
							this.onClose("transport error", b)
						};
						m.prototype.onClose = function (b, d) {
							if ("opening" == this.readyState || "open" == this.readyState ||
								"closing" == this.readyState) q('socket close with reason: "%s"', b), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", b, d), this.writeBuffer = [], this.prevBufferLen = 0
						};
						m.prototype.filterUpgrades = function (b) {
							for (var d = [], h = 0, k = b.length; h < k; h++) ~x(this.transports, b[h]) && d.push(b[h]);
							return d
						}
					}).call(this, "undefined" !== typeof self ?
						self : "undefined" !== typeof window ? window : {})
				}, {
					"./transport": 13,
					"./transports": 14,
					"component-emitter": 8,
					debug: "n9i2g6",
					"engine.io-parser": 20,
					indexof: 24,
					parsejson: 26,
					parseqs: 27,
					parseuri: 28
				}],
				13: [function (g, p, q) {
					function h(h) {
						this.path = h.path;
						this.hostname = h.hostname;
						this.port = h.port;
						this.secure = h.secure;
						this.query = h.query;
						this.timestampParam = h.timestampParam;
						this.timestampRequests = h.timestampRequests;
						this.readyState = "";
						this.agent = h.agent || !1;
						this.socket = h.socket;
						this.enablesXDR = h.enablesXDR;
						this.pfx =
							h.pfx;
						this.key = h.key;
						this.passphrase = h.passphrase;
						this.cert = h.cert;
						this.ca = h.ca;
						this.ciphers = h.ciphers;
						this.rejectUnauthorized = h.rejectUnauthorized;
						this.extraHeaders = h.extraHeaders
					}
					var m = g("engine.io-parser");
					g = g("component-emitter");
					p.exports = h;
					g(h.prototype);
					h.prototype.onError = function (h, d) {
						var g = Error(h);
						g.type = "TransportError";
						g.description = d;
						this.emit("error", g);
						return this
					};
					h.prototype.open = function () {
						if ("closed" == this.readyState || "" == this.readyState) this.readyState = "opening", this.doOpen();
						return this
					};
					h.prototype.close = function () {
						if ("opening" == this.readyState || "open" == this.readyState) this.doClose(), this.onClose();
						return this
					};
					h.prototype.send = function (h) {
						if ("open" == this.readyState) this.write(h);
						else throw Error("Transport not open");
					};
					h.prototype.onOpen = function () {
						this.readyState = "open";
						this.writable = !0;
						this.emit("open")
					};
					h.prototype.onData = function (h) {
						h = m.decodePacket(h, this.socket.binaryType);
						this.onPacket(h)
					};
					h.prototype.onPacket = function (h) {
						this.emit("packet", h)
					};
					h.prototype.onClose =
						function () {
							this.readyState = "closed";
							this.emit("close")
						}
				}, {
					"component-emitter": 8,
					"engine.io-parser": 20
				}],
				14: [function (g, p, q) {
					(function (h) {
						var m = g("xmlhttprequest-ssl"),
							k = g("./polling-xhr"),
							d = g("./polling-jsonp"),
							p = g("./websocket");
						q.polling = function (g) {
							var b = !1,
								p = !1,
								q = !1 !== g.jsonp;
							h.location && (p = "https:" == location.protocol, (b = location.port) || (b = p ? 443 : 80), b = g.hostname != location.hostname || b != g.port, p = g.secure != p);
							g.xdomain = b;
							g.xscheme = p;
							if ("open" in new m(g) && !g.forceJSONP) return new k(g);
							if (!q) throw Error("JSONP disabled");
							return new d(g)
						};
						q.websocket = p
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {
					"./polling-jsonp": 15,
					"./polling-xhr": 16,
					"./websocket": 18,
					"xmlhttprequest-ssl": 19
				}],
				15: [function (g, p, q) {
					(function (h) {
						function m() {}

						function k(b) {
							d.call(this, b);
							this.query = this.query || {};
							t || (h.___eio || (h.___eio = []), t = h.___eio);
							this.index = t.length;
							var g = this;
							t.push(function (b) {
								g.onData(b)
							});
							this.query.j = this.index;
							h.document && h.addEventListener && h.addEventListener("beforeunload", function () {
								g.script &&
									(g.script.onerror = m)
							}, !1)
						}
						var d = g("./polling"),
							q = g("component-inherit");
						p.exports = k;
						var x = /\n/g,
							b = /\\n/g,
							t;
						q(k, d);
						k.prototype.supportsBinary = !1;
						k.prototype.doClose = function () {
							this.script && (this.script.parentNode.removeChild(this.script), this.script = null);
							this.form && (this.form.parentNode.removeChild(this.form), this.iframe = this.form = null);
							d.prototype.doClose.call(this)
						};
						k.prototype.doPoll = function () {
							var b = this,
								d = document.createElement("script");
							this.script && (this.script.parentNode.removeChild(this.script),
								this.script = null);
							d.async = !0;
							d.src = this.uri();
							d.onerror = function (d) {
								b.onError("jsonp poll error", d)
							};
							var h = document.getElementsByTagName("script")[0];
							h ? h.parentNode.insertBefore(d, h) : (document.head || document.body).appendChild(d);
							this.script = d;
							"undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
								var b = document.createElement("iframe");
								document.body.appendChild(b);
								document.body.removeChild(b)
							}, 100)
						};
						k.prototype.doWrite = function (d, h) {
							function g() {
								k();
								h()
							}

							function k() {
								if (m.iframe) try {
									m.form.removeChild(m.iframe)
								} catch (b) {
									m.onError("jsonp polling iframe removal error",
										b)
								}
								try {
									z = document.createElement('<iframe src="javascript:0" name="' + m.iframeId + '">')
								} catch (c) {
									z = document.createElement("iframe"), z.name = m.iframeId, z.src = "javascript:0"
								}
								z.id = m.iframeId;
								m.form.appendChild(z);
								m.iframe = z
							}
							var m = this;
							if (!this.form) {
								var p = document.createElement("form"),
									s = document.createElement("textarea"),
									c = this.iframeId = "eio_iframe_" + this.index,
									z;
								p.className = "socketio";
								p.style.position = "absolute";
								p.style.top = "-1000px";
								p.style.left = "-1000px";
								p.target = c;
								p.method = "POST";
								p.setAttribute("accept-charset",
									"utf-8");
								s.name = "d";
								p.appendChild(s);
								document.body.appendChild(p);
								this.form = p;
								this.area = s
							}
							this.form.action = this.uri();
							k();
							d = d.replace(b, "\\\n");
							this.area.value = d.replace(x, "\\n");
							try {
								this.form.submit()
							} catch (q) {}
							this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
								"complete" == m.iframe.readyState && g()
							} : this.iframe.onload = g
						}
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {
					"./polling": 17,
					"component-inherit": 9
				}],
				16: [function (g, p, q) {
					(function (h) {
						function m() {}

						function k(d) {
							b.call(this, d);
							if (h.location) {
								var g = "https:" == location.protocol,
									k = location.port;
								k || (k = g ? 443 : 80);
								this.xd = d.hostname != h.location.hostname || k != d.port;
								this.xs = d.secure != g
							} else this.extraHeaders = d.extraHeaders
						}

						function d(b) {
							this.method = b.method || "GET";
							this.uri = b.uri;
							this.xd = !!b.xd;
							this.xs = !!b.xs;
							this.async = !1 !== b.async;
							this.data = void 0 != b.data ? b.data : null;
							this.agent = b.agent;
							this.isBinary = b.isBinary;
							this.supportsBinary = b.supportsBinary;
							this.enablesXDR = b.enablesXDR;
							this.pfx = b.pfx;
							this.key =
								b.key;
							this.passphrase = b.passphrase;
							this.cert = b.cert;
							this.ca = b.ca;
							this.ciphers = b.ciphers;
							this.rejectUnauthorized = b.rejectUnauthorized;
							this.extraHeaders = b.extraHeaders;
							this.create()
						}

						function q() {
							for (var b in d.requests) d.requests.hasOwnProperty(b) && d.requests[b].abort()
						}
						var x = g("xmlhttprequest-ssl"),
							b = g("./polling"),
							t = g("component-emitter"),
							H = g("component-inherit"),
							w = g("debug")("engine.io-client:polling-xhr");
						p.exports = k;
						p.exports.Request = d;
						H(k, b);
						k.prototype.supportsBinary = !0;
						k.prototype.request = function (b) {
							b =
								b || {};
							b.uri = this.uri();
							b.xd = this.xd;
							b.xs = this.xs;
							b.agent = this.agent || !1;
							b.supportsBinary = this.supportsBinary;
							b.enablesXDR = this.enablesXDR;
							b.pfx = this.pfx;
							b.key = this.key;
							b.passphrase = this.passphrase;
							b.cert = this.cert;
							b.ca = this.ca;
							b.ciphers = this.ciphers;
							b.rejectUnauthorized = this.rejectUnauthorized;
							b.extraHeaders = this.extraHeaders;
							return new d(b)
						};
						k.prototype.doWrite = function (b, d) {
							var h = this.request({
									method: "POST",
									data: b,
									isBinary: "string" !== typeof b && void 0 !== b
								}),
								g = this;
							h.on("success", d);
							h.on("error",
								function (b) {
									g.onError("xhr post error", b)
								});
							this.sendXhr = h
						};
						k.prototype.doPoll = function () {
							w("xhr poll");
							var b = this.request(),
								d = this;
							b.on("data", function (b) {
								d.onData(b)
							});
							b.on("error", function (b) {
								d.onError("xhr poll error", b)
							});
							this.pollXhr = b
						};
						t(d.prototype);
						d.prototype.create = function () {
							var b = {
								agent: this.agent,
								xdomain: this.xd,
								xscheme: this.xs,
								enablesXDR: this.enablesXDR
							};
							b.pfx = this.pfx;
							b.key = this.key;
							b.passphrase = this.passphrase;
							b.cert = this.cert;
							b.ca = this.ca;
							b.ciphers = this.ciphers;
							b.rejectUnauthorized =
								this.rejectUnauthorized;
							var g = this.xhr = new x(b),
								k = this;
							try {
								w("xhr open %s: %s", this.method, this.uri);
								g.open(this.method, this.uri, this.async);
								try {
									if (this.extraHeaders) {
										g.setDisableHeaderCheck(!0);
										for (var m in this.extraHeaders) this.extraHeaders.hasOwnProperty(m) && g.setRequestHeader(m, this.extraHeaders[m])
									}
								} catch (s) {}
								this.supportsBinary && (g.responseType = "arraybuffer");
								if ("POST" == this.method) try {
									this.isBinary ? g.setRequestHeader("Content-type", "application/octet-stream") : g.setRequestHeader("Content-type",
										"text/plain;charset=UTF-8")
								} catch (c) {}
								"withCredentials" in g && (g.withCredentials = !0);
								this.hasXDR() ? (g.onload = function () {
									k.onLoad()
								}, g.onerror = function () {
									k.onError(g.responseText)
								}) : g.onreadystatechange = function () {
									if (4 == g.readyState)
										if (200 == g.status || 1223 == g.status) k.onLoad();
										else setTimeout(function () {
											k.onError(g.status)
										}, 0)
								};
								w("xhr data %s", this.data);
								g.send(this.data)
							} catch (p) {
								setTimeout(function () {
									k.onError(p)
								}, 0);
								return
							}
							h.document && (this.index = d.requestsCount++, d.requests[this.index] = this)
						};
						d.prototype.onSuccess =
							function () {
								this.emit("success");
								this.cleanup()
							};
						d.prototype.onData = function (b) {
							this.emit("data", b);
							this.onSuccess()
						};
						d.prototype.onError = function (b) {
							this.emit("error", b);
							this.cleanup(!0)
						};
						d.prototype.cleanup = function (b) {
							if ("undefined" != typeof this.xhr && null !== this.xhr) {
								this.hasXDR() ? this.xhr.onload = this.xhr.onerror = m : this.xhr.onreadystatechange = m;
								if (b) try {
									this.xhr.abort()
								} catch (g) {}
								h.document && delete d.requests[this.index];
								this.xhr = null
							}
						};
						d.prototype.onLoad = function () {
							var b;
							try {
								var d;
								try {
									d = this.xhr.getResponseHeader("Content-Type").split(";")[0]
								} catch (h) {}
								if ("application/octet-stream" ===
									d) b = this.xhr.response;
								else if (this.supportsBinary) try {
									b = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
								} catch (g) {
									var k = new Uint8Array(this.xhr.response);
									d = [];
									for (var c = 0, m = k.length; c < m; c++) d.push(k[c]);
									b = String.fromCharCode.apply(null, d)
								} else b = this.xhr.responseText
							} catch (p) {
								this.onError(p)
							}
							if (null != b) this.onData(b)
						};
						d.prototype.hasXDR = function () {
							return "undefined" !== typeof h.XDomainRequest && !this.xs && this.enablesXDR
						};
						d.prototype.abort = function () {
							this.cleanup()
						};
						h.document && (d.requestsCount =
							0, d.requests = {}, h.attachEvent ? h.attachEvent("onunload", q) : h.addEventListener && h.addEventListener("beforeunload", q, !1))
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {
					"./polling": 17,
					"component-emitter": 8,
					"component-inherit": 9,
					debug: "n9i2g6",
					"xmlhttprequest-ssl": 19
				}],
				17: [function (g, p, q) {
					function h(d) {
						var h = d && d.forceBase64;
						if (!b || h) this.supportsBinary = !1;
						m.call(this, d)
					}
					var m = g("../transport"),
						k = g("parseqs"),
						d = g("engine.io-parser");
					q = g("component-inherit");
					var R =
						g("yeast"),
						x = g("debug")("engine.io-client:polling");
					p.exports = h;
					var b = null != (new(g("xmlhttprequest-ssl"))({
						xdomain: !1
					})).responseType;
					q(h, m);
					h.prototype.name = "polling";
					h.prototype.doOpen = function () {
						this.poll()
					};
					h.prototype.pause = function (b) {
						function d() {
							x("paused");
							h.readyState = "paused";
							b()
						}
						var h = this;
						this.readyState = "pausing";
						if (this.polling || !this.writable) {
							var g = 0;
							this.polling && (x("we are currently polling - waiting to pause"), g++, this.once("pollComplete", function () {
								x("pre-pause polling complete");
								--g || d()
							}));
							this.writable || (x("we are currently writing - waiting to pause"), g++, this.once("drain", function () {
								x("pre-pause writing complete");
								--g || d()
							}))
						} else d()
					};
					h.prototype.poll = function () {
						x("polling");
						this.polling = !0;
						this.doPoll();
						this.emit("poll")
					};
					h.prototype.onData = function (b) {
						var h = this;
						x("polling got data %s", b);
						d.decodePayload(b, this.socket.binaryType, function (b, d, g) {
							if ("opening" == h.readyState) h.onOpen();
							if ("close" == b.type) return h.onClose(), !1;
							h.onPacket(b)
						});
						"closed" != this.readyState &&
							(this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : x('ignoring poll - transport state "%s"', this.readyState))
					};
					h.prototype.doClose = function () {
						function b() {
							x("writing close packet");
							d.write([{
								type: "close"
							}])
						}
						var d = this;
						"open" == this.readyState ? (x("transport open - closing"), b()) : (x("transport not open - deferring close"), this.once("open", b))
					};
					h.prototype.write = function (b) {
						var h = this;
						this.writable = !1;
						var g = function () {
								h.writable = !0;
								h.emit("drain")
							},
							h = this;
						d.encodePayload(b,
							this.supportsBinary,
							function (b) {
								h.doWrite(b, g)
							})
					};
					h.prototype.uri = function () {
						var b = this.query || {},
							d = this.secure ? "https" : "http",
							h = "";
						!1 !== this.timestampRequests && (b[this.timestampParam] = R());
						this.supportsBinary || b.sid || (b.b64 = 1);
						b = k.encode(b);
						this.port && ("https" == d && 443 != this.port || "http" == d && 80 != this.port) && (h = ":" + this.port);
						b.length && (b = "?" + b);
						var g = -1 !== this.hostname.indexOf(":");
						return d + "://" + (g ? "[" + this.hostname + "]" : this.hostname) + h + this.path + b
					}
				}, {
					"../transport": 13,
					"component-inherit": 9,
					debug: "n9i2g6",
					"engine.io-parser": 20,
					parseqs: 27,
					"xmlhttprequest-ssl": 19,
					yeast: 30
				}],
				18: [function (g, p, q) {
					(function (h) {
						function m(b) {
							b && b.forceBase64 && (this.supportsBinary = !1);
							this.perMessageDeflate = b.perMessageDeflate;
							k.call(this, b)
						}
						var k = g("../transport"),
							d = g("engine.io-parser"),
							q = g("parseqs"),
							x = g("component-inherit"),
							b = g("yeast"),
							t = g("debug")("engine.io-client:websocket"),
							H = h.WebSocket || h.MozWebSocket,
							w = H;
						if (!w && "undefined" === typeof window) try {
							w = g("ws")
						} catch (O) {}
						p.exports = m;
						x(m, k);
						m.prototype.name = "websocket";
						m.prototype.supportsBinary = !0;
						m.prototype.doOpen = function () {
							if (this.check()) {
								var b = this.uri(),
									d = {
										agent: this.agent,
										perMessageDeflate: this.perMessageDeflate
									};
								d.pfx = this.pfx;
								d.key = this.key;
								d.passphrase = this.passphrase;
								d.cert = this.cert;
								d.ca = this.ca;
								d.ciphers = this.ciphers;
								d.rejectUnauthorized = this.rejectUnauthorized;
								this.extraHeaders && (d.headers = this.extraHeaders);
								this.ws = H ? new w(b) : new w(b, void 0, d);
								void 0 === this.ws.binaryType && (this.supportsBinary = !1);
								this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer";
								this.addEventListeners()
							}
						};
						m.prototype.addEventListeners = function () {
							var b = this;
							this.ws.onopen = function () {
								b.onOpen()
							};
							this.ws.onclose = function () {
								b.onClose()
							};
							this.ws.onmessage = function (d) {
								b.onData(d.data)
							};
							this.ws.onerror = function (d) {
								b.onError("websocket error", d)
							}
						};
						"undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (m.prototype.onData = function (b) {
							var d = this;
							setTimeout(function () {
									k.prototype.onData.call(d, b)
								},
								0)
						});
						m.prototype.write = function (b) {
							function g() {
								k.emit("flush");
								setTimeout(function () {
									k.writable = !0;
									k.emit("drain")
								}, 0)
							}
							var k = this;
							this.writable = !1;
							for (var m = b.length, c = 0, p = m; c < p; c++)(function (b) {
								d.encodePacket(b, k.supportsBinary, function (c) {
									if (!H) {
										var d = {};
										b.options && (d.compress = b.options.compress);
										k.perMessageDeflate && ("string" == typeof c ? h.Buffer.byteLength(c) : c.length) < k.perMessageDeflate.threshold && (d.compress = !1)
									}
									try {
										H ? k.ws.send(c) : k.ws.send(c, d)
									} catch (p) {
										t("websocket closed before onclose event")
									}--m ||
										g()
								})
							})(b[c])
						};
						m.prototype.onClose = function () {
							k.prototype.onClose.call(this)
						};
						m.prototype.doClose = function () {
							"undefined" !== typeof this.ws && this.ws.close()
						};
						m.prototype.uri = function () {
							var d = this.query || {},
								h = this.secure ? "wss" : "ws",
								g = "";
							this.port && ("wss" == h && 443 != this.port || "ws" == h && 80 != this.port) && (g = ":" + this.port);
							this.timestampRequests && (d[this.timestampParam] = b());
							this.supportsBinary || (d.b64 = 1);
							d = q.encode(d);
							d.length && (d = "?" + d);
							var k = -1 !== this.hostname.indexOf(":");
							return h + "://" + (k ? "[" + this.hostname +
								"]" : this.hostname) + g + this.path + d
						};
						m.prototype.check = function () {
							return !!w && !("__initialize" in w && this.name === m.prototype.name)
						}
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {
					"../transport": 13,
					"component-inherit": 9,
					debug: "n9i2g6",
					"engine.io-parser": 20,
					parseqs: 27,
					ws: 7,
					yeast: 30
				}],
				19: [function (g, p, q) {
					var h = g("has-cors");
					p.exports = function (g) {
						var k = g.xdomain,
							d = g.xscheme;
						g = g.enablesXDR;
						try {
							if ("undefined" != typeof XMLHttpRequest && (!k || h)) return new XMLHttpRequest
						} catch (p) {}
						try {
							if ("undefined" !=
								typeof XDomainRequest && !d && g) return new XDomainRequest
						} catch (q) {}
						if (!k) try {
							return new ActiveXObject("Microsoft.XMLHTTP")
						} catch (b) {}
					}
				}, {
					"has-cors": 23
				}],
				20: [function (g, p, q) {
					(function (h) {
						function m(b, c, d) {
							if (!c) return q.encodeBase64Packet(b, d);
							var h = new FileReader;
							h.onload = function () {
								b.data = h.result;
								q.encodePacket(b, c, !0, d)
							};
							return h.readAsArrayBuffer(b.data)
						}

						function k(b, c, d) {
							var h = Array(b.length);
							d = t(b.length, d);
							for (var g = function (b, d, l) {
									c(d, function (c, d) {
										h[b] = d;
										l(c, h)
									})
								}, k = 0; k < b.length; k++) g(k, b[k],
								d)
						}
						var d = g("./keys"),
							p = g("has-binary"),
							x = g("arraybuffer.slice"),
							b = g("base64-arraybuffer"),
							t = g("after"),
							H = g("utf8"),
							w = navigator.userAgent.match(/Android/i),
							O = /PhantomJS/i.test(navigator.userAgent),
							W = w || O;
						q.protocol = 3;
						var P = q.packets = {
								open: 0,
								close: 1,
								ping: 2,
								pong: 3,
								message: 4,
								upgrade: 5,
								noop: 6
							},
							X = d(P),
							s = {
								type: "error",
								data: "parser error"
							},
							c = g("blob");
						q.encodePacket = function (b, d, g, k) {
							"function" == typeof d && (k = d, d = !1);
							"function" == typeof g && (k = g, g = null);
							var p = void 0 === b.data ? void 0 : b.data.buffer || b.data;
							if (h.ArrayBuffer &&
								p instanceof ArrayBuffer) {
								if (d) {
									g = b.data;
									d = new Uint8Array(g);
									g = new Uint8Array(1 + g.byteLength);
									g[0] = P[b.type];
									for (b = 0; b < d.length; b++) g[b + 1] = d[b];
									b = k(g.buffer)
								} else b = q.encodeBase64Packet(b, k);
								return b
							}
							if (c && p instanceof h.Blob) return d ? W ? b = m(b, d, k) : (d = new Uint8Array(1), d[0] = P[b.type], b = new c([d.buffer, b.data]), b = k(b)) : b = q.encodeBase64Packet(b, k), b;
							if (p && p.base64) return k("b" + q.packets[b.type] + b.data.data);
							d = P[b.type];
							void 0 !== b.data && (d += g ? H.encode(String(b.data)) : String(b.data));
							return k("" + d)
						};
						q.encodeBase64Packet =
							function (b, d) {
								var g = "b" + q.packets[b.type];
								if (c && b.data instanceof h.Blob) {
									var k = new FileReader;
									k.onload = function () {
										var b = k.result.split(",")[1];
										d(g + b)
									};
									return k.readAsDataURL(b.data)
								}
								var m;
								try {
									m = String.fromCharCode.apply(null, new Uint8Array(b.data))
								} catch (p) {
									m = new Uint8Array(b.data);
									for (var s = Array(m.length), t = 0; t < m.length; t++) s[t] = m[t];
									m = String.fromCharCode.apply(null, s)
								}
								g += h.btoa(m);
								return d(g)
							};
						q.decodePacket = function (b, d, h) {
							if ("string" == typeof b || void 0 === b) {
								if ("b" == b.charAt(0)) return q.decodeBase64Packet(b.substr(1),
									d);
								if (h) try {
									b = H.decode(b)
								} catch (g) {
									return s
								}
								h = b.charAt(0);
								return Number(h) == h && X[h] ? 1 < b.length ? {
									type: X[h],
									data: b.substring(1)
								} : {
									type: X[h]
								} : s
							}
							h = (new Uint8Array(b))[0];
							b = x(b, 1);
							c && "blob" === d && (b = new c([b]));
							return {
								type: X[h],
								data: b
							}
						};
						q.decodeBase64Packet = function (d, g) {
							var k = X[d.charAt(0)];
							if (!h.ArrayBuffer) return {
								type: k,
								data: {
									base64: !0,
									data: d.substr(1)
								}
							};
							var m = b.decode(d.substr(1));
							"blob" === g && c && (m = new c([m]));
							return {
								type: k,
								data: m
							}
						};
						q.encodePayload = function (b, d, h) {
							"function" == typeof d && (h = d, d = null);
							var g = p(b);
							if (d && g) return c && !W ? q.encodePayloadAsBlob(b, h) : q.encodePayloadAsArrayBuffer(b, h);
							if (!b.length) return h("0:");
							k(b, function (b, c) {
								q.encodePacket(b, g ? d : !1, !0, function (b) {
									c(null, b.length + ":" + b)
								})
							}, function (b, c) {
								return h(c.join(""))
							})
						};
						q.decodePayload = function (b, c, d) {
							if ("string" != typeof b) return q.decodePayloadAsBinary(b, c, d);
							"function" === typeof c && (d = c, c = null);
							var h;
							if ("" == b) return d(s, 0, 1);
							h = "";
							for (var g, k, m = 0, p = b.length; m < p; m++)
								if (k = b.charAt(m), ":" != k) h += k;
								else {
									if ("" == h || h != (g = Number(h))) return d(s,
										0, 1);
									k = b.substr(m + 1, g);
									if (h != k.length) return d(s, 0, 1);
									if (k.length) {
										h = q.decodePacket(k, c, !0);
										if (s.type == h.type && s.data == h.data) return d(s, 0, 1);
										if (!1 === d(h, m + g, p)) return
									}
									m += g;
									h = ""
								}
							if ("" != h) return d(s, 0, 1)
						};
						q.encodePayloadAsArrayBuffer = function (b, c) {
							if (!b.length) return c(new ArrayBuffer(0));
							k(b, function (b, c) {
								q.encodePacket(b, !0, !0, function (b) {
									return c(null, b)
								})
							}, function (b, d) {
								var h = d.reduce(function (b, c) {
										var d;
										d = "string" === typeof c ? c.length : c.byteLength;
										return b + d.toString().length + d + 2
									}, 0),
									g = new Uint8Array(h),
									k = 0;
								d.forEach(function (b) {
									var c = "string" === typeof b,
										d = b;
									if (c) {
										for (var d = new Uint8Array(b.length), h = 0; h < b.length; h++) d[h] = b.charCodeAt(h);
										d = d.buffer
									}
									c ? g[k++] = 0 : g[k++] = 1;
									b = d.byteLength.toString();
									for (h = 0; h < b.length; h++) g[k++] = parseInt(b[h]);
									g[k++] = 255;
									d = new Uint8Array(d);
									for (h = 0; h < d.length; h++) g[k++] = d[h]
								});
								return c(g.buffer)
							})
						};
						q.encodePayloadAsBlob = function (b, d) {
							k(b, function (b, d) {
								q.encodePacket(b, !0, !0, function (b) {
									var h = new Uint8Array(1);
									h[0] = 1;
									if ("string" === typeof b) {
										for (var g = new Uint8Array(b.length),
												k = 0; k < b.length; k++) g[k] = b.charCodeAt(k);
										b = g.buffer;
										h[0] = 0
									}
									for (var g = (b instanceof ArrayBuffer ? b.byteLength : b.size).toString(), l = new Uint8Array(g.length + 1), k = 0; k < g.length; k++) l[k] = parseInt(g[k]);
									l[g.length] = 255;
									c && (b = new c([h.buffer, l.buffer, b]), d(null, b))
								})
							}, function (b, h) {
								return d(new c(h))
							})
						};
						q.decodePayloadAsBinary = function (b, c, d) {
							"function" === typeof c && (d = c, c = null);
							for (var h = [], g = !1; 0 < b.byteLength;) {
								for (var k = new Uint8Array(b), m = 0 === k[0], p = "", l = 1; 255 != k[l]; l++) {
									if (310 < p.length) {
										g = !0;
										break
									}
									p += k[l]
								}
								if (g) return d(s,
									0, 1);
								b = x(b, 2 + p.length);
								p = parseInt(p);
								k = x(b, 0, p);
								if (m) try {
									k = String.fromCharCode.apply(null, new Uint8Array(k))
								} catch (t) {
									for (m = new Uint8Array(k), k = "", l = 0; l < m.length; l++) k += String.fromCharCode(m[l])
								}
								h.push(k);
								b = x(b, p)
							}
							var w = h.length;
							h.forEach(function (b, h) {
								d(q.decodePacket(b, c, !0), h, w)
							})
						}
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {
					"./keys": 21,
					after: 3,
					"arraybuffer.slice": 4,
					"base64-arraybuffer": 5,
					blob: 6,
					"has-binary": 22,
					utf8: 29
				}],
				21: [function (g, p, q) {
					p.exports = Object.keys ||
						function (h) {
							var g = [],
								k = Object.prototype.hasOwnProperty,
								d;
							for (d in h) k.call(h, d) && g.push(d);
							return g
						}
				}, {}],
				22: [function (g, p, q) {
					(function (h) {
						var m = g("isarray");
						p.exports = function (g) {
							function d(g) {
								if (!g) return !1;
								if (h.Buffer && h.Buffer.isBuffer(g) || h.ArrayBuffer && g instanceof ArrayBuffer || h.Blob && g instanceof Blob || h.File && g instanceof File) return !0;
								if (m(g))
									for (var k = 0; k < g.length; k++) {
										if (d(g[k])) return !0
									} else if (g && "object" == typeof g)
										for (k in g.toJSON && (g = g.toJSON()), g)
											if (Object.prototype.hasOwnProperty.call(g,
													k) && d(g[k])) return !0;
								return !1
							}
							return d(g)
						}
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {
					isarray: 25
				}],
				23: [function (g, p, q) {
					try {
						p.exports = "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
					} catch (h) {
						p.exports = !1
					}
				}, {}],
				24: [function (g, p, q) {
					var h = [].indexOf;
					p.exports = function (g, k) {
						if (h) return g.indexOf(k);
						for (var d = 0; d < g.length; ++d)
							if (g[d] === k) return d;
						return -1
					}
				}, {}],
				25: [function (g, p, q) {
					p.exports = Array.isArray || function (h) {
						return "[object Array]" ==
							Object.prototype.toString.call(h)
					}
				}, {}],
				26: [function (g, p, q) {
					(function (h) {
						var g = /^[\],:{}\s]*$/,
							k = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
							d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
							q = /(?:^|:|,)(?:\s*\[)+/g,
							x = /^\s+/,
							b = /\s+$/;
						p.exports = function (p) {
							if ("string" != typeof p || !p) return null;
							p = p.replace(x, "").replace(b, "");
							if (h.JSON && JSON.parse) return JSON.parse(p);
							if (g.test(p.replace(k, "@").replace(d, "]").replace(q, ""))) return (new Function("return " + p))()
						}
					}).call(this, "undefined" !==
						typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {}],
				27: [function (g, p, q) {
					q.encode = function (h) {
						var g = "",
							k;
						for (k in h) h.hasOwnProperty(k) && (g.length && (g += "&"), g += encodeURIComponent(k) + "=" + encodeURIComponent(h[k]));
						return g
					};
					q.decode = function (h) {
						var g = {};
						h = h.split("&");
						for (var k = 0, d = h.length; k < d; k++) {
							var p = h[k].split("=");
							g[decodeURIComponent(p[0])] = decodeURIComponent(p[1])
						}
						return g
					}
				}, {}],
				28: [function (g, p, q) {
					var h = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
						m = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");
					p.exports = function (g) {
						var d = g,
							p = g.indexOf("["),
							q = g.indexOf("]"); - 1 != p && -1 != q && (g = g.substring(0, p) + g.substring(p, q).replace(/:/g, ";") + g.substring(q, g.length));
						g = h.exec(g || "");
						for (var b = {}, t = 14; t--;) b[m[t]] = g[t] || ""; - 1 != p && -1 != q && (b.source = d, b.host = b.host.substring(1, b.host.length - 1).replace(/;/g, ":"), b.authority = b.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), b.ipv6uri = !0);
						return b
					}
				}, {}],
				29: [function (g, p, q) {
					(function (g) {
						(function (m) {
							function k(b) {
								for (var c = [], d = 0, g = b.length, h, k; d < g;) h = b.charCodeAt(d++), 55296 <= h && 56319 >= h && d < g ? (k = b.charCodeAt(d++), 56320 == (k & 64512) ? c.push(((h & 1023) << 10) + (k & 1023) + 65536) : (c.push(h), d--)) : c.push(h);
								return c
							}

							function d(b) {
								if (55296 <= b && 57343 >= b) throw Error("Lone surrogate U+" + b.toString(16).toUpperCase() + " is not a scalar value");
							}

							function R() {
								if (P >= W) throw Error("Invalid byte index");
								var b = O[P] & 255;
								P++;
								if (128 == (b & 192)) return b & 63;
								throw Error("Invalid continuation byte");
							}

							function x() {
								var b, c, g, h;
								if (P > W) throw Error("Invalid byte index");
								if (P == W) return !1;
								b = O[P] & 255;
								P++;
								if (0 == (b & 128)) return b;
								if (192 == (b & 224)) {
									c = R();
									b = (b & 31) << 6 | c;
									if (128 <= b) return b;
									throw Error("Invalid continuation byte");
								}
								if (224 == (b & 240)) {
									c = R();
									g = R();
									b = (b & 15) << 12 | c << 6 | g;
									if (2048 <= b) return d(b), b;
									throw Error("Invalid continuation byte");
								}
								if (240 == (b & 248) && (c = R(), g = R(), h = R(), b = (b & 15) << 18 | c << 12 | g << 6 | h, 65536 <= b && 1114111 >= b)) return b;
								throw Error("Invalid UTF-8 detected");
							}
							var b = "object" == typeof q && q,
								t = "object" ==
								typeof p && p && p.exports == b && p,
								H = "object" == typeof g && g;
							if (H.global === H || H.window === H) m = H;
							var w = String.fromCharCode,
								O, W, P, H = {
									version: "2.0.0",
									encode: function (b) {
										b = k(b);
										for (var c = b.length, g = -1, h, p = ""; ++g < c;) {
											h = b[g];
											if (0 == (h & 4294967168)) h = w(h);
											else {
												var m = "";
												0 == (h & 4294965248) ? m = w(h >> 6 & 31 | 192) : 0 == (h & 4294901760) ? (d(h), m = w(h >> 12 & 15 | 224), m += w(h >> 6 & 63 | 128)) : 0 == (h & 4292870144) && (m = w(h >> 18 & 7 | 240), m += w(h >> 12 & 63 | 128), m += w(h >> 6 & 63 | 128));
												h = m += w(h & 63 | 128)
											}
											p += h
										}
										return p
									},
									decode: function (b) {
										O = k(b);
										W = O.length;
										P = 0;
										b = [];
										for (var c; !1 !== (c = x());) b.push(c);
										c = b.length;
										for (var d = -1, h, g = ""; ++d < c;) h = b[d], 65535 < h && (h -= 65536, g += w(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), g += w(h);
										return g
									}
								};
							if (b && !b.nodeType)
								if (t) t.exports = H;
								else {
									m = {}.hasOwnProperty;
									for (var X in H) m.call(H, X) && (b[X] = H[X])
								}
							else m.utf8 = H
						})(this)
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {}],
				30: [function (g, p, q) {
					function h(b) {
						var h = "";
						do h = k[b % d] + h, b = Math.floor(b / d); while (0 < b);
						return h
					}

					function m() {
						var b = h(+new Date);
						return b !==
							t ? (x = 0, t = b) : b + "." + h(x++)
					}
					for (var k = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), d = 64, R = {}, x = 0, b = 0, t; b < d; b++) R[k[b]] = b;
					m.encode = h;
					m.decode = function (h) {
						var g = 0;
						for (b = 0; b < h.length; b++) g = g * d + R[h.charAt(b)];
						return g
					};
					p.exports = m
				}, {}]
			}, {}, [10])(10)
		})
	})();
	(function (u) {
		"function" !== typeof Array.isArray && (Array.isArray = function (g) {
			return "[object Array]" === Object.prototype.toString.call(g)
		});
		Array.prototype.indexOf || (Array.prototype.indexOf = function (g) {
			for (var q = 0, h = this.length; q < h; q++)
				if (this[q] === g) return q;
			return -1
		});
		u = u.EventEmitter = function () {};
		var g = Array.isArray;
		u.prototype.emit = function (p) {
			var q;
			if ("error" === p && (!this._events || !this._events.error || g(this._events.error) && !this._events.error.length)) {
				if (arguments[1] instanceof Error) throw arguments[1];
				throw Error("Uncaught, unspecified 'error' event.");
			}
			if (!this._events) return !1;
			var h = this._events[p];
			if (!h) return !1;
			if ("function" == typeof h) {
				switch (arguments.length) {
					case 1:
						h.call(this);
						break;
					case 2:
						h.call(this, arguments[1]);
						break;
					case 3:
						h.call(this, arguments[1], arguments[2]);
						break;
					default:
						q = Array.prototype.slice.call(arguments, 1), h.apply(this, q)
				}
				return !0
			}
			if (g(h)) {
				q = Array.prototype.slice.call(arguments, 1);
				for (var h = h.slice(), m = 0, k = h.length; m < k; m++) h[m].apply(this, q);
				return !0
			}
			return !1
		};
		u.prototype.addListener =
			function (p, q) {
				if ("function" !== typeof q) throw Error("addListener only takes instances of Function");
				this._events || (this._events = {});
				this._events[p] ? g(this._events[p]) ? this._events[p].push(q) : this._events[p] = [this._events[p], q] : this._events[p] = q;
				return this
			};
		u.prototype.on = u.prototype.addListener;
		u.prototype.once = function (g, q) {
			var h = this;
			h.on(g, function k() {
				h.removeListener(g, k);
				q.apply(this, arguments)
			})
		};
		u.prototype.removeListener = function (p, q) {
			if ("function" !== typeof q) throw Error("removeListener only takes instances of Function");
			if (!this._events || !this._events[p]) return this;
			var h = this._events[p];
			if (g(h)) {
				var m = h.indexOf(q);
				if (0 > m) return this;
				h.splice(m, 1);
				0 === h.length && delete this._events[p]
			} else this._events[p] === q && delete this._events[p];
			return this
		};
		u.prototype.removeAllListeners = function (g) {
			g ? g && (this._events && this._events[g]) && (this._events[g] = null) : this._events = {};
			return this
		};
		u.prototype.listeners = function (p) {
			this._events || (this._events = {});
			this._events[p] || (this._events[p] = []);
			g(this._events[p]) || (this._events[p] = [this._events[p]]);
			return this._events[p]
		}
	})(window);
	(function (u) {
		function g(h, g) {
			if (!g.engineIo) throw Error("You must specify engineIo");
			g.timestampRequests = !0;
			g.timestampParam = "__t";
			this.__callbackIndex = 0;
			this.__callbacks = {};
			this.state = q.OPENING;
			this.socket = new g.engineIo(h, g);
			this.debug = !1;
			if (document.getElementById("tawk__dmz")) {
				var k = this;
				u.getSocketTransport = function () {
					if (k.socket.transport) return k.socket.transport.name
				}
			}
			document.location && "#!tawk-debug" === document.location.hash && (this.debug = !0);
			EventEmitter.call(this);
			this.attachListeners()
		}
		var p, q = {
			OPENING: "opening",
			OPEN: "open",
			CLOSING: "closing",
			CLOSED: "closed"
		};
		for (p in EventEmitter.prototype) "function" === typeof EventEmitter.prototype[p] && Object.prototype.hasOwnProperty.call(EventEmitter.prototype, p) && (g.prototype[p] = EventEmitter.prototype[p]);
		g.prototype.attachListeners = function () {
			var g = this;
			this.socket.on("open", function () {
				g.state = q.OPEN;
				g.emit("connect")
			});
			this.socket.on("close", function (m, k) {
				g.emit("disconnect", m, k);
				g.doClose()
			});
			this.socket.on("error", function (m) {
				g.emit("error",
					m)
			});
			this.socket.on("message", function (m) {
				g.onMessage(m)
			})
		};
		g.prototype.close = g.prototype.disconnect = function () {
			var g = this;
			this.state === q.OPENING && setTimeout(function () {
				g.close()
			}, 1E3);
			this.state === q.OPEN && (this.state = q.CLOSING, this.clearCallbacks(), this.socket.close())
		};
		g.prototype.doClose = function () {
			this.clearCallbacks();
			this.state = q.CLOSED;
			this.socket.removeAllListeners();
			this.removeAllListeners();
			this.socket = null
		};
		g.prototype.clearCallbacks = function () {
			this.__callbacks = {}
		};
		g.prototype.onMessage =
			function (g) {
				(g = this.decode(g)) && ("__callback__" === g.c ? this.executeCallback(g) : this.emit.apply(this, [g.c].concat(g.p)))
			};
		g.prototype.executeCallback = function (g) {
			var m = this.__callbacks[g.cb];
			delete this.__callbacks[g.cb];
			m.apply(null, g.p)
		};
		g.prototype.decode = function (g) {
			var m;
			this.debug && (console && console.log) && (data = new Date, console.log("received " + data.toUTCString() + " : " + g));
			try {
				m = JSON.parse(g)
			} catch (k) {
				this.emit("error", k);
				return
			}
			if (m.c)
				if ("error" === m.c || "connect" === m.c || "disconnect" === m.c) this.emit("error",
					Error("server returned reserved command : `" + m.cmd + "`"));
				else if (m.p && "[object Array]" !== Object.prototype.toString.call(m.p)) this.emit("error", Error("data is expected to be an array"));
			else {
				if ("__callback__" !== m.c) return m;
				g = parseInt(m.cb, 10);
				if (isNaN(g)) this.emit("error", Error("received callback command but there was no valid callback id(`" + g + "`"));
				else {
					if (this.__callbacks[g]) return m.cb = g, m;
					this.emit("error", Error("received callback command but callback isnt present (`" + m.cb + "`)"))
				}
			} else this.emit("error",
				Error("no command was sent by the server"))
		};
		g.prototype.send = function () {
			var g = this.encode(arguments);
			this.debug && (console && console.log) && (data = new Date, console.log("send " + data.toUTCString() + " : " + g));
			this.state !== q.OPEN ? this.emit("error", Error("Socket isnt open its state is `" + this.state + "` tried to send `" + g + "`")) : g && this.socket.send(g)
		};
		g.prototype.encode = function (g) {
			var m = {};
			g = Array.prototype.slice.call(g);
			if (g[0]) {
				m.c = g[0];
				"function" === typeof g[g.length - 1] && (m.cb = this.enqueuCallback(g.pop()));
				m.p = g.slice(1);
				var k;
				try {
					k = JSON.stringify(m)
				} catch (d) {
					this.emit("error", d);
					return
				}
				return k
			}
			this.emit("error", Error("now command specified"))
		};
		g.prototype.enqueuCallback = function (g) {
			this.__callbacks[this.__callbackIndex] = g;
			return this.__callbackIndex++
		};
		u.$__TawkSocket = g
	})(window);
	(function (u) {
		var g, p, q, h, m, k = {},
			d = this,
			R = (new Date).getTime(),
			x = d.navigator,
			b = {
				viewHandler: null
			};
		u.startTime = R.toString();
		u.loaded = !1;
		u.connected = !1;
		u.ready = !1;
		"undefined" !== typeof Tawk_LoadStart && ($_Tawk_LoadStart = Tawk_LoadStart);
		try {
			b.ResetStyle = "html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}ins{background-color:#ff9;color:#000;text-decoration:none}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}html,body{height:100%;width:100%}body{background:transparent;height:100%;width:100%;font:13px Helvetica,Arial,sans-serif;position:relative}.clear{clear:both}.clearfix:after{content:'';display:block;height:0;clear:both;visibility:hidden}";
			b.MaximizedStyle = "body{font-weight:normal;outline:0;font-size:15px;font-family:Helvetica,Arial,sans-serif}body.font-lato{font-family:'Lato','Open Sans',sans-serif !important}*{font-family:inherit}::-webkit-input-placeholder{white-space:normal}::-moz-placeholder{white-space:normal}:-ms-input-placeholder{white-space:normal}:-moz-placeholder{white-space:normal}.rtl-direction{direction:rtl !important}#tawkchat-maximized-wrapper{width:100%;height:100%;position:relative}#tawkchat-maximized-wrapper.noMenu .headerBoxLink{display:none !important}#tawkchat-maximized-wrapper.noMenu #minimizeChat.headerBoxLink{display:block !important}#tawkchat-maximized-wrapper .notShown{display:none !important}#borderWrapper{position:absolute;top:0;bottom:0;z-index:-10;background-color:#e1e1e1;width:100%;height:100%}#innerWrapper{background:#fff;left:0;position:absolute;right:0;top:0;bottom:0;border:1px solid #e9e9e9}#headerBoxWrapper{height:60px}#expandableLink{height:5px;width:100%;font-size:0;cursor:s-resize;visibility:hidden;position:absolute;top:56px;z-index:30}#expandableIcon{width:30px;height:4px;margin:0 auto;background:#a1a1a1}#expandableLink.expanded{cursor:n-resize}#headerBox{height:60px;position:relative;z-index:30;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#agentBar{height:100px;display:none}#headerBoxControlsContainer{height:60px;position:relative;float:none;display:grid;grid-auto-columns:1fr;padding:0 8px;display:-ms-grid;-ms-grid-columns:1fr}#headerBoxControlsContainer #screenShare{-ms-grid-row:1;-ms-grid-column:2;float:left;width:30px;height:60px}#headerBoxControlsContainer #voiceCall{-ms-grid-row:1;-ms-grid-column:3;float:left;width:30px;height:60px}#headerBoxControlsContainer #videoCall{-ms-grid-row:1;-ms-grid-column:4;float:left;width:30px;height:60px}#headerBoxControlsContainer .headerBoxLink{-ms-grid-row:1;-ms-grid-column:5;float:left;width:30px;height:60px}#headerBoxControlsContainer #minimizeChat{-ms-grid-row:1;-ms-grid-column:6;float:left;width:30px;height:60px}#headerAccountStateContainer{width:fit-content;height:60px;display:grid;grid-template-columns:auto 1fr;-ms-flex-grow:1;-webkit-flex-grow:1;-moz-flex-grow:1;flex-grow:1;-ms-flex-shrink:1;-webkit-flex-shrink:1;-moz-flex-shrink:1;flex-shrink:1;-ms-flex:1;display:-ms-grid;-ms-grid-columns:auto 1fr}#headerAccountStateContainer #headerAccountState{-ms-grid-row:1;-ms-grid-column:1;float:left}#headerAccountStateContainer #agentProfileContainer{-ms-grid-row:1;-ms-grid-column:2;float:left;width:auto}.rtl-direction #headerAccountStateContainer #agentProfileContainer{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#headerAccountStateContainer #agentProfileContainer.show{display:-ms-grid;display:grid;-ms-grid-columns:auto auto 1fr;grid-template-columns:auto auto 1fr}.agent-profile-detailed{-ms-grid-row:1;-ms-grid-column:3}#headerAccountState{padding:0 5px 0 14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-left:0;height:100%;box-sizing:border-box;line-height:60px}#shortMessage{font-weight:500}#chatContainerWrapper{position:absolute;bottom:78px;top:0;width:100%;background-color:white}#greetingsText{white-space:pre-wrap}#chatContainerWrapper.chat-ended{bottom:118px}.no-branding #chatContainerWrapper{bottom:48px}.form-opened #bottomContainer{bottom:0;z-index:1}#chatContainer{overflow:scroll;position:absolute;font-size:14px;color:#6c6c6c;min-width:270px;height:auto;overflow-x:hidden;top:0;bottom:0;width:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#fff #fff;-ms-overflow-style:-ms-autohiding-scrollbar}#chatContainer::-webkit-scrollbar,#formFieldsContainer::-webkit-scrollbar{width:7px}#chatContainer::-webkit-scrollbar-thumb,#formFieldsContainer::-webkit-scrollbar-thumb{-webkit-border-radius:3px;border-radius:3px;background:transparent}#tawkchat-maximized-wrapper:hover #chatContainer::-webkit-scrollbar-thumb,#formFieldsContainer:hover::-webkit-scrollbar-thumb{background:#aaa}#tawkchat-maximized-wrapper:hover #chatContainer,#tawkchat-maximized-wrapper:hover #formFieldsContainer{scrollbar-color:#aaa #fff}.uploadFailedNotifContainer,#maxFileNotificationContainer,#maxSizeNotificationContainer{color:black;background-color:white;border:1px solid #ddd;margin:5px 10px;padding:9px 10px 18px 10px;border-radius:6px;font-size:13px;position:relative}.uploadFailedNotifContainer{margin-bottom:25px}#maxFileNotificationContainer #maxFileNumberList,#maxSizeNotificationContainer #maxFileSizeList{margin:0;margin-top:10px;font-weight:600}#maxFileNotificationContainer #maxFileNumberList ul,#maxSizeNotificationContainer #maxFileSizeList ul{list-style:none}.uploadFailedNotifMessage,#maxFileNotificationMessage,#maxSizeNotificationMessage{margin-top:13px}.uploadFailedNotifIconContainer,#maxFileNotifIconContainer,#maxSizeNotifIconContainer{height:30px;width:30px;background-color:#e52f48;border-radius:5px;display:inline-block;position:relative;text-align:center;vertical-align:middle;line-height:30px}.uploadFailedNotifIconWrapper,#maxFileNotifIconWrapper,#maxSizeNotifIconWrapper{height:0;width:0;border-width:0 10px 17px 10px;border-style:solid;border-color:transparent transparent white transparent;display:inline-block;position:absolute;left:50%;top:50%;-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uploadFailedSizeNotifIcon,#maxFileNotifIcon,#maxSizeNotifIcon{color:#e52f48;font-weight:900;font-size:11px;display:inline-block;z-index:9999;position:relative;padding-top:2px}.uploadFailedNotifLabel,#maxFileNotifLabel,#maxSizeNotifLabel{display:inline-block;line-height:30px;vertical-align:top;margin-left:10px;font-weight:600}.uploadFailedRetryContainer{position:absolute;bottom:-18px;right:2px}.rtl-direction .uploadFailedRetryContainer{right:auto;left:2px}.uploadFailedRetryContainer a{font-size:12px;color:#e52f48;font-weight:600}.closeButtonContainer{margin:5px auto auto auto;display:inline-block;float:right;font-size:18px;cursor:pointer}.closeNotification{cursor:pointer;text-transform:uppercase}#maxFileSizeList,#maxFileNumberList{margin:10px}#maxFileSizeList li,#maxFileNumberList li{word-wrap:break-word}#maxFileSizeList a,#maxFileNumberList a{color:#00E}#maxFileNumberList a{display:none}#chatContainer .hidden{display:none}.actionRetry{cursor:pointer;float:right}#actionsContainer{z-index:99998;background-color:#fff;border-top:2px solid #e1e1e1;position:absolute;bottom:0;width:100%;height:46px}#status-message{font-weight:bold;font-style:normal}#resizeBox{width:52px;height:52px;position:absolute;top:0;background-color:#000;z-index:5}body.right #resizeBox{left:0;float:left;-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px}body.left #resizeBox{right:0;float:right;-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px}#resizeInnerBox{background-color:#fefefe;width:47px;height:47px}body.right #resizeInnerBox{-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px;margin:5px 0 0 5px}body.left #resizeInnerBox{-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px;margin:5px 5px 0 0}#pluginsBar{height:23px;background-color:#c2c2c2;min-width:278px}#rateMainWrapper{float:left;position:relative}#ratePositive{background-position:-145px 0}#rateNegative{background-position:-126px 0}#rateNegative:hover,#rateNegative.selected{background-position:-183px 0}#rateNegative:hover,#ratePositive:hover{transform:scale(1.2,1.2)}.activeSound{background-position:0 0;background-repeat:no-repeat}.disabledSound{background-position:-21px 0;background-repeat:no-repeat}#textareaWrapper{display:block;background-color:#fff;position:relative;height:100%;z-index:2}#textareaContainer{height:100%;padding:16px 14px 13px 14px;box-sizing:border-box}#textareaContainer.with-emoji{padding-right:44px;padding-left:14px}.rtl-direction #textareaContainer.with-emoji{padding-left:44px;padding-right:14px}#chatTextarea{padding:0;margin:0;height:100%;width:100%;overflow:hidden;resize:none;border:0;font-size:14px !important;background-color:#fff;color:#000;font-family:inherit}#chatTextarea:active,#chatTextarea:focus{outline:0}#textareaContainer textarea::-webkit-input-placeholder{color:#bdbdbd}#textareaContainer textarea::-moz-placeholder{color:#bdbdbd}#textareaContainer textarea:-ms-input-placeholder{color:#bdbdbd}#chatTextarea::placeholder{color:#bdbdbd !important}#greetingsContainer{margin:7px 45px 0 45px;margin:14px 0;padding:10px 15px;text-align:center;white-space:pre-wrap;word-wrap:break-word;color:black;font-weight:400;margin-top:0}#greetingsText a{color:inherit}#greetingsWaitTime{margin:14px 0 0;display:none}#formContainer #greetingsContainer{margin:0 !important}#agentBar.expanded{height:auto;overflow-y:auto;display:block;max-height:153px}#agentList{position:absolute;left:50%;top:0;-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap;overflow-x:hidden;max-width:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#agentList::-webkit-scrollbar{display:none}#agentList .agentWrapper{border-radius:0;min-width:0;display:inline-block;margin:10px 10px;text-align:center;flex-grow:1}#profileDetail .agentContainer{margin-left:50px}.agentContainer{height:50px}.rtl-direction #profileDetail .agentContainer{margin-right:50px;margin-left:0}#agentBar .agentContainer{height:auto;width:100%;margin-top:5px}.agentContainerNoImage{height:45px}.agentWrapper{width:100%;min-width:280px;clear:both;position:relative;-webkit-border-top-left-radius:10px;-webkit-border-top-right-radius:10px;-moz-border-radius-topleft:10px;-moz-border-radius-topright:10px;border-top-left-radius:10px;border-top-right-radius:10px}#headerBox .agentInformationContainer{padding:10px 0}.rtl-direction #agentBar .agentInformationContainer{margin-right:auto;margin-left:auto}.rtl-direction #agentBar .agentContainer{clear:both}.agentInformationContainerNoImage{padding-top:13px;padding-bottom:13px;font-size:16px}.agentInformationContainer{font-size:14px}.position-label{font-size:12px}.agentNameCentered{font-weight:400;font-size:16px;text-transform:capitalize;margin-top:5px}.rtl-direction .noImageAgentProfileDetail{padding:0 5px 0 0}.agentInformationContainer p{white-space:nowrap;overflow:hidden;box-sizing:border-box;text-overflow:ellipsis}@-ms-keyframes profileShow{0%{-ms-transform:scale(0)}6.25%{-ms-transform:scale(0.1)}12.5%{-ms-transform:scale(0.2)}18.75%{-ms-transform:scale(0.3)}25%{-ms-transform:scale(0.4)}31.25%{-ms-transform:scale(0.5)}37.5%{-ms-transform:scale(0.6)}43.75%{-ms-transform:scale(0.7)}50%{-ms-transform:scale(0.8)}56.25%{-ms-transform:scale(0.9)}62.5%{-ms-transform:scale(1)}68.75%{-ms-transform:scale(1.1)}75%{-ms-transform:scale(1.2)}81.25%{-ms-transform:scale(1.3)}87.5%{-ms-transform:scale(1.2)}93.75%{-ms-transform:scale(1.1)}100%{-ms-transform:scale(1)}}@-webkit-keyframes profileShow{0%{-webkit-transform:scale(0)}6.25%{-webkit-transform:scale(0.1)}12.5%{-webkit-transform:scale(0.2)}18.75%{-webkit-transform:scale(0.3)}25%{-webkit-transform:scale(0.4)}31.25%{-webkit-transform:scale(0.5)}37.5%{-webkit-transform:scale(0.6)}43.75%{-webkit-transform:scale(0.7)}50%{-webkit-transform:scale(0.8)}56.25%{-webkit-transform:scale(0.9)}62.5%{-webkit-transform:scale(1)}68.75%{-webkit-transform:scale(1.1)}75%{-webkit-transform:scale(1.2)}81.25%{-webkit-transform:scale(1.3)}87.5%{-webkit-transform:scale(1.2)}93.75%{-webkit-transform:scale(1.1)}100%{-webkit-transform:scale(1)}}@-moz-keyframes profileShow{0%{-moz-transform:scale(0)}6.25%{-moz-transform:scale(0.1)}12.5%{-moz-transform:scale(0.2)}18.75%{-moz-transform:scale(0.3)}25%{-moz-transform:scale(0.4)}31.25%{-moz-transform:scale(0.5)}37.5%{-moz-transform:scale(0.6)}43.75%{-moz-transform:scale(0.7)}50%{-moz-transform:scale(0.8)}56.25%{-moz-transform:scale(0.9)}62.5%{-moz-transform:scale(1)}68.75%{-moz-transform:scale(1.1)}75%{-moz-transform:scale(1.2)}81.25%{-moz-transform:scale(1.3)}87.5%{-moz-transform:scale(1.2)}93.75%{-moz-transform:scale(1.1)}100%{-moz-transform:scale(1)}}@-o-keyframes profileShow{0%{-o-transform:scale(0)}6.25%{-o-transform:scale(0.1)}12.5%{-o-transform:scale(0.2)}18.75%{-o-transform:scale(0.3)}25%{-o-transform:scale(0.4)}31.25%{-o-transform:scale(0.5)}37.5%{-o-transform:scale(0.6)}43.75%{-o-transform:scale(0.7)}50%{-o-transform:scale(0.8)}56.25%{-o-transform:scale(0.9)}62.5%{-o-transform:scale(1)}68.75%{-o-transform:scale(1.1)}75%{-o-transform:scale(1.2)}81.25%{-o-transform:scale(1.3)}87.5%{-o-transform:scale(1.2)}93.75%{-o-transform:scale(1.1)}100%{-o-transform:scale(1)}}@keyframes profileShow{0%{transform:scale(0)}6.25%{transform:scale(0.1)}12.5%{transform:scale(0.2)}18.75%{transform:scale(0.3)}25%{transform:scale(0.4)}31.25%{transform:scale(0.5)}37.5%{transform:scale(0.6)}43.75%{transform:scale(0.7)}50%{transform:scale(0.8)}56.25%{transform:scale(0.9)}62.5%{transform:scale(1)}68.75%{transform:scale(1.1)}75%{transform:scale(1.2)}81.25%{transform:scale(1.3)}87.5%{transform:scale(1.2)}93.75%{transform:scale(1.1)}100%{transform:scale(1)}}#agentBar .alias-image,#headerBox .alias-image{width:40px;height:40px;margin:0;background-repeat:no-repeat;border-radius:50%;margin:5px 0;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:40px 40px;float:left;margin-left:-100%;animation:fadeIn 1s;-webkit-animation:fadeIn 1s;-moz-animation:fadeIn 1s;-o-animation:fadeIn 1s}#headerBox .alias-image{width:30px;height:30px;position:relative;margin-left:-10px;display:inline-block;margin-top:14px;box-shadow:0 0 0 1px #eee;background-size:30px 30px}#agentBar .alias-image{float:none;margin:0 auto;width:53px;height:53px;background-size:53px 53px}.agentChatContainer .messageBody{margin:-12px 0 0 0;max-width:calc(100% - 30px)}.rtl-direction .agentChatContainer .messageBody{float:right;margin:-12px 00px 0 0;padding-right:40px}.agentChatContainer .message{background:#eee;color:#333;margin-left:0;padding:5px 10px;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.1)}.ie9.rtl-direction .agentChatContainer .message{border-radius:0 15px 15px 15px !important}.agentChatContainer .messageStatusContainer{margin-left:-40px;position:absolute;top:5px;left:100%}.rtl-direction .agentChatContainer .messageStatusContainer{margin:0 -40px 0 0;left:auto;right:100%}.messageContainer.agentChatContainer{margin:15px 40px 12px 11px}.rtl-direction .messageContainer.agentChatContainer{margin:30px 8px 10px 23px}.messageContainer.visitorChatContainer{margin:15px 15px 12px 74px}.rtl-direction .messageContainer.visitorChatContainer{margin:10px 0 10px 12px}.visitorChatContainer .messageBody{margin:0;float:right;max-width:100%;min-height:62px}.rtl-direction .visitorChatContainer .messageBody{float:left}.visitorChatContainer .messageWrapper .message{color:#333;text-align:left;background:#e5e5e5}.rtl-direction .visitorChatContainer .messageWrapper .message{text-align:left;margin:0 30px 0 0;border-radius:0 15px 15px 15px;border-radius:3px}.ie9.rtl-direction .visitorChatContainer .messageWrapper .message{border-radius:15px 0 15px 15px !important;border-radius:3px}.message.agentTypingIndicator,.messageContainer .messageWrapper .message{position:relative}.message.agentTypingIndicator::after,.message.agentTypingIndicator::before,.upload-data::after,.upload-data::before,.messageContainer .messageWrapper .message::after,.messageContainer .messageWrapper .message::before{content:'';display:block;position:absolute;width:0;height:0;border-style:solid;top:6px;border-width:7px}.message.agentTypingIndicator::after,.message.agentTypingIndicator::before,.messageContainer.agentChatContainer .messageWrapper .message::after,.messageContainer.agentChatContainer .messageWrapper .message::before{right:100%}.message.agentTypingIndicator::before,.messageContainer.agentChatContainer .messageWrapper .message::before{border-color:transparent #f9f9f9 transparent transparent;border-width:7px;top:6px}.upload-data::after,.upload-data::before,.messageContainer.visitorChatContainer .messageWrapper .message::after,.messageContainer.visitorChatContainer .messageWrapper .message::before{left:100%}.upload-data::before,.messageContainer.visitorChatContainer .messageWrapper .message::before{border-color:transparent transparent transparent #f9f9f9;border-width:7px;top:5px}.message.agentTypingIndicator::after,.messageContainer.agentChatContainer .messageWrapper .message::after{top:7px;border-width:6px}.upload-data::after,.messageContainer.visitorChatContainer .messageWrapper .message::after{top:6px;border-width:6px}.visitorChatContainer .messageStatusContainer.errorInMessage{width:100%;position:relative;right:auto;text-align:right;font-size:12px;color:#ec6368;font-weight:600;line-height:1;top:3px;float:right}.visitorChatContainer .messageStatusContainer.errorInMessage a{float:right;display:inline-block;font-size:12px;text-decoration:underline;color:#ec6368;width:auto;background:0;text-align:right;top:0;margin:0 0 0 15px;font-weight:900}.messageStatusContainer.pending .failed-label,.messageStatusContainer.pending .icon-alert{display:none}.time-div{visibility:hidden}.mobile .time-div{visibility:visible}.one-agent .agent-div.agent{display:none}.messageBody:hover .time-div{visibility:visible}.rtl-direction .visitorChatContainer .messageStatusContainer.errorInMessage a{float:left;text-align:left}.visitorChatContainer .messageStatusContainer{position:absolute;right:100%;top:0;left:auto}.rtl-direction .visitorChatContainer .messageStatusContainer.errorInMessage{left:auto;margin:0}.rtl-direction .visitorChatContainer .messageStatusContainer{right:auto;left:100%;margin:0 0 0 -40px}.messageHead{position:absolute;z-index:10001}.messageHeadLine{position:relative;top:10px;z-index:1}.messageContainer .messageHead .messageTitle{text-align:center;width:100%}.messageBody{line-height:1.5em;margin:5px 0 0 42px;float:left;position:relative}.notification{margin-left:0;width:100%}.ownerNameContainer,.notificationContainer{float:left}.rtl-direction .notificationContainer{direction:rtl !important;float:right}.notificationContainer .message{margin-right:40px;font-size:14px !important;font-style:italic}.rtl-direction .notificationContainer .message{margin:0 0 0 40px}.message{white-space:pre-wrap;word-wrap:break-word}.messageContainer .messageHead.agent .messageTime,.notificationTime{color:#b3b3b3}.messageContainer .chat-agent-name{position:absolute;bottom:-18px;left:40px;font-size:11px}.rtl-direction .messageContainer .chat-agent-name{left:auto;right:40px}.notificationTime{width:40px;float:left;margin-left:-40px;text-align:right;font-size:12px !important}.rtl-direction .notificationTime{float:right;margin:0 -40px 0 0;text-align:left}.messageStatusContainer{position:relative;z-index:2;width:40px}.messageTime{padding:0 2px 0 8px;font-size:11px !important;color:#777;display:none}.rtl-direction .messageTime{padding:0 8px 0 2px}.messageTime.visitor{padding:0 8px 0 2px}.messageTime.agent,.messageTime.visitor{display:inline-block;margin:0;padding:0;line-height:1;top:auto;bottom:auto;vertical-align:bottom}.rtl-direction .messageTime.visitor{padding:0 2px 0 8px}.messageWrapper{background:0;position:relative;width:auto}.rtl-direction .messageWrapper{float:right;max-width:100%}.messageStatus:active,.messageStatus:focus{outline:0}.messageStatusContainer.pending .lds-spinner{transform:scale(0.3);margin-left:-5px;margin-top:-25%}.messageWrapper.pending{font-style:italic}.messageWrapper.error{font-style:italic;color:red;cursor:pointer;float:right;width:auto;max-width:100%}.rtl-direction .messageWrapper.error{max-width:100%;float:left}.messageWrapper.error .message{background-color:#ec6368 !important;color:#fff !important}.messageWrapper .message{font-size:14px !important;padding:10px 13px;font-weight:400;border-radius:5px;box-shadow:0 0 1px 0 rgba(0,0,0,0.1)}.messageTitle span{text-transform:uppercase;font-weight:bold;padding:0 10px;color:#ccc;background-color:#fff;z-index:1;position:relative}#formContainer::-webkit-scrollbar{display:none}.formMessageField{padding:10px 20px;line-height:1.2em;color:#616161;font-size:15px;text-align:left;word-wrap:break-word}.form{font-size:13px;color:#a1a1a1;height:auto;position:absolute;top:0;bottom:30px;left:6px;right:6px;overflow:hidden;max-width:400px;margin:0 auto;width:calc(100% - 16px)}.rtl-direction .form{left:0;right:6px}#changeNameForm.form,#emailTranscriptForm.form,#endChatForm.form{max-width:284px}.no-branding .form{bottom:14px}.form::-webkit-scrollbar{display:none}.form fieldset{padding:0}.form textarea{resize:none;display:block;height:40px;width:100%;overflow:auto;padding:0 15px;color:#707070;font-size:13px;font-weight:bold;border:0;background-color:#fff;margin:13px 0;-webkit-appearance:none}.form textarea:active,.form textarea:focus,.inputContainer select:active,.inputContainer select:focus{outline:0}.inputContainer{padding:0 15px;border:1px solid #ccc;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background-color:#fff;margin:0 0 7px 0;position:relative}.inputContainer input,.inputContainer select{width:100%;margin:0;border:0;display:block;line-height:1.2em;padding:10px 0;color:#707070;font-size:13px;font-weight:bold;font-family:inherit;-webkit-appearance:none}.inputContainer input{padding:11px 0}.inputContainer.other-fix{padding:0}.inputContainer select{background-color:#fff;outline:0}#departmentFieldFieldset.safari-fix .inputContainer{position:relative}#departmentFieldFieldset.safari-fix .inputContainer:after{position:absolute;right:24px;top:12px;cursor:pointer;width:10px;height:10px;font-size:10px;padding:0;background:#fff;color:#000;content:'\u25bc';pointer-events:none;cursor:pointer}.inputContainer.error,.form .textareaFieldset.error{border-color:#ef5656;color:#ef5656;margin-bottom:0 !important}.inputContainer.error input,.form .textareaFieldset.error textarea,.inputContainer.error select,.error .form-field-label{color:#ef5656;padding-right:30px}.inputContainer.error input::-webkit-input-placeholder,.form .textareaFieldset.error textarea::-webkit-input-placeholder{color:#ef5656}.inputContainer.valid,.form .textareaFieldset.valid{border-color:#92ed9d}.inputContainer.valid{padding-right:30px}.inputContainer.selection.valid{padding:0}.inputContainer input:active,.inputContainer input:focus{margin:0;border:0;outline:0}.inputContainer input:active+.form-field-label,.inputContainer input:focus+.form-field-label,.textareaFieldset textarea:active+.form-field-label,.textareaFieldset textarea:focus+.form-field-label{display:block}.inputContainer input:active::-webkit-input-placeholder,.inputContainer input:focus::-webkit-input-placeholder,.textareaFieldset textarea:active::-webkit-input-placeholder,.textareaFieldset textarea:focus::-webkit-input-placeholder{color:transparent !important}.inputContainer input:focus::-moz-placeholder,.inputContainer input:active::-moz-placeholder,.textareaFieldset textarea:focus::-moz-placeholder,.textareaFieldset textarea:active::-moz-placeholder{color:transparent !important;opacity:0 !important}.formErrorContainer{display:none;margin:0 0 7px 15px;color:#e52f48}.formErrorIcon{display:none;position:absolute;top:50%;right:10px;-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);white-space:nowrap}.form-icon{color:white;font-weight:900;position:absolute;right:-2.5px;font-size:11px;top:1.5px}.rtl-direction .formErrorContainer{margin:0 15px 7px 0}.rtl-direction #preChatForm .formErrorContainer,.rtl-direction #offlineForm .formErrorContainer{margin:-6px 0 7px 15px}#formSavingStatus.errorMessage{color:#ef5656;border:0;visibility:visible}#formSavingStatus{font-size:13px;visibility:hidden;margin:0 auto;max-width:260px}#formSavingStatus img{margin:0 0 0 5px}.formButtonContainer{margin:20px 0 0 0}button{display:inline;zoom:1;vertical-align:baseline;outline:0 none;cursor:pointer;text-align:center;text-decoration:none;overflow:visible;margin:0;padding:7px 15px 8px 15px;font-family:inherit;background-color:#c1c1c1;color:#3d3d3d;border:0;float:left;font-weight:bold;font-size:14px}button::-moz-focus-inner{border:0}button:focus{outline:0}button:active{background-color:#ddd}button:hover{background-color:#a9a9a9}.formButton{width:100%;height:50px}#agentTypingContainer .messageBody{font-size:16px !important;font-weight:bold;min-width:auto;line-height:normal}#offlineOverlay,#inactivityOverlay,#maintenanceOverlay{text-align:center;margin-top:100px;font-size:40px;font-weight:bold;height:auto}#formInnerHeight{margin:0 auto}#tawktoLink{color:#4f4f4f;font-size:12px;font-weight:400;text-decoration:none;padding:5px}#tawktoLink:hover{background:#eee;border-radius:3px}#tawktoLink .emojione{margin-left:-5px;margin-right:-5px;height:3ex;width:auto;min-height:20px;min-width:20px;display:inline-block;vertical-align:middle}#tawktoLink b{font-weight:700}#bottomContainer{text-align:center;width:100%;position:absolute;bottom:48px;height:30px;background:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:30px}.headerBoxLink{width:30px;height:60px;margin:0;display:inline-block;position:relative;grid-row:1;text-decoration:none}#chatMenu{text-decoration:none}.headerBoxLink .headerBoxIcon{font-size:18px;margin:0 auto;display:block;width:18px;line-height:60px;vertical-align:middle}.headerBoxLink#faq{display:none}.headerBoxLink.active::before,#chatMenu.active::before{content:\"\";height:25px;width:25px;background-color:#00000030;position:absolute;border-radius:3px;top:17px;right:3px}#chatMenuControls{background-color:white;width:calc(100vw - 50px);max-width:200px;position:absolute;z-index:9999;border-radius:3px;top:45px;right:0;display:none;border:1px solid #e2e2e2;animation:slideDown .2s;-webkit-animation:slideDown .2s;-moz-animation:slideDown .2s;-o-animation:slideDown .2s}@keyframes slideDown{0%{transform:translateY(-2%)}50%{transform:translateY(-1%)}100%{transform:translateY(0%)}}@-webkit-keyframes slideDown{0%{-webkit-transform:translateY(-2%)}50%{-webkit-transform:translateY(-1%)}100%{-webkit-transform:translateY(0%)}}#chatMenuControls::after{content:\"\";width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white;position:absolute;top:-6px;right:8px}#chatMenuControlsOverlay{position:fixed;top:50px;left:0;height:calc(100vh - 50px);width:100vw}.rtl-direction #chatMenuControls{right:auto;left:0}.rtl-direction #chatMenuControls::after{right:auto;left:8px}#chatMenuControls ul{padding:0;margin:0;list-style:none;text-align:left;padding:10px;position:relative}#chatMenuControls li{padding:10px;cursor:pointer;font-size:14px;color:#434343}#chatMenuControls li:hover{background-color:#53ce3c;color:white;border-radius:3px}.rtl-direction #endChat{margin-right:5px}#endChat .icon{width:11px;height:11px;float:right;margin:2.5px}.black #endChat .icon{background-position:0 0}.white #endChat .icon{background-position:-63px 0}#minimizeChat .icon{width:11px;height:7px;margin:4.5px 2.5px}.black #minimizeChat .icon{background-position:-32px 0}.white #minimizeChat .icon{background-position:-95px 0}#popoutChat .icon{width:10px;height:10px;margin:3px}.isPopout #popoutChat{display:none}.black #popoutChat .icon{background-position:-48px 0}.white #popoutChat .icon{background-position:-111px 0}#openMenu{position:absolute;left:10px;bottom:0;color:#bdbdbd;font-size:13px;font-weight:700;text-decoration:none;line-height:28px;z-index:100001;cursor:pointer;text-transform:lowercase}.rtl-direction #openMenu{right:10px;left:auto}#options{height:32px;margin-left:110px;text-overflow:ellipsis}.rtl-direction #options{margin:0 110px 0 0}.profileImageContainer .agentProfileImage{background-position:0 0;width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:0;top:-9px}#tawkToContent{display:none;position:absolute;top:60px;bottom:0;width:100%;background:#fff;z-index:3}#tawkToContent #formFieldsContainer{left:8px;right:8px;margin:14px 0}#tawkToContent .formFrame{position:absolute;overflow:hidden;top:0;bottom:0;left:0;right:0;height:auto;width:auto}#tawkToContent .contentContainer{position:relative;height:100%;overflow:auto}#tawkToContent .buttonContainer{position:absolute;height:50px;bottom:0;width:100%}#tawkToContent .buttonContainer button{width:50%;height:50px}#tawkHeader{font-size:22px;font-weight:bold;text-align:center;padding:20px 0 12px 0;color:#343434;border-bottom:2px solid #ddd;width:150px;margin:0 auto}#tawkContent{font-size:15px;text-align:center;color:#6c6c6c;margin:12px 0 0}#tawkImage{background-image:url('https://static-v.tawk.to/a-v3/images/tawky.png');background-position:-235px 0;width:78px;height:83px;margin:0 auto}#cancelTawkRedirect{float:left}#tawkRedirect{float:right}#optionsContainer{position:absolute;left:0;width:155px;bottom:0;z-index:1000001;padding:3px;text-align:left}.rtl-direction #optionsContainer{left:auto;right:0}#optionsContainer .item{padding:0 3px;color:#696969;cursor:pointer;font-size:12px;font-weight:bold;line-height:30px;display:inline-block;vertical-align:middle;position:relative;height:30px}.rtl-direction #optionsContainer .item{float:right}#optionsContainer .tooltip{position:absolute;top:0;left:0;background:#333;color:#fff;padding:2px;-ms-transform:translate(-50%,-100%);-webkit-transform:translate(-50%,-100%);-moz-transform:translate(-50%,-100%);-o-transform:translate(-50%,-100%);transform:translate(-50%,-100%);min-width:100px;border-radius:3px;display:none;line-height:20px;position:absolute;left:50%;text-align:center}#soundOption .tooltip{left:0;-ms-transform:translate(0%,-100%);-webkit-transform:translate(0%,-100%);-moz-transform:translate(0%,-100%);-o-transform:translate(0%,-100%);transform:translate(0%,-100%)}#emailTranscriptOption .tooltip{left:-26px;-ms-transform:translate(0%,-100%);-webkit-transform:translate(0%,-100%);-moz-transform:translate(0%,-100%);-o-transform:translate(0%,-100%);transform:translate(0%,-100%)}#optionsContainer .item:hover .tooltip{display:block}#emailTranscriptForm .inputContainer,#changeNameForm .inputContainer,#endChatForm .inputContainer{border:0;margin:0}#offlineForm #messageField{height:85px}#offlineFormContainer.success #offlineForm #overlayOfflineForm{display:block}#overlayOfflineForm{position:absolute;top:50%;-ms-transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-o-transform:translate(0%,-50%);transform:translate(0%,-50%);bottom:0;left:0;right:0;display:none;z-index:1;background-color:#fff;color:#000;text-align:center;padding:20px 15px;font-size:15px}#overlayOfflineForm #resendButton{margin-top:15px;padding:7px 12px;width:100%;font-weight:700;cursor:pointer;height:40px}#overlayOfflineForm p{font-size:17px}.innerTittle{margin:0;padding:15px 0;text-align:left;font-size:14px}.rtl-direction #formInnerHeight .innerTittle{text-align:right}.rtl-direction #emailTranscriptFormMessageContainer,.rtl-direction #changeNameFormMessageContainer{text-align:right}.rtl-direction .longFormBottomContainer #formCancel,.rtl-direction .longFormBottomContainer #formDecline{float:right;margin-left:6px;order:1}.rtl-direction .longFormBottomContainer #newChat{float:right;margin-left:6px}.rtl-direction .longFormBottomContainer #formSubmit{float:right;order:2}#submitWrapper{position:absolute;bottom:0;height:0;width:auto;right:16px;background:#000;border-radius:4px 4px 0 0;color:#fff;-webkit-transition:height .25s ease;-moz-transition:height .25s ease;-ms-transition:height .25s ease;-o-transition:height .25s ease;transition:height .25s ease;z-index:5}#submitWrapper.visible{height:30px}#submitWrapper p{line-height:30px;padding:0 10px;float:left}.rtl-direction #submitWrapper p{float:right}#submitWrapper .loader{transform:scale(0.3);margin-top:-17px;margin-left:-13px;margin-right:-13px}#submitWrapper .spin:after{background:#fff !important}#agentProfileContainer{width:100%;margin-left:10px;display:none}#agentProfileContainer.show{display:block;animation:fadeIn 1s;-webkit-animation:fadeIn 1s;-moz-animation:fadeIn 1s;-o-animation:fadeIn 1s}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}#profileDetail{height:50px;position:static;width:100%;float:left}#profileDetailNoImage{height:45px;position:static;margin-left:0}#agentWrapper{height:0;display:none;float:left;width:100%;height:45px}.messageStatusContainer.pending .messageTime{display:none}#chatEnded{position:absolute;left:0;bottom:32px;height:87px;width:100%;background:#fff;display:none;z-index:10}#chatEnded .title{text-align:center;font-size:14px;margin:10px 0}#chatEnded .buttonContainer{width:100%;height:50px}#offlineButtonContainer,#prechatButtonContainer{top:auto}#newMessageDivider{margin-top:4px;font-size:.7rem;line-height:.6rem}#newMessageDividerLine{border-top:2px solid #e4c0b6;border-bottom:0;margin:0 0 -1px}#newMessageDividerLabel{background:#fcfcfc;margin:-0.3rem 0;float:right;padding:0 .5rem;color:#e4c0b6}.offlineMessageSuccess{color:#6db626}#newMessageContainer{position:relative;left:-50%;cursor:pointer;display:none}#newMessagesBar{position:absolute;bottom:33px;height:0;width:auto;left:50%;color:#fff;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;visibility:hidden;cursor:pointer;z-index:0}#newMessagesBar.theme-background-color{background-color:transparent !important}#notificationMessageText{font-weight:700}#newMessageArrowDown{width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #81bd1d;transform:translate(-50%);position:absolute;left:50%;bottom:-5px}#newMessagesNotificationLink{float:left;margin:6px 6px auto auto;font-weight:bold}.rtl-direction #newMessagesNotificationLink{float:right;-ms-transform:rotateY(180deg);-webkit-transform:rotateY(180deg);transform:rotateY(180deg);margin:7px auto auto 7px}#newMessagesBar.visible{height:27px;bottom:90px;visibility:visible}#newMessagesBar.visible #newMessageContainer{display:block}#newMessagesBar p{line-height:27px;padding:0 10px;text-align:center;background-color:#81bd1d;border-radius:5px}.uploaded-image{max-width:100%;max-height:220px;display:block}.download-file{color:inherit;text-decoration:underline;display:block;margin-top:3px}.progress{height:14px;position:relative;background:#eee;box-shadow:0 1px 0 transparent,0 0 0 1px #e3e3e3 inset;width:200px;margin:5px 0;display:inline-block;vertical-align:middle}.progress-bar{display:block;height:100%;background-color:#71a06a;box-shadow:inset 0 2px 9px rgba(255,255,255,0.3),inset 0 -2px 6px rgba(0,0,0,0.4);position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.upload-data{margin:7px 12px 0 20px;min-width:250px}.upload-data span{font-style:italic}#uploadFileIcon{font-size:18px;vertical-align:middle;width:20px;height:21px;margin-top:5px}.image-loader{display:block;position:relative;width:64px;height:64px;margin:0 auto}.upload-error{margin:5px}.upload-error span{font-size:16px;color:red;font-weight:bold;vertical-align:middle}.drag-over #textareaWrapper:before{text-align:center;margin:0;font-size:25px;height:auto;line-height:68px;color:#ccc;background:#fff;position:absolute;top:0;bottom:0;right:0;left:0;border:3px dashed #ccc;content:'';white-space:pre-line}#drop-text{text-align:center;font-size:25px;height:auto;color:#ccc;position:absolute;top:2px;bottom:2px;right:2px;left:2px;white-space:pre-line;display:none}.drag-over #drop-text{display:block}#drop-text span{display:block;vertical-align:middle;line-height:normal;top:50%;margin-top:-15px;position:relative}.drag-over .drop-text{display:block}.drag-over #chatTextarea{opacity:0}#upload-form{position:absolute;top:-100000px}#uploadFileOption label{display:block;cursor:pointer}.form-field-label.small{color:#b3b3b3;padding:1px 0 0 0;display:none;font-size:10px;position:absolute;top:0;left:4px;font-weight:bold}.rtl-direction .form-field-label.small{left:auto;right:4px}.form-field-label{color:#707070;font-size:13px;font-weight:bold}.selection-label{vertical-align:middle;cursor:pointer}.selection-container{position:relative}.selections-container.error{border:2px solid #e52f48;border-radius:3px;padding:11px 0 11px 11px;position:relative}.agentInfoNoImage{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.messageContainer{position:relative;margin:10px 12px}#agentTypingContainer{position:relative;margin:24px 12px;display:none}.messageContainer{clear:both}.profileImageContainer{height:28px;width:28px;position:absolute}.ownerNameContainer{float:right}.multi-agent .agentChatContainer .ownerNameContainer{float:left;width:100%;position:absolute;bottom:-13px;left:0}.messageOwnerName{color:#757575;font-weight:400;text-decoration:none;font-size:11px !important;margin:0;padding:0;line-height:1;display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-left:40px;vertical-align:bottom}.rtl-direction .messageOwnerName{margin-left:0;margin-right:30px}.messageOwnerName.visitor{text-align:right;margin-right:0;margin-left:0;margin-bottom:3px}.messageOwnerName.agent{display:none}.multi-agent .messageOwnerName.agent{display:inline-block}.rtl-direction .messageOwnerName.visitor{text-align:left}#chatTableWrapper{display:table;height:100%;width:100%;table-layout:fixed}#chatRowWrapper{display:table-row;vertical-align:bottom}#chatCellWrapper{position:relative;display:table-cell;vertical-align:bottom;overflow:hidden}.single-agent .profileImageContainer{display:block;margin-top:8px}.rtl-direction .single-agent .profileImageContainer{margin-top:-3px}.single-agent .agentChatContainer .ownerNameContainer.trigger{display:block}.ownerNameContainer.trigger .messageOwnerName{margin-left:0;margin-right:0}.multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-left:30px;margin-right:0}.rtl-direction .multi-agent .agentChatContainer .message{margin-right:30px;margin-left:40px}.rtl-direction .multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-right:30px;margin-left:0}.single-agent .visitorChatContainer .messageBody,.single-agent .messageOwnerName.visitor{margin-right:0;margin-left:0}.agentChatContainer .messageBody,.agentChatContainer .ownerNameContainer{margin-left:0;margin-right:0;margin-top:0}.agentChatContainer .messageBody{padding-left:38px}.visitorChatContainer .pending .message,.rtl-direction .agentChatContainer .message{animation:slideFromRight .1s;-webkit-animation:slideFromRight .1s;-moz-animation:slideFromRight .1s;-o-animation:slideFromRight .1s;max-width:229px}.visitorChatContainer[style] .message{animation:none}.agentChatContainer .message,.visitorChatContainer .pending .message{animation:slideFromLeft .1s;-webkit-animation:slideFromLeft .1s;-moz-animation:slideFromLeft .1s;-o-animation:slideFromLeft .1s}.agentChatContainer .message.agentTypingIndicator{animation:none;padding-top:20px}@keyframes slideFromLeft{0%{margin-left:-50px;opacity:0}100%{margin-left:0;opacity:1}}@-webkit-keyframes slideFromLeft{0%{margin-left:-50px;opacity:0}100%{margin-left:0;opacity:1}}@keyframes slideFromRight{0%{margin-right:-100px;opacity:0}100%{margin-right:0;opacity:1}}@-webkit-keyframes slideFromRight{0%{margin-right:-100px;opacity:0}100%{margin-right:0;opacity:1}}#agentTypingContainer .agentChatContainer{margin-bottom:5px}.has-profile-image #headerBoxWrapper,.has-profile-image #headerBox,.has-profile-image #agentWrapper,.has-profile-image #headerBoxControlsContainer{height:60px}.has-profile-image #agentListLabel{margin-top:17px}.selection-container input{margin:0 3px 0 5px}.agentTypingIndicator{position:relative;text-align:center;margin-left:auto;margin-right:auto}.agentTypingIndicator .dot{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:3px;background:#303131;animation:typing 1.3s linear infinite}.agentTypingIndicator .dot:nth-child(2){animation-delay:-1.1s;-webkit-animation-delay:-1.1s;-moz-animation-delay:-1.1s;-ms-animation-delay:-1.1s;-o-animation-delay:-1.1s}.agentTypingIndicator .dot:nth-child(3){animation-delay:-0.9s;-webkit-animation-delay:-0.9s;-moz-animation-delay:-0.9s;-ms-animation-delay:-0.9s;-o-animation-delay:-0.9s}@keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-ms-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-webkit-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-moz-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-o-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}.message a{color:inherit}#formContainer .inputContainer.selection:before{content:\"\";position:absolute;right:14px;top:17px;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #707070;z-index:0}.rtl-direction #formContainer .inputContainer.selection:before{right:auto;left:14px}#formContainer .inputContainer{background-color:#fff;overflow:hidden;position:relative;height:33px}#formContainer .inputContainer select{position:absolute;height:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:90%;background:transparent;font-size:13px;font-weight:600;line-height:1;-webkit-appearance:none;-moz-appearance:none;text-indent:.01px;text-overflow:'';-ms-appearance:none}#formContainer .inputContainer select::-ms-expand{display:none}#endChatOption{display:none}#actionButtonsContainer{position:absolute;right:14px;top:11px}.rtl-direction #actionButtonsContainer{left:0;right:auto}#rateContainer{padding:6px 8px;border-radius:5px;box-shadow:0 3px 15px #cbcbcb;display:none;position:absolute;width:50px;background:#fff;left:-100%;top:-8px;animation:fadeIn .5s;-webkit-animation:fadeIn .5s;-moz-animation:fadeIn .5s;-o-animation:fadeIn .5s}.rtl-direction #rateContainer{left:5px}.rtl-direction #rateNegative{float:right;margin-left:11px !important}.rtl-direction #ratePositive{float:right;margin-left:0}#actionButtonsContainer a{font-size:19px;color:#bdbdbd;text-decoration:none;float:left;margin-left:11px}#actionButtonsContainer a:hover{color:#464646}#rateNegative{margin-left:0 !important;color:#f99 !important}#ratePositive{color:#b4deab !important}#uploadFileOption{margin-left:6px}#viewEmoji{margin-left:12px}.drag-over #viewEmoji{display:none}#emoji-selection-container{position:absolute;bottom:48px;height:185px;background:#f0f0f0;display:none;z-index:2;width:100%;background-color:#f3f3f3}.header-title{text-align:center;margin:5px 0;font-weight:bold;font-size:14px}#tooLongMsgNotification{position:absolute;bottom:20px;z-index:100000;width:100%;text-align:center;display:none;color:red;font-size:12px;background-color:white}#tooLongMsgNotification.visible{display:block}.chatNotifInfoContainer,.callInfoContainer,.callErrorContainer{border:1px solid #ddd;border-radius:5px;padding:10px 8px 10px 8px;display:none;background:#fff}.chatNotifInfoContainer{display:block}.chatNotifIconContainer,.callIconContainer{display:table-cell;width:35px;vertical-align:middle}.chatNotifIconWrapper,.callIconWrapper{width:35px;height:35px;border-radius:50%;vertical-align:middle;display:inline-block}.callDetailsContainer{display:table-cell;vertical-align:middle;padding-left:5px}.rtl-direction .callDetailsContainer{padding-right:5px}.chatNotifDetailsContainer{display:inline-block;vertical-align:middle;margin-left:5px}.chatNotifTitle,.callTitle{font-size:15px;font-weight:bold;color:black}.callEndDetails{display:none;margin-top:5px;color:black}.callEndDetails,.callTitle{color:#3e3e3e}.callErrorContainer .callEndDetails{display:block}.callInfoWrapper{display:table}.callRetryContainer{display:inline-block;position:absolute;right:10px;top:50%;transform:translateY(-50%)}.callLoader .loader{transform:scale(0.3);margin-left:-10px}.rtl-direction .callRetryContainer{right:auto;left:10px}.retry-load{float:none;background:#fafafa;color:#717171;border:1px solid #d3d3d3}#chatEnded{width:100%;height:auto}.longFormContainer{position:relative;display:block;background-color:white;width:100%;z-index:4;margin:0 auto;box-sizing:border-box;border-radius:3px;font-weight:400;font-size:15px;color:#464646;overflow:hidden;height:auto}.rtl-direction #formContainer>#emailTranscriptForm .form-header-text,.rtl-direction #changeNameForm .form-header-text,.rtl-direction #chatEndedForm .form-header-text,.rtl-direction #offlineForm .longFormContainer .form-header-text,.rtl-direction #preChatForm .longFormContainer .form-header-text{padding-right:5px}.rtl-direction #formContainer>#emailTranscriptForm .formMessageField,.rtl-direction #offlineForm .formMessageField,.rtl-direction #preChatForm .formMessageField{text-align:unset}#offlineFormContainer,#prechatFormContainer{height:calc(100% - 250px);display:none;position:relative}#chatEndedForm #emailTranscriptForm{position:relative;height:auto}#offlineForm #formInnerHeight,#preChatForm #formInnerHeight{max-width:100%}#form-container::-webkit-scrollbar,#form-container.longFormContainer::-webkit-scrollbar,#tawkToContent .contentContainer::-webkit-scrollbar{display:none}.form-header-icon{background-color:#53ce3c;display:inline-block;height:30px;width:30px;margin-right:10px;line-height:34px;border-radius:5px;box-sizing:border-box;color:white;font-size:22px;text-align:center}.rtl-direction .form-header-icon{margin-left:10px;margin-right:0}.form-header-text{display:inline-block;line-height:30px;height:30px;vertical-align:top;font-weight:600;font-size:15px}#endChatForm #endChatFormMessageContainer{display:block;font-weight:600;font-size:15px;height:auto;color:#464646;padding:0}#formContainer>#emailTranscriptForm::before,#changeNameForm::before,#chatEndedForm::before,#endChatForm::before{content:\"\";height:100%;width:2px;background-color:#4ac735;position:absolute;left:0;top:0;border:1px solid #53ce3c;border-top-left-radius:3px;border-bottom-left-radius:3px;z-index:9;display:none}#controlsWrapper{position:relative}#offlineForm .formMessageField,#preChatForm .formMessageField{padding:10px 15px;text-align:center;margin-bottom:14px;font-size:14px;-webkit-transition:height .16s ease-out;transition:height .16s ease-out}#formContainer .inputContainer{border:0;padding:0;border-radius:5px;margin:0 0 11px 0;height:42px}#formContainer .textareaFieldset>.inputContainer,#formContainer>#emailTranscriptForm input,#formContainer .inputContainer input,#formContainer .inputContainer select,#formContainer .inputContainer input{box-shadow:none;height:100%;border-style:solid;border-color:#d0d0d0;box-sizing:border-box;display:inline-block;padding-left:11px;width:100%;border-width:2px;color:#656565;font-weight:700;border-radius:5px;width:100%}.rtl-direction #offlineForm .textareaFieldset>.inputContainer,.rtl-direction #preChatForm .textareaFieldset>.inputContainer,.rtl-direction #formContainer>#emailTranscriptForm input,.rtl-direction #changeNameForm .inputContainer input,.rtl-direction #chatEndedForm .inputContainer select,.rtl-direction #chatEndedForm .inputContainer input,.rtl-direction #offlineForm .inputContainer select,.rtl-direction #offlineForm .inputContainer input,.rtl-direction #preChatForm .inputContainer select,.rtl-direction #preChatForm .inputContainer input{padding-left:5px;padding-right:11px}.rtl-direction #changeNameForm .formErrorIcon,.rtl-direction #emailTranscriptForm .formErrorIcon,.rtl-direction #offlineForm .formErrorIcon,.rtl-direction #preChatForm .formErrorIcon{left:15px;right:auto}.rtl-direction #offlineForm .selection-container .selection-input-css-placeholder,.rtl-direction #preChatForm .selection-container .selection-input-css-placeholder{left:auto;right:0}.rtl-direction #offlineForm .selection-label,.rtl-direction #preChatForm .selection-label{padding-right:27px}#offlineForm .textareaFieldset>.error.inputContainer,#preChatForm .textareaFieldset>.error.inputContainer,#chatEndedForm .inputContainer.error select,#offlineForm .inputContainer.error select,#preChatForm .inputContainer.error select,.error.inputContainer input{border-color:#e52f48 !important}.inputContainer.error textarea::placeholder{color:#e52f48 !important}#offlineForm .textareaFieldset>.inputContainer,#preChatForm .textareaFieldset>.inputContainer{height:70px;padding:11px 0 11px 11px}#offlineForm .textareaFieldset .inputContainer textarea,#preChatForm .textareaFieldset .inputContainer textarea{margin:0;padding:0;height:100%;padding-right:11px;box-sizing:border-box}#changeNameForm fieldset,#emailTranscriptForm fieldset,#offlineForm fieldset,#preChatForm fieldset{position:relative}#chatEndedForm .inputContainer select option:disabled,#offlineForm .inputContainer select option:disabled,#preChatForm .inputContainer select option:disabled{display:none}#chatEndedForm .inputContainer.error select,#offlineForm .inputContainer.error select,#preChatForm .inputContainer.error select{color:#ef5656}#chatEndedForm .inputContainer.error select option,#offlineForm .inputContainer.error select option,#preChatForm .inputContainer.error select option{color:#656565}.longFormBottomContainer{width:100%;float:none;box-sizing:border-box;min-height:42px;margin-bottom:15px;grid-template-columns:1fr 1fr;grid-gap:12px;display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr}.longFormBottomContainer .clear{grid-column:span 2;-ms-grid-column-span:2}.has-required .longFormBottomContainer{display:block}#formCancel,#formDecline{-ms-grid-row:1;-ms-grid-column:1}#formSubmit{-ms-grid-row:1;-ms-grid-column:2}.formButton{height:100%;border-radius:5px;background-color:#d6d6d6;min-height:42px}#formSubmit-pc,#formSubmit{float:right}#changeNameForm .formErrorContainer,#emailTranscriptForm .formErrorContainer,#offlineForm .formErrorContainer,#preChatForm .formErrorContainer{margin:7px 0;text-align:right;font-size:13px;font-weight:600}#formContainer>#emailTranscriptForm #emailTranscriptFormMessageContainer,#changeNameForm #changeNameFormMessageContainer,#chatEndedForm #emailTranscriptFormMessageContainer{background-color:white;padding:15px 0}#formContainer>#emailTranscriptForm #formSavingStatus,#changeNameForm #formSavingStatus,#endChatForm #formSavingStatus,#chatEndedForm #formSavingStatus{display:none}#chatEndedForm #submitWrapper{bottom:32px;right:5px;display:none}#chatEndedForm #form-header{padding-top:12px}#changeNameForm #nameFieldError,#emailTranscriptForm #transcriptEmailFieldError,#chatEndedForm #transcriptEmailFieldError{color:#ef5656;font-size:13px}#circle-progress-bar-border{height:34px;width:34px;display:inline-block;padding:7px;border-radius:3px;border-width:1px;border-style:solid;border-color:#f4f4f4 !important;background:#fff}#circle-progress-bar-container{height:100%;width:100%;display:inline-block}#circle-progress-bar{height:100%;width:100%;overflow:hidden;border-radius:50%;position:relative;background-color:#e3e3e3;display:inline-block}#circle-progress-bar .inner-content{background-color:white;height:calc(100% - 5px);width:calc(100% - 5px);border-radius:50%;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;z-index:9999}#circle-progress-bar .circle-progress-clip{height:100%;width:50%;position:absolute;top:0;z-index:11;left:0;border-top-left-radius:50%;border-bottom-left-radius:50%;background:#e3e3e3}#circle-progress-bar .circle-progress-right,#circle-progress-bar .circle-progress-left{left:0;border-top-left-radius:50%;border-bottom-left-radius:50%;background:#4f4f4f;transform-origin:right center;transform:rotate(0deg);height:100%;width:50%;z-index:10;position:absolute}#circle-progress-bar .circle-progress-right{display:none;transform:rotate(180deg)}#upload-info-container .file-name{display:block;margin:0 0 0 5px;font-weight:700;font-size:14px;font-style:normal}#upload-info-container .file-status{display:block;margin:0 0 0 5px;font-weight:400;font-size:13px;font-style:normal}#upload-info-container{display:inline-block;height:100%;vertical-align:top;text-align:left;width:calc(100% - 60px);margin-left:10px}#upload-info-container #upload-info{display:table;height:100%}#upload-info-container #upload-info .wrapper{display:table-cell;vertical-align:middle}#upload-info-container .upload-icon{display:none}#circle-progress-bar .inner-content .icon{font-style:normal;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:25px;color:#4f4f4f}.upload-data{margin:24px 15px 12px 16px;display:inline-block;text-align:right;height:72px;padding:11px;border-radius:3px;border-width:1px;border-style:solid;border-color:#f4f4f4 !important;float:right;min-width:auto;position:relative;box-sizing:border-box}.visitorChatContainer .messageStatusContainer.messageTimeContainer,.agentChatContainer .messageStatusContainer.messageTimeContainer{position:absolute;top:auto;bottom:-13px;left:0;right:auto;width:auto;margin:0;padding:0}.agentChatContainer .messageStatusContainer.messageTimeContainer{right:0;left:auto}#offlineForm .selection-container,#preChatForm .selection-container{position:relative;margin:11px 0;width:calc(100% - 30px);display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#offlineForm .selection-container .selection-input-css-placeholder,#preChatForm .selection-container .selection-input-css-placeholder{width:14px;height:14px;position:absolute;border-radius:4px;border-color:#d4d4d4;border-width:2px;border-style:solid}#offlineForm .selection-container.radio .selection-input-css-placeholder,#preChatForm .selection-container.radio .selection-input-css-placeholder{border-radius:50%}#offlineForm .selection-container.checkbox .selection-input-css-placeholder::after,#preChatForm .selection-container.checkbox .selection-input-css-placeholder::after{content:'';width:8px;height:3px;position:absolute;top:4px;left:2px;border:2px solid #53ce3c;border-top:0;border-right:0;background:transparent;opacity:0;transform:rotate(-55deg)}#offlineForm .selection-container.radio .selection-input-css-placeholder::after,#preChatForm .selection-container.radio .selection-input-css-placeholder::after{content:'';display:inline-block;width:calc(100% - 6px);height:calc(100% - 6px);top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;border-radius:50%;background:#53ce3c;opacity:0}#offlineForm .selection-container.radio input[type=radio],#offlineForm .selection-container.checkbox input[type=checkbox],#preChatForm .selection-container.radio input[type=radio],#preChatForm .selection-container.checkbox input[type=checkbox]{display:none}.rtl-direction #offlineForm .selection-container.radio input[type=radio],.rtl-direction #offlineForm .selection-container.checkbox input[type=checkbox],.rtl-direction #preChatForm .selection-container.radio input[type=radio],.rtl-direction #preChatForm .selection-container.checkbox input[type=checkbox]{margin-right:-20px}#offlineForm .selection-container.radio input[type=radio]:checked+.selection-input-css-placeholder::after,#offlineForm .selection-container.checkbox input[type=checkbox]:checked+.selection-input-css-placeholder::after,#preChatForm .selection-container.radio input[type=radio]:checked+.selection-input-css-placeholder::after,#preChatForm .selection-container.checkbox input[type=checkbox]:checked+.selection-input-css-placeholder::after{opacity:1}#offlineForm .selection-label,#preChatForm .selection-label{color:#707070;font-size:13px;font-weight:bold;padding-left:27px;position:relative}.uploaded-file-name{margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uploaded-file-info{display:grid;grid-template-columns:auto auto 1fr;grid-gap:5px;font-size:12px;align-content:normal;justify-content:center;vertical-align:middle;display:-ms-grid;-ms-grid-columns:auto auto 1fr}.uploaded-file-info .uploaded-file-name{-ms-grid-row:1;-ms-grid-column:1}.uploaded-file-info .uploaded-file-size{-ms-grid-row:1;-ms-grid-column:2}.uploaded-file-info .download-file{-ms-grid-row:1;-ms-grid-column:3}.download-file{text-transform:capitalize}.uploaded-file-size{margin-top:4px;font-size:11px}.file-upload-not-img-vid-audio .uploaded-file-name{margin-top:0}.file-upload-not-img-vid-audio .file-size{text-transform:lowercase;margin-top:3px}.file-upload-not-img-vid-audio .separator{margin-top:3px}#incoming-call{background-color:#f8f8f8;padding:13px 13px 12px 13px;box-sizing:border-box;border:#e6e6e6 1px solid;position:absolute;top:0;width:100%;z-index:5}#incoming-call-container{text-align:center}#incoming-call-container .header-label{display:inline-block;line-height:28px;vertical-align:top;font-weight:600;font-size:15px;margin-left:5px;color:#3e3e3e}.rtl-direction #incoming-call-container .header-label{margin-right:5px}#incoming-call .profileImageContainer{position:relative;display:inline-block}.profileImageContainer .incomingCallAgentProfileImage{width:28px;height:28px;background-repeat:no-repeat;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:0;display:block;border-radius:50%}#incoming-call-buttons{margin-top:16px}#incoming-call-buttons button{width:calc(50% - 5px);border-radius:5px;border:0;display:inline-block;color:#fff;height:42px;cursor:pointer;padding:0;margin:0}.rtl-direction #incoming-call-buttons{direction:ltr}#incoming-call-buttons button .btn-icon{font-size:17px;color:white;display:inline-block;line-height:41px;vertical-align:top}#incoming-call-buttons button .btn-label{display:inline-block;margin-left:10px;line-height:41px;font-weight:600}#decline-call .btn-icon{transform:rotate(135deg)}#decline-call{background-color:#e52f48;float:right}#accept-call{background-color:#48c82e;float:left}.rtl-direction #decline-call{float:left}.rtl-direction #accept-call{float:right}.visitorChatContainer .ownerNameContainer{display:none}#file-upload-drop-container{display:none;background-color:#fff;box-sizing:border-box;position:absolute;bottom:0;height:80px;width:100%;z-index:10}#fileUploadWrapper{border:#e4e4e4 solid 1px;border-radius:5px;background-color:#f1f1f1;height:calc(100% - 15px);width:90%;margin:10px auto 0;position:relative}#file-upload-drop-icon-label-container{transform:translate(-50%,-50%);position:absolute;top:50%;left:50%;width:100%}#file-upload-drop-icon{font-size:30px;display:block;font-weight:600;text-align:center}#file-upload-drop-label{font-size:15px;display:block;font-weight:600;text-align:center;color:#464646;margin-top:5px}.drag-over #actionsContainer{display:none}.drag-over #file-upload-drop-container{display:block}#tooLongMsgNotification{height:42px;position:absolute;width:calc(100% - 30px);left:15px;margin-top:10px;border-radius:5px;line-height:42px;text-align:center}#notifMessageText{margin-left:5px}.chatNotifIconContainer,.callIconContainer{display:inline-block;height:30px;width:30px;border-radius:5px;color:white;position:relative;background-color:#919191}.rtcIcon,.callIcon{display:inline-block;position:relative;top:8px}.chatNotifInfoWrapper,.callInfoWrapper{height:30px}.callInfo{vertical-align:top;line-height:32px;margin-left:10px;font-weight:600;font-size:15px}.chatNotifIconWrapper,.callIconWrapper{display:inline-block;font-size:17px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}.callInfoElapsedTime{position:absolute;bottom:8px;right:13px;font-size:13px;color:#bdbdbd}.embedded #consentForm #formCancel{display:none !important}.popup #consentForm #formCancel{display:block !important}.popup #consentForm #formSubmit{width:50% !important}#consentForm .innerTittle,#tawkToContent .innerTittle{text-align:center}#consentForm .formCell,#tawkToContent .formCell{vertical-align:middle}.rtl-direction .uploadFailedNotifLabel,.rtl-direction #maxFileNotifLabel,.rtl-direction #maxSizeNotifLabel{margin-right:10px}#contentContainer{position:absolute;top:59px;bottom:0;width:100%;height:auto;z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;display:-ms-flexbox;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}#chatPanel,#formContainer{-ms-flex-grow:1;-webkit-flex-grow:1;-moz-flex-grow:1;flex-grow:1;flex-shrink:1;position:relative;-ms-flex:1}#formContainer{display:none;background:#fff}.chatEndVisible #chatPanel{display:block !important}.chatEndVisible #formContainer{position:fixed;bottom:5px;z-index:99999;background:#fff;left:1px;right:1px;width:auto}.chatEndVisible #formFieldsContainer,.chatEndVisible .form{position:static}#greetingsMainContainer{transition:max-height .25s ease-out,opacity .5s ease;-webkit-transition:max-height .25s ease-out,opacity .5s ease;-moz-transition:max-height .25s ease-out,opacity .5s ease;-ms-transition:max-height .25s ease-out,opacity .5s ease;height:auto;max-height:100%}#greetingsMainContainer.minimize{max-height:0;opacity:0}#greetingsContent{padding:5px 15px 20px;text-align:center;font-size:14px;font-weight:400;display:none}#formFieldsContainer{margin:14px 0 0;position:absolute;width:auto;left:7px;right:0;bottom:0;top:0;height:auto;overflow:scroll;overflow-x:auto;animation:slideFadeIn .25s ease;-webkit-animation:slideFadeIn .25s ease;scrollbar-width:thin;scrollbar-color:#fff #fff;-ms-overflow-style:-ms-autohiding-scrollbar;box-sizing:border-box}#formContainer.has-required #formCancel,#formContainer.has-required #formDecline{display:none}#formContainer.has-required #formSubmit{float:none !important;width:100% !important}.formTable{display:table;width:100%;table-layout:fixed;height:100%}.formRow{display:table-row}.formCell{display:table-cell;vertical-align:bottom}.formFrame{border:1px solid #e4e4e4;border-radius:3px;padding:16px 15px 0}.field-error{font-size:17px;color:#ef5656}.rtl-direction .message.agentTypingIndicator::after,.rtl-direction .message.agentTypingIndicator::before,.rtl-direction .upload-data::after,.rtl-direction .upload-data::before,.rtl-direction .messageContainer .messageWrapper .message::after,.rtl-direction .messageContainer .messageWrapper .message::before{transform:rotate(180deg)}.rtl-direction .upload-data::after,.rtl-direction .upload-data::before,.rtl-direction .messageContainer.visitorChatContainer .messageWrapper .message::after,.rtl-direction .messageContainer.visitorChatContainer .messageWrapper .message::before{left:auto;right:100%}.rtl-direction .message.agentTypingIndicator::after,.rtl-direction .message.agentTypingIndicator::before,.rtl-direction .messageContainer.agentChatContainer .messageWrapper .message::after,.rtl-direction .messageContainer.agentChatContainer .messageWrapper .message::before{right:auto;left:100%}.border-corner{border-radius:5px 5px 0 0}.roundWidget #innerWrapper.border-corner{border-radius:5px}.embedded .border-corner{border-radius:0 !important}.embedded #innerWrapper{border:0}.time-agent-display{display:grid;grid-template-columns:1fr auto;grid-gap:5px;font-size:12px;display:-ms-grid;-ms-grid-columns:1fr}.time-agent-display .agent-div{-ms-grid-row:1;-ms-grid-column:1;float:left}.time-agent-display .time-div{-ms-grid-row:1;-ms-grid-column:2;font-size:11px;float:left}@keyframes slideFadeIn{0%{opacity:0;transform:translate(0,30px)}to{opacity:1;transform:translate(0,0px)}}#textareaSubmitContainer{width:45px;height:40px;position:absolute;right:0;display:none;top:0}.rtl-direction #textareaSubmitContainer{left:0;right:auto}.icon-mobile-submit{text-align:center;position:relative;top:0;padding-top:11px;font-size:21px;height:40px}#actionsContainer.mobile-typing #textareaSubmitContainer{display:block}#actionsContainer.mobile-typing #actionButtonsContainer{right:45px}.rtl-direction #actionsContainer.mobile-typing #actionButtonsContainer{left:45px}#actionsContainer.mobile-typing #rateMainWrapper,#actionsContainer.mobile-typing #uploadFileOption{display:none}.rtl-direction #rateMainWrapper,.rtl-direction #uploadFileOption,.rtl-direction #viewEmoji{float:right}.agent-profile-detailed{float:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:5px}.agent-profile-detailed strong{font-weight:bold}.multiple-agent .agent-profile-detailed{display:none}#headerAccountStateContainer.multiple-agent #agentProfileContainer.show{display:block}.rtl-direction .agent-profile-detailed{margin-left:auto;margin-right:20px}.rtl-direction #shortMessage{margin-left:auto;margin-right:10px}.agentDetailedInfo{position:relative;top:50%;-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%)}.agentDetailedInfo,.agentDetailedInfo p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mobile .headerBoxLink .headerBoxIcon{width:21px}.mobile .headerBoxLink .headerBoxIcon,.mobile #actionButtonsContainer a{font-size:21px}.mobile #rateContainer{width:53px}.mobile #changeNameForm.form,.mobile #emailTranscriptForm.form,.mobile #endChatForm.form,.mobile #formInnerHeight{max-width:350px}.mobile button{font-size:15px}.mobile .longFormBottomContainer{height:auto}.mobile .longFormContainer{padding-bottom:15px}.mobile .formMessageField.innerTittle,.mobile .formMessageField,.mobile .form-header-text{font-size:15px}.mobile #endChatForm .longFormContainer{padding-bottom:0}.mobile .form-header-icon{font-size:24px;width:31px;height:31px}#hidableActionsWrapper{float:left}";
			b.MinifiedStyle = "body{font-family:Helvetica,Arial,sans-serif}body.font-lato{font-family:'Lato','Open Sans',sans-serif !important}*{font-family:inherit}.rtl-direction{direction:rtl}#tawkchat-minified-box{height:100%;width:100%;overflow:hidden}#tawkchat-minified-wrapper{z-index:999997;cursor:pointer;height:100%;width:100%}#tawkchat-minified-box.round{width:60px;height:60px}#tawkchat-status-container{height:100%;width:auto;display:inline-block;position:absolute}#tawkchat-status-agent-container{height:100%;width:100%;display:none;margin-right:5px;position:relative}#tawkchat-status-icon-container{margin-right:5px}#tawkchat-status-icon-container,#tawkchat-status-text-container{display:inline-block;vertical-align:top}.round #tawkchat-status-text-container{width:60px;height:60px;display:block;border-radius:50%}.round #tawkchat-status-agent-container{height:60px;width:60px;display:none;margin:0;position:relative}.round.open #tawkchat-status-agent-container{display:none !important}.center #tawkchat-minified-wrapper{position:absolute}#tawkchat-status-agent-container #agent-profile-image{background-image:url('./img/profile.jpg');background-size:32px 32px;height:32px;width:32px;display:inline-block;position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);border-radius:50%}.round #tawkchat-status-agent-container #agent-profile-image{height:60px;width:60px;background-size:60px 60px;position:static;transform:translate(0)}#tawkchat-minified-border{margin:0;border:0 none;padding:0;background-color:#000;filter:alpha(opacity=40);opacity:.4;position:absolute;z-index:999998;border-radius:4px 4px 0 0;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;width:100%;height:100%;right:0;bottom:0}#tawkchat-minified-container{margin:0;border:0 none;padding:0;cursor:pointer;z-index:999999;position:absolute;top:0;bottom:0;width:auto;height:auto;left:0;right:0;border-bottom:0}#tawkchat-status-middle{border:0 none;margin:0 auto;font-size:17px;vertical-align:middle;position:absolute;top:50%;left:15px;right:15px;transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);-o-transform:translate(0%,-50%)}#tawkchat-status-message{border:0 none;margin:0 26px 0 0;padding:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;font-size:17px}.rtl-direction #tawkchat-status-message{margin:0 0 0 26px;text-align:right}#tawkchat-chat-bubble{border:0 none;padding:0;margin:0;width:190px;height:65px;position:absolute;top:0;display:none;right:32px}.left #tawkchat-chat-bubble{right:2px}#tawkchat-chat-bubble-text-container{border:0 none;padding:0;margin:0 0 0 -58px;width:111px;height:65px;position:absolute;z-index:10;font-style:italic;font-size:15px;top:5px;left:50%;right:auto;text-align:center;overflow:hidden;text-overflow:ellipsis;display:table}.rtl-direction #tawkchat-chat-bubble-text-container{right:50%;left:auto;margin:0 -58px 0 0}#tawkchat-chat-bubble-text{margin:0;display:table-cell;vertical-align:middle}#tawkchat-chat-bubble-graphics-container{border:0 none;padding:0;margin:0;width:146px;height:85px}#tawkchat-chat-bubble-canvas{width:146px;height:85px;border:0 none;padding:0;margin:0}#tawkchat-minified-agent-container{float:left;width:100%;display:none}#tawkchat-minified-agent-information-wrapper{border:0 none;margin:0 88px 0 0;padding:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;font-size:17px}.hasImage #tawkchat-minified-agent-information-wrapper{margin-left:60px}#tawkchat-minified-agent-name{border:0 none;padding:0;margin:0;font-weight:bold}.agentNameCentered{margin-top:17px}.agentContainerNoImage{margin-right:26px;margin-left:0}.rtl-direction .agentContainerNoImage{margin-left:19px;margin-right:0}.agentContainer{margin:6px 20px 5px 45px}.rtl-direction .agentContainer{margin-right:45px;margin-left:20px}#tawkchat-minified-agent-position{border:0 none;padding:0;margin:0;font-style:italic}#tawkchat-chat-indicator{text-align:center;border-radius:50%;width:100%;height:100%;border:0 none;margin:0;position:absolute;top:0;right:auto;z-index:1000000;display:none;background:#e52f48}#tawkchat-chat-indicator-text{border:0 none;padding:0;overflow:hidden;vertical-align:baseline;font-weight:bold;font-size:13px;text-align:center;color:white;z-index:1000001;display:block;line-height:21px;width:100%;height:100%}#maximizeChat,#popoutChat{width:16px;height:16px;margin:0;z-index:100001}#maximizeChat,#minimizeChatMinifiedBtn{display:inline-block;font-size:32px;height:100%;width:auto;text-align:center;cursor:pointer}#short-message{display:inline-block;width:auto;cursor:pointer;font-size:15px}#profileDetail{position:static;width:100%;float:left}.agentInformationContainer p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.position-label{font-size:12px}.agentInfoNoImage{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.image-bubble-close{width:15px;height:15px;float:right;margin:0 2.5px;cursor:pointer;display:block;visibility:hidden}.image-bubble-close:before,.image-bubble-close:after{position:absolute;right:5px;content:' ';height:15px;width:2px;background-color:#333}.image-bubble-close:before{transform:rotate(45deg)}.image-bubble-close:after{transform:rotate(-45deg)}#bubble-image{cursor:pointer}#bubble-image.gallery-bubble{position:absolute;top:11px;bottom:0;left:0;right:0}.image-canvas-close{border:0 none;padding:0;margin:0;width:10px;height:13px;position:absolute;right:6px;top:3px;font-size:12px;cursor:pointer;z-index:20}.image-loader{display:block;position:relative;width:64px;height:64px;margin:0 auto}.uploaded-image{width:100%;height:auto;display:block;max-width:220px;margin:0 auto}.uploaded-file-name{margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uploaded-file-info{display:grid;grid-template-columns:auto auto 1fr;grid-gap:5px;font-size:12px;align-content:normal;justify-content:center;vertical-align:middle;display:-ms-grid;-ms-grid-columns:auto auto 1fr}.uploaded-file-info .uploaded-file-name{-ms-grid-row:1;-ms-grid-column:1}.uploaded-file-info .uploaded-file-size{-ms-grid-row:1;-ms-grid-column:2}.uploaded-file-info .download-file{-ms-grid-row:1;-ms-grid-column:3}.download-file{text-transform:capitalize}.uploaded-file-size{margin-top:4px;font-size:11px}.file-upload-not-img-vid-audio .uploaded-file-name{margin-top:0}.file-upload-not-img-vid-audio .file-size{text-transform:lowercase;margin-top:3px}.file-upload-not-img-vid-audio .separator{margin-top:3px}.download-file{color:inherit;text-decoration:underline;display:block;margin-top:3px}.imageMessageBody{padding-right:13px !important}.rtl-direction .image-canvas-close{left:6px !important;right:auto !important}.no-border #tawkchat-minified-container{border:none !important;top:0 !important;left:0 !important;right:0 !important}.top #tawkchat-chat-bubble-text-container{margin-top:10px !important}.top #tawkchat-chat-bubble-close{bottom:0 !important;right:0 !important;position:absolute !important}.default.top #tawkchat-chat-bubble-close{bottom:3px !important;right:6px !important;top:auto !important}.profileImageContainer .agentProfileImage{width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:-38px;display:block;background-color:#fff;background-position:0 0}.center-right #tawkchat-chat-bubble-close{float:left}.center.right .profileImageContainer .agentProfileImage,.top.right .profileImageContainer .agentProfileImage,.bottom.right .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.right .profileImageContainer .agentProfileImage,.rtl-direction.top.right .profileImageContainer .agentProfileImage,.rtl-direction.bottom.right .profileImageContainer .agentProfileImage{left:auto;right:-38px}.center.left .profileImageContainer .agentProfileImage,.top.left .profileImageContainer .agentProfileImage,.bottom.left .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.left .profileImageContainer .agentProfileImage,.rtl-direction.top.left .profileImageContainer .agentProfileImage,.rtl-direction.bottom.left .profileImageContainer .agentProfileImage{left:auto;right:-38px}#incoming-call .profileImageContainer{position:relative}.profileImageContainer .incomingCallAgentProfileImage{width:28px;height:28px;background-repeat:no-repeat;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:0;display:block;border-radius:50%;background-position:0 0}#incoming-call-container .header-label{display:inline-block;line-height:28px;vertical-align:top;font-weight:600;font-size:15px;margin-left:33px;color:#3e3e3e}#tawkchat-message-preview-container{height:100%;box-sizing:border-box}.bottom#tawkchat-message-preview-container{position:absolute;bottom:0;top:auto;width:100%;height:auto}.top#tawkchat-message-preview-container{top:0;bottom:auto;width:100%;height:auto;position:absolute}.center#tawkchat-message-preview-container{top:0;bottom:auto;position:absolute;width:100%;height:auto}#tawkchat-message-preview-messages-container{max-height:calc(100vh - 110px);margin-bottom:10px;overflow:auto}#tawkchat-message-preview-messages-container *{cursor:pointer}#tawkchat-message-preview-messages-container::-webkit-scrollbar{display:none}#tawkchat-message-preview-messages-container .message-preview-item{position:relative;opacity:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;margin-bottom:10px}#tawkchat-message-preview-messages-container .message-preview-item.animate-fade-object{opacity:1}#tawkchat-message-preview-messages-container .messageBody{position:relative;height:auto;padding:15px 25px 15px 13px;box-sizing:border-box;border-width:1px;border-style:solid;border-radius:5px;border-color:#e9e9e9}#tawkchat-message-preview-messages-container .message-preview-item:last-child{margin-bottom:0}#tawkchat-message-preview-messages-container .messageBody:after,#tawkchat-message-preview-messages-container .messageBody:before{right:100%;top:15px;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}#tawkchat-message-preview-messages-container .messageBody:after{border-color:rgba(255,255,255,0);border-right-color:#fff;border-width:6px;margin-top:-6px}#tawkchat-message-preview-messages-container .messageBody:before{border-color:rgba(170,170,170,0);border-right-color:#ddd;border-width:7px;margin-top:-7px}.rtl-direction #tawkchat-message-preview-messages-container .messageBody:after,.rtl-direction #tawkchat-message-preview-messages-container .messageBody:before{left:100%;right:unset}.rtl-direction #tawkchat-message-preview-messages-container .messageBody:after{border-right-color:transparent;border-left-color:#fff}.rtl-direction #tawkchat-message-preview-messages-container .messageBody:before{border-right-color:transparent;border-left-color:#ddd}#tawkchat-message-preview-messages-container .message{color:#464646;font-weight:400;font-size:14px;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}#tawkchat-message-preview-messages-container .messageTimeContainer,#tawkchat-message-preview-messages-container .messageNameContainer{display:inline-block;font-size:13px;color:#bdbdbd}#tawkchat-message-preview-messages-container .messageInformation{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-top:5px}#tawkchat-message-preview-messages-container .messageNameContainer{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}#tawkchat-message-preview-messages-container .message-preview-close-button{top:8px;right:8px;z-index:5;position:absolute;color:#bdbdbd;font-size:14px;cursor:pointer;display:none}#tawkchat-message-preview-messages-container .hidden-profile .profileImageContainer,#tawkchat-message-preview-messages-container .hidden-profile .messageBody::after,#tawkchat-message-preview-messages-container .hidden-profile .messageBody::before{display:none}#tawkchat-message-preview-quick-reply-container{position:relative;float:right;width:340px;height:auto;overflow:hidden !important}.center.right #tawkchat-message-preview-messages-container,.center.right #tawkchat-message-preview-quick-reply-container,.bottom.right #tawkchat-message-preview-messages-container,.top.right #tawkchat-message-preview-messages-container,.top.right #tawkchat-message-preview-quick-reply-container,.bottom.right #tawkchat-message-preview-quick-reply-container{padding-left:38px}.rtl-direction.center.right #tawkchat-message-preview-messages-container,.rtl-direction.center.right #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.right #tawkchat-message-preview-messages-container,.rtl-direction.top.right #tawkchat-message-preview-messages-container,.rtl-direction.top.right #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.right #tawkchat-message-preview-quick-reply-container{padding-left:0;padding-right:38px}.center.left #tawkchat-message-preview-messages-container,.center.left #tawkchat-message-preview-quick-reply-container,.bottom.left #tawkchat-message-preview-messages-container,.top.left #tawkchat-message-preview-messages-container,.top.left #tawkchat-message-preview-quick-reply-container,.bottom.left #tawkchat-message-preview-quick-reply-container{padding-left:38px;padding-right:0}.rtl-direction.center.left #tawkchat-message-preview-messages-container,.rtl-direction.center.left #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.left #tawkchat-message-preview-messages-container,.rtl-direction.top.left #tawkchat-message-preview-messages-container,.rtl-direction.top.left #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.left #tawkchat-message-preview-quick-reply-container{padding-left:0;padding-right:38px}#actionsContainer{z-index:99998;background-color:#fff;width:100%;height:50px;border-radius:5px}.drag-over#actionsContainer{height:155px !important;padding:8px 8px 35px 8px;box-sizing:border-box}#file-upload-drop-container{display:none;background-color:#f1f1f1;height:100%;width:100%;border:#e4e4e4 solid 1px;border-radius:5px;box-sizing:border-box;position:relative}#file-upload-drop-icon-label-container{transform:translate(-50%,-50%);position:absolute;top:50%;left:50%}#file-upload-drop-label{font-size:15px;display:block;font-weight:600;text-align:center;color:#464646;margin-top:5px}#file-upload-drop-icon{font-size:30px;display:block;font-weight:600;text-align:center}#textareaWrapper{display:block;background-color:transparent;position:relative;height:100%;box-shadow:inset 1px 1px 0 #e9e9e9,inset -1px 0 0 #e9e9e9,inset 0 -1px 0 #e9e9e9;border-radius:5px;max-height:180px}.drag-over #textareaWrapper{display:none}.drag-over #file-upload-drop-container{display:block}#textareaContainer{height:100%;padding:15px 14px 15px 14px;box-sizing:border-box;position:relative}#textareaContainer.with-emoji{padding-right:44px;padding-left:14px}.rtl-direction #textareaContainer.with-emoji{padding-right:14px;padding-left:44px}#chatTextarea{padding:0;margin:0;height:100%;width:100%;overflow:hidden;resize:none;border:0;vertical-align:top;font-size:14px !important;background-color:transparent;color:#000;font-family:inherit}#chatTextarea:active,#chatTextarea:focus{outline:0}#chatTextarea::placeholder{color:#bdbdbd !important}#actionButtonsContainer{position:absolute;right:14px;top:15px}.rtl-direction #actionButtonsContainer{right:auto;left:0}.rtl-direction #rateMainWrapper,.rtl-direction #uploadFileOption,.rtl-direction #viewEmoji{float:right}#rateContainer{padding:6px 8px;border-radius:5px;box-shadow:0 3px 15px #cbcbcb;display:none;position:absolute;width:51px;background:#fff;left:-100%;top:-6px}.rtl-direction #rateContainer{right:-40px}#rateMainWrapper{float:left;position:relative}#rateNegative{margin-left:0 !important;color:#f99 !important}#ratePositive{color:#b4deab !important}#rateNegative:hover,#ratePositive:hover{transform:scale(1.2,1.2)}#actionButtonsContainer a{font-size:19px;color:#bdbdbd;text-decoration:none;float:left;margin-left:13px}#actionButtonsContainer a:hover{color:#464646}#uploadFileOption label{display:block;cursor:pointer}#upload-form{position:absolute;top:-100000px}#emoji-selection-container{height:200px;background:#fff;display:none;z-index:10001;width:340px;background-color:#f3f3f3;position:relative}#tawktoLink{color:#000;font-size:11px;font-weight:400;text-decoration:none}#tawktoLink b{font-weight:700}#tawktoLink .thin{font-size:11px;font-weight:100}#bottomContainer{text-align:center;width:calc(100% - 38px);position:absolute;bottom:0;height:20px;background:transparent;z-index:100001;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#incoming-call{background-color:#fff;border-radius:5px;padding:13px 13px 12px 13px;box-sizing:border-box;margin-bottom:10px;box-shadow:inset 0 0 1px #aaa}#incoming-call-buttons{margin-top:16px}#incoming-call-buttons button{width:calc(50% - 5px);border-radius:5px;border:0;display:inline-block;color:#fff;height:42px;cursor:pointer}#incoming-call-buttons button .btn-icon{font-size:17px;color:white;display:inline-block;line-height:41px;vertical-align:top}#incoming-call-buttons button .btn-label{display:inline-block;margin-left:10px;line-height:41px;font-weight:600}#decline-call .btn-icon{transform:rotate(135deg)}#decline-call{background-color:#e52f48;float:right}#accept-call{background-color:#48c82e;float:left}.mp-callIconContainer{display:inline-block;height:30px;width:30px;border-radius:5px;color:white;position:relative}#mp-callIcon{display:inline-block;position:relative}.mp-callInfoWrapper{height:30px}#mp-callInfo{vertical-align:top;line-height:32px;margin-left:10px;font-weight:600;font-size:15px;color:#3e3e3e}#mp-callIconWrapper{display:inline-block;font-size:17px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.mp-callInfoElapsedTime{position:absolute;bottom:8px;right:13px;font-size:13px;color:#bdbdbd}.mp-callInfoContainer.messageBody{height:80px !important}#tawkchat-message-preview-close{color:#bdbdbd;font-size:19px;margin:2.5px;cursor:pointer}.icon-close{font-weight:900}.left #tawkchat-message-preview-close{text-align:right}.right #tawkchat-message-preview-close{text-align:right}.top.left #tawkchat-message-preview-close{right:38px;left:auto}.top.right #tawkchat-message-preview-close{left:38px;right:auto}.rtl-direction.right #tawkchat-message-preview-close{text-align:left}.rtl-direction.left #tawkchat-message-preview-close{text-align:left}#tooLongMsgNotification{height:42px;position:absolute;width:calc(100% - 30px);left:15px;margin-top:10px;border-radius:5px;line-height:42px;text-align:center}#notifMessageText{margin-left:5px}.appear{animation:icon-appear .25s ease;display:block !important}.hide{display:none !important}#min-agent-profile-details{position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:block;left:40px;max-width:calc(100% - 37px)}.rtl-direction #min-agent-profile-details{left:auto;right:40px}#min-agent-profile-details .name{font-size:90%;font-weight:bold;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}#min-agent-profile-details .position{font-size:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.rtl-direction #mp-callInfo{padding-right:7px}.rtl-direction #tawkchat-message-preview-messages-container .messageNameContainer{left:initial;right:13px}.rtl-direction #tawkchat-message-preview-messages-container .messageTimeContainer,.rtl-direction .mp-callInfoElapsedTime{right:initial;left:13px}.rtl-direction #accept-call{float:right}.rtl-direction #decline-call{float:left}.rtl-direction .profileImageContainer .incomingCallAgentProfileImage{right:0}.rtl-direction #incoming-call-container .header-label{margin-right:33px;margin-left:0}@keyframes icon-appear{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}#hidableActionsWrapper{float:left}";
			b.MinifiedMobileStyle = "body{position:relative;margin:0;font-size:16px;z-index:1000001;font-family:Helvetica,Arial,sans-serif}body.font-lato{font-family:'Lato','Open Sans',sans-serif !important}*{font-family:inherit}#tawkchat-minified-box{border:0 none;padding:0;margin:0;position:relative;width:100%;height:100%;z-index:999995;text-align:left;font-size:16px}.rectangle #tawkchat-minified-wrapper{width:107px;height:42px;bottom:0}.round #tawkchat-minified-wrapper{bottom:6px;width:60px;height:60px;border-radius:50%;box-shadow:rgba(0,0,0,0.16) 0 2px 10px 0 !important}#tawkchat-minified-wrapper{border:0 none;margin:0;z-index:999997;position:absolute;cursor:pointer}.bottom.rectangle #tawkchat-minified-wrapper{bottom:15px}.round #tawkchat-status-text-container{padding:0;position:absolute;z-index:999998;width:100%;height:100%;border-radius:50%;border:0 none}.rectangle #tawkchat-status-text-container{padding:0;position:absolute;z-index:999998;width:100%;height:100%;border-radius:3px;border:0 none;text-align:center}#incoming-call{background-color:#fff;border-radius:5px;padding:13px 13px 12px 13px;box-sizing:border-box;margin-bottom:10px;box-shadow:inset 0 0 1px #aaa}#incoming-call-buttons{margin-top:16px}#incoming-call-buttons button{width:calc(50% - 5px);border-radius:5px;border:0;display:inline-block;color:#fff;height:42px;cursor:pointer}#incoming-call-buttons button .btn-icon{font-size:17px;color:white;display:inline-block;line-height:41px;vertical-align:top}#incoming-call-buttons button .btn-label{display:inline-block;margin-left:10px;line-height:41px;font-weight:600}#decline-call .btn-icon{transform:rotate(135deg)}#decline-call{background-color:#e52f48;float:right}#accept-call{background-color:#48c82e;float:left}#incoming-call .profileImageContainer{position:relative}.profileImageContainer .incomingCallAgentProfileImage{width:28px;height:28px;background-repeat:no-repeat;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:cover;position:absolute;left:0;display:block}#incoming-call-container .header-label{display:inline-block;line-height:28px;vertical-align:top;font-weight:600;font-size:15px;margin-left:33px}#tawkchat-status-message{border:0 none;padding:0;text-decoration:none;height:30px;text-align:center;position:absolute;left:21px;right:21px;width:auto}.rtl-direction{direction:rtl}.rtl-direction #mp-callInfo{padding-right:7px}.rtl-direction #tawkchat-message-preview-messages-container .messageNameContainer{left:initial;right:13px}.rtl-direction #tawkchat-message-preview-messages-container .messageTimeContainer,.rtl-direction .mp-callInfoElapsedTime{right:initial;left:13px}.rtl-direction #accept-call{float:right}.rtl-direction #decline-call{float:left}.rtl-direction .profileImageContainer .incomingCallAgentProfileImage{right:0}.rtl-direction #incoming-call-container .header-label{margin-right:33px;margin-left:0}#tawkchat-chat-indicator{border:0 none;margin:0;padding:0;line-height:1em;position:absolute;z-index:1000000;display:none;left:0;width:21px;height:21px;background-color:#e52f48;border-radius:50%}.bottom #tawkchat-chat-indicator,.center #tawkchat-chat-indicator{top:auto}.center.rectangle #tawkchat-chat-indicator{bottom:27px;left:95px}.center.right.rectangle #tawkchat-chat-indicator{left:95px}.bottom.rectangle #tawkchat-chat-indicator{bottom:42px}.round #tawkchat-chat-indicator{bottom:45px}.top #tawkchat-chat-indicator{top:auto}.top.rectangle #tawkchat-chat-indicator{bottom:27px}.left #tawkchat-chat-indicator{left:42px;right:auto}.left.rectangle #tawkchat-chat-indicator{left:93px}.left.rectangle .rtl-direction #tawkchat-chat-indicator{left:inherit;right:93px}.right #tawkchat-chat-indicator{left:95px;right:auto}.right .rtl-direction #tawkchat-chat-indicator{left:auto;right:93px}.round.right #tawkchat-chat-indicator{left:50px}.round.left #tawkchat-chat-indicator{left:42px}.round.left .rtl-direction #tawkchat-chat-indicator,.round.left .rtl-direction #tawkchat-chat-indicator{left:auto}#tawkchat-chat-indicator-text{border:0 none;padding:0;margin:0;overflow:hidden;vertical-align:baseline;font-weight:bold;font-size:13px;font-family:Arial;text-align:center;color:white;height:100%;width:100%;z-index:1000001;display:block;line-height:21px}#status-message{color:inherit;text-decoration:none;font-weight:bold;font-size:16px;vertical-align:middle;display:block;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 5px}#bottomContainer{text-align:center;width:calc(100% - 38px);position:absolute;bottom:0;height:20px;background:transparent;z-index:100001;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rectangle #tawkchat-status-icon{margin:8px;font-size:24px;line-height:1em;text-align:left}.rectangle .rtl-direction #tawkchat-status-icon{text-align:right}#tawkchat-status-icon{speak:none;font-style:normal;font-weight:bold;font-variant:normal;text-transform:none;line-height:60px;color:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:32px;text-align:center}#tawkchat-status-icon .text{display:inline-block;overflow:hidden;padding:0 0 0 7px;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap;word-wrap:break-word;word-break:break-all}.rectangle #tawkchat-status-icon:before{position:absolute}.rectangle #tawkchat-status-icon.offline:before{top:11px}.rectangle .rtl-direction #tawkchat-status-icon .text{padding:0 7px 0 0}#chat-icon svg{width:24px !important;height:24px !important;margin:0 !important}#tawkchat-status-agent-container{position:absolute;top:0;right:0;left:0;bottom:0;z-index:999999;display:none}#agent-profile-image{background-repeat:no-repeat;background-size:cover;background-position:center;border-radius:50%;width:60px;height:60px}#agent-profile-image.round{width:100%;height:100%;margin-top:0;margin-left:0}.rectangle #agent-profile-image{width:32px;height:32px;margin:5px}.profileImageContainer .agentProfileImage{width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:cover;position:absolute;left:-38px;display:block}.center-right #tawkchat-chat-bubble-close{float:left}.center.right .profileImageContainer .agentProfileImage,.top.right .profileImageContainer .agentProfileImage,.bottom.right .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.right .profileImageContainer .agentProfileImage,.rtl-direction.top.right .profileImageContainer .agentProfileImage,.rtl-direction.bottom.right .profileImageContainer .agentProfileImage{left:auto;right:-38px}.center.left .profileImageContainer .agentProfileImage,.top.left .profileImageContainer .agentProfileImage,.bottom.left .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.left .profileImageContainer .agentProfileImage,.rtl-direction.top.left .profileImageContainer .agentProfileImage,.rtl-direction.bottom.left .profileImageContainer .agentProfileImage{left:auto;right:-38px}#tawkchat-message-preview-container{height:100%;box-sizing:border-box}.bottom#tawkchat-message-preview-container{position:absolute;bottom:0;top:auto;width:100%;height:auto}.top#tawkchat-message-preview-container{top:0;bottom:auto}#tawkchat-message-preview-messages-container{overflow-y:scroll;max-height:calc(100vh - 110px);margin-bottom:10px}#tawkchat-message-preview-messages-container::-webkit-scrollbar{display:none}#tawkchat-message-preview-messages-container .message-preview-close-button{top:8px;right:8px;z-index:5;position:absolute;color:#bdbdbd;font-size:14px;cursor:pointer;display:none}#tawkchat-message-preview-messages-container .hidden-profile .profileImageContainer{display:none}.center.right #tawkchat-message-preview-messages-container,.bottom.right #tawkchat-message-preview-messages-container,.top.right #tawkchat-message-preview-messages-container{padding-left:38px}.center.left #tawkchat-message-preview-messages-container,.bottom.left #tawkchat-message-preview-messages-container,.top.left #tawkchat-message-preview-messages-container{padding-left:38px;padding-right:0}#tawkchat-message-preview-close{color:#bdbdbd;font-size:19px;margin:2.5px;cursor:pointer}.left #tawkchat-message-preview-close{text-align:right}.right #tawkchat-message-preview-close{text-align:right}.top.left #tawkchat-message-preview-close{right:38px;left:auto}.top.right #tawkchat-message-preview-close{left:38px;right:auto}.rtl-direction.right #tawkchat-message-preview-close{text-align:left}.rtl-direction.left #tawkchat-message-preview-close{text-align:left}";
			b.CommonStyle = '@font-face{font-family:\'tawk-widget\';src:local(\'tawk-widget\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.woff2?yh9epr\') format(\'woff2\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.woff?yh9epr\') format(\'woff\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.ttf?yh9epr\') format(\'truetype\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.eot?yh9epr#iefix\') format(\'embedded-opentype\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.svg?yh9epr#tawk-widget\') format(\'svg\');font-weight:normal;font-style:normal}[class^="icon-"],[class*=" icon-"]{font-family:\'tawk-widget\' !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-menu:before{content:"\\e902"}.icon-mobile-submit:before{content:"\\e900";color:#aaa}.icon-desktop-sharing:before{content:"\\e903"}.icon-close:before{content:"\\e909"}.icon-phone-incoming:before{content:"\\e911"}.icon-chat:before{content:"\\e901"}.icon-upload:before{content:"\\e904"}.icon-voice-chat:before{content:"\\e905"}.icon-vote-down:before{content:"\\e906"}.icon-vote-up:before{content:"\\e907"}.icon-video-chat:before{content:"\\e908"}.icon-mail:before{content:"\\e914"}.icon-alert:before{content:"\\e915"}.icon-arrow-up:before{content:"\\e916"}.icon-user:before{content:"\\e917"}.icon-happy:before{content:"\\e91a"}.icon-error:before{content:\'\\e810\'}.icon-message:before{content:\'\\e811\'}.lds-spinner{display:inline-block;position:relative;width:64px;height:64px}.lds-spinner .spin{transform-origin:32px 32px;animation:lds-spinner 1.2s linear infinite}.lds-spinner .spin:after{content:" ";display:block;position:absolute;top:3px;left:29px;width:5px;height:14px;border-radius:20%;background:rgba(0,0,0,0.4)}.lds-spinner .spin-1{transform:rotate(0deg);animation-delay:-1.1s}.lds-spinner .spin-2{transform:rotate(30deg);animation-delay:-1s}.lds-spinner .spin-3{transform:rotate(60deg);animation-delay:-0.9s}.lds-spinner .spin-4{transform:rotate(90deg);animation-delay:-0.8s}.lds-spinner .spin-5{transform:rotate(120deg);animation-delay:-0.7s}.lds-spinner .spin-6{transform:rotate(150deg);animation-delay:-0.6s}.lds-spinner .spin-7{transform:rotate(180deg);animation-delay:-0.5s}.lds-spinner .spin-8{transform:rotate(210deg);animation-delay:-0.4s}.lds-spinner .spin-9{transform:rotate(240deg);animation-delay:-0.3s}.lds-spinner .spin-10{transform:rotate(270deg);animation-delay:-0.2s}.lds-spinner .spin-11{transform:rotate(300deg);animation-delay:-0.1s}.lds-spinner .spin-12{transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}.emoji-select{display:inline-block;margin:8px}.emoji-select:hover .emojione{transform:scale(2);-ms-transform:scale(2);-webkit-transform:scale(2);-moz-transform:scale(2);-o-transform:scale(2)}.emoji-header{display:block;cursor:pointer}.open-tab{opacity:1;float:left;position:relative;display:block;cursor:pointer;width:11%;text-align:center;height:100%;padding:8px 0;box-sizing:border-box;line-height:24px}.open-tab.active::after{content:"";position:absolute;height:5px;width:calc(100% - 5px);transform:translateX(-50%);left:50%;bottom:0;background-color:#4f4f4f}#people.open-tab.active .emoji-header{border-left:0}.open-tab.active .emoji-header:hover{background:#fff}#tabs-selection{height:40px;background-color:white;list-style:none;box-shadow:inset 0 2px 0 0 rgba(128,128,128,0.14)}#emoji-selection-container .loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#emoji-selection-container .emojione{min-width:auto;min-height:auto;height:3.2ex}.emojione{min-width:auto;min-height:auto;height:3.2ex;vertical-align:middle}.emojionly .emojione{height:4.5ex !important;width:auto}#viewEmoji.active{color:#464646}#emoji-selection-container .inputContainer{padding:0 6px}#emoji-selection-container .textInput{padding:6px 0}#tab-content{position:absolute;top:40px;bottom:0;overflow:auto;left:0;right:0;padding:10px 5px;border:1px solid #e3e3e3}.showWithFade{display:block !important;animation:slideFadeIn .25s ease;-webkit-animation:slideFadeIn .25s ease}#chat-icon{display:inline-block;vertical-align:middle}#tawkchat-status-text-container svg{width:32px;height:32px;margin-top:14px}';
			var t = {
					"chat-notification-container": '<div id="__MESSAGE_ID__" class="messageBody notification clearfix"><div class="notificationContainer"><div class="message">__MESSAGE__</div></div><div class="notificationTime">__TIME__</div><div class="clear"></div></div>',
					"chat-resend-link": '<a id="resendMessage-__MESSAGE_ID__" href="javascript:void(0);" class="messageStatus" title="Resend">__NOT_DELIVERED__</a><span class="icon-alert"></span> <span class="failed-label">__FAILED__</span>',
					"tawk-survey-wrapper": '<div class="surveyContainer"><div class="surveyQuestion">__QUESTION__</div><div class="survey-options-wrapper">__OPTIONS__</div></div>',
					departmentOfflineNotification: '<div class="messageBody notification"><div class="messageWrapper"><div class="message">__MESSAGE__</div></div><div class="clear"></div></div>',
					"survey-option": '<input type="radio" id="__RADIO_ID__" name="__RADIO_NAME__" value="__RADIO_VALUE__" /><label for="__RADIO_ID__">__RADIO_VALUE__</label><br />',
					"file-upload": '<div>__FILE_DISPLAY__<div class="uploaded-file-info"><p class="uploaded-file-name"><b>__FILE_NAME__</b></p><div class="uploaded-file-size">&#x25CF; __FILE_SIZE__</div><a class="download-file" href="__DOWNLOAD_URL__" title="__DOWNLOAD_TEXT__" target="_blank">__DOWNLOAD_LABEL__</a></div></div>',
					"file-upload-not-img-vid-audio": '<div class="file-upload-not-img-vid-audio"><p class="uploaded-file-name"><b>__FILE_NAME__</b></p><div class="uploaded-file-info"><span class="file-size">__FILE_SIZE__</span><span class="separator">&#x25CF; __FILE_TYPE__</span><a class="download-file" href="__DOWNLOAD_URL__" title="__DOWNLOAD_TEXT__" target="_blank">__DOWNLOAD_LABEL__</a></div></div>',
					"chat-divider": '    <hr id="newMessageDividerLine">    <span id="newMessageDividerLabel">__NEW_MESSAGES__</span>',
					"default-branding": '<span class="thin">I\'Am</span> &nbsp <img class="emojione" alt="\u26a1" title=":zap:" src="./img/favicon.png"> &nbsp How can i  <b>Help You</b>',
					fileUploadProgress: '    <div id="upload-__HANDLE__" class="upload-data">    <div id="circle-progress-bar-border">        <div id="circle-progress-bar-container">        <div id="circle-progress-bar">        <div class="inner-content"><span class="icon-arrow-up icon"></span>        </div><div class="circle-progress-clip"></div><div class="circle-progress-left"></div><div class="circle-progress-right"></div></div>        </div>        </div><div id="upload-info-container"><div id="upload-info"><div class="wrapper"><span class="file-name">__FILE_NAME__</span><span class="file-status">__FILE_STATUS__</span></div></div></div><span class="upload-icon"></span>    </div>    <div class="clearfix"></div>',
					incomingCallRequest: '<div id="incoming-call-container"><div class="profileImageContainer"><div class="incomingCallAgentProfileImage"></div><div style="background-image : __IMAGE_URL__;" class="incomingCallAgentProfileImage"></div></div><div class="header-label">__INCOMING_CALL__</div><div id="incoming-call-buttons"><button id="decline-call"><span class="btn-icon icon-voice-chat"></span><span class="btn-label">__DECLINE_CALL__</span></button><button id="accept-call"><span class="btn-icon icon-voice-chat"></span><span class="btn-label">__ACCEPT_CALL__</span></button></div><div class="clear"></div></div>',
					callInfo: '<div class="callLoader">__LOADER__</div><div class="callInfoContainer"><div class="callInfoWrapper"><div class="callIconContainer"><div class="callIconWrapper"></div></div><div class="callDetailsContainer"><p class="callTitle"></p></div></div><p class="callEndDetails"></p></div>',
					callError: '<div class="callInfoWrapper"><div class="callDetailsContainer"><p class="callTitle missed">__HEADER__</p><p class="callEndDetails">__MESSAGE__</p></div><div class="callRetryContainer"><button class="retry-load">__ACTION__</button></div></div>',
					loader: '<div class="lds-spinner loader"><div class="spin spin-1"></div><div class="spin spin-2"></div><div class="spin spin-3"></div><div class="spin spin-4"></div><div class="spin spin-5"></div><div class="spin spin-6"></div><div class="spin spin-7"></div><div class="spin spin-8"></div><div class="spin spin-9"></div><div class="spin spin-10"></div><div class="spin spin-11"></div><div class="spin spin-12"></div></div>',
					noWebrtc: '<div class="uploadFailedNotifContainer"><div class="uploadFailedNotifHeader"><div class="uploadFailedNotifIconContainer"><div class="uploadFailedNotifIconWrapper"></div><span class="uploadFailedSizeNotifIcon">!</span></div><span class="uploadFailedNotifLabel">__HEADER__</span></div><div class="uploadFailedNotifMessage">__MESSAGE__</div><div class="uploadFailedRetryContainer"></div></div>',
					"emoji-selection": '<ul id="tabs-selection">__TAB_LIST__<li id="search" class="open-tab"><a href="javascript:void(0);" class="emoji-header"><img class="emojione only-emoji" alt="search" title=":mag:" src="https://cdn.jsdelivr.net/emojione/assets/png/1f50d.png?v=2.2.7" /></a></li><div class="clearfix"></div></ul><div id="tab-content"></div>',
					"emoji-tab-pane": '<div class="tab-pane"><div class="emoji-list">__EMOJIS__</div></div>',
					"emoji-search-pane": '<div class="tab-pane"><div class="inputContainer"><input id="search-emoji" type="text" class="textInput" placeholder="Search Emoji" /></div><div id="search-list"></div></div>',
					"emoji-tab-select": '<li class="open-tab" id="__ID__"><a href="javascript:void(0);" class="emoji-header">__IMAGE__</a></li>',
					"emoji-list": '<a href="javascript:void(0);" class="emoji-select" id="__SHORTNAME__" title="__SHORTNAME__">__IMAGE__</a>',
					changeNameForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div id="form-header"><span class="form-header-icon"><span class="icon-user"></span></span><div class="form-header-text"><span>__CHANGE_NAME__</span></div>        </div><div id="changeNameFormMessageContainer" class="formMessageField">__TITLE__</div><fieldset><div class="inputContainer"><input type="text" id="nameField" value="__NAME__" title="__NAME_PLACEHOLDER__" class="textInput" maxlength="40" placeholder="__NAME_PLACEHOLDER__" /></div><div id="nameFieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></fieldset><div id="nameFieldError" class="formErrorContainer"></div></div></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton  theme-background-color theme-text-color">__SAVE_BUTTON__</button><div class="clear"></div></div></div></div></div></div></div><div id="submitWrapper"></div>',
					emailTranscriptForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div id="form-header" class="email-transcript-form-header"><span class="form-header-icon"><span class="icon-mail"></span></span><div class="form-header-text"><span>__EMAIL_TRANSCRIPT_TO__:</span></div>        </div>        <div id="changeNameFormMessageContainer" class="formMessageField"></div><fieldset><div class="inputContainer"><input type="email" id="transcriptEmailField" title="__TRANSCRIPTEMAIL_PLACEHOLDER__" value="__TRANSCRIPTEMAIL__" class="textInput" maxlength="150" placeholder="__TRANSCRIPTEMAIL_PLACEHOLDER__" /></div><div id="transcriptEmailFieldErrorIcon" class="formErrorIcon"><span class="icon-error field-error"></span></div></fieldset><div id="transcriptEmailFieldError" class="formErrorContainer"></div></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SEND_BUTTON__</button></div></div></div></div></div></div></div><div id="submitWrapper"></div>',
					offlineForm: '<div id="overlayOfflineForm"><p>__OFFLINE_MESSAGE_SUCCESSFULY_SENT__</p></br><button id="resendButton" class="approveButton formButton theme-background-color theme-text-color">__SEND_AGAIN__</button></div><div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight">__FIELDS__</div></div><div id="offlineButtonContainer" class="longFormBottomContainer"><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SUBMIT_BUTTON__</button></div></div></div></div></div></div><div id="submitWrapper"></div>',
					preChatForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight">__FIELDS__</div></div><div id="prechatButtonContainer" class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__START_CHAT_BUTTON__</button></div></div></div></div></div></div><div id="submitWrapper"></div>',
					departmentSelection: '<fieldset><div class="inputContainer selection "><select id="__ID__Field" title="__LABEL__">__VALUE__</select></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div><div id="__ID__FieldErrorIcon" class="formErrorIcon"></div>',
					inputTextFieldType: '<fieldset><div class="inputContainer"><input type="__INPUT_TYPE__" id="__ID__Field" title="__LABEL__" value="__VALUE__" class="textInput" maxlength="__MAXLENGTH__"placeholder="__REQUIRED__ __LABEL__" /><label class="form-field-label small">__REQUIRED__ __LABEL__</label></div><div id="__ID__FieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
					textAreaFieldType: '<fieldset class="textareaFieldset"><div class="inputContainer"><textarea id="__ID__Field" title="__LABEL__" maxlength="__MAXLENGTH__" placeholder="__REQUIRED__ __LABEL__"></textarea><label class="form-field-label small">__REQUIRED__ __LABEL__</label></div><div id="__ID__FieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
					selectionsType: '<fieldset><label class="form-field-label">__REQUIRED__ __LABEL__</label><div><div class="selections-container" id="__ID__Container">__VALUE__<div id="__ID__FieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
					checkboxSelectionType: '<div class="selection-container checkbox"><input type="checkbox" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><span class="selection-input-css-placeholder"></span><label class="selection-label" for="__ID__">__VALUE__</label></div>',
					radioSelectionType: '<div class="selection-container radio"><input type="radio" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><span class="selection-input-css-placeholder"></span><label class="selection-label" for="__ID__">__VALUE__</label></div>',
					"close-form-button": '<button id="formCloseChat" class="declineButton formButton">__CLOSE_BUTTON__</button>',
					inactivityOverlay: "<div>__OVERLAY__</div>",
					maintenanceOverlay: "<div>__OVERLAY__</div>",
					endChatForm: '<div id="formFieldsContainer"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div class="formMessageField innerTittle">__TITLE__</div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__END_CHAT_BUTTON__</button></div></div></div></div></div><div id="submitWrapper"></div>',
					restartChatForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div id="form-header"><span class="form-header-icon"><span class="icon-chat"></span></span><div class="form-header-text"><span>__TITLE__</span></div></div><div class="formMessageField innerTittle">__END_CHAT_MESSAGE__</div><fieldset><div class="inputContainer"><input type="email" id="transcriptEmailField" title="__TRANSCRIPTEMAIL_PLACEHOLDER__" value="__TRANSCRIPTEMAIL__" class="textInput" maxlength="150" placeholder="__TRANSCRIPTEMAIL_PLACEHOLDER__" /><div id="transcriptEmailFieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></div></fieldset><div id="transcriptEmailFieldError" class="formErrorContainer"></div></div></div><div class="longFormBottomContainer"><button id="newChat" class="declineButton formButton">__START_CHAT__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__EMAIL_TRANCRIPT__</button></div></div></div></div></div></div><div id="submitWrapper"></div>',
					consentForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div class="formMessageField innerTittle">__TITLE__</div><div class="longFormBottomContainer"><button id="formDecline" class="declineButton formButton">__CUSTOM_CLOSE_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__CUSTOM_SUBMIT_BUTTON__</button></div></div></div></div></div></div></div></div><div id="submitWrapper"></div>',
					"tawkchat-minified-iframe-element-rectangle": '<div id="tawkchat-minified-wrapper"><div id="tawkchat-minified-container" class="theme-background-color"><div id="tawkchat-status-middle"><div id="tawkchat-status-agent-container" class="theme-text-color"><div id="agent-profile-image" class="agent-profile">&nbsp;</div><div id="min-agent-profile-details" class="theme-text-color"></div></div><div id="tawkchat-status-text-container" class="theme-text-color"><div id="tawkchat-status-message"><span id="short-message"></span></div></div></div></div></div>',
					"tawkchat-minified-iframe-element-round": '<div id="tawkchat-minified-box" class="round"><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" class="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><span id="maximizeChat" title="__MAXIMIZE__"><svg id="chat-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z" fill-rule="evenodd" clip-rule="evenodd"/></svg></span><span id="minimizeChatMinifiedBtn" class="icon-close" title="__MINIMIZE__"></span></div></div></div>',
					"tawkchat-chat-bubble-canvas": '<div id="tawkchat-chat-bubble-graphics-container"><canvas id="tawkchat-chat-bubble-canvas"></canvas></div><div id="tawkchat-chat-bubble-close" class="image-canvas-close"></div><div id="tawkchat-chat-bubble-text-container"><p id="tawkchat-chat-bubble-text" class="bubble-text-color"></p></div>',
					"tawkchat-chat-indicator": '<div id="tawkchat-chat-indicator"><p id="tawkchat-chat-indicator-text"></p></div>',
					"tawkchat-chat-bubble-gallery": '<span id="tawkchat-chat-bubble-close" class="image-bubble-close"></span><img src="__IMAGE_SRC__" style="__IMAGE_SIZE__" /><a id="bubble-image" class="gallery-bubble" href="javascript:void(0);"></a>',
					"tawkchat-chat-bubble-upload": '<span id="tawkchat-chat-bubble-close" class="image-bubble-close"></span><img id="bubble-image" src="__IMAGE_SRC__" />',
					"tawkchat-message-preview": '<div id="tawkchat-message-preview-container"><div id="tawkchat-message-preview-close"><div class="icon-close"></div></div><div id="tawkchat-message-preview-messages-container"></div><div id="tawkchat-message-preview-quick-reply-container"><div id="emoji-selection-container"></div><div id="actionsContainer"><div id="file-upload-drop-container"><div id="file-upload-drop-icon-label-container"><span id="file-upload-drop-icon" class="icon-upload"></span><span id="file-upload-drop-label"></span></div></div><fieldset id="textareaWrapper"><div id="textareaContainer" class="additionalPadding"><div id="tooLongMsgNotification"><span class="icon-alert"></span><span id="notifMessageText"></span></div></div><div id="actionButtonsContainer"><div id="hidableActionsWrapper"><div id="rateMainWrapper"><a id="rateChat" href="javascript:void(0);"><span class="icon-vote-up"></span></a><div id="rateContainer"><a id="rateNegative" href="javascript:void(0);" title="__RATE_NEGATIVE__"><span class="icon-vote-down"></span></a><a id="ratePositive" href="javascript:void(0);" title="__RATE_POSITIVE__"><span class="icon-vote-up"></span></a></div></div><a id="uploadFileOption" href="javascript:void(0);" title="__UPLOAD_FILE__"><label for="fileInput"><span class="icon-upload"></span></label></a></div><a id="viewEmoji" href="javascript:void(0);" title="__VIEW_EMOJI__"><span class="icon-happy"></span></a></div></fieldset></div><form enctype="multipart/form-data" id="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label class="upload-file sprite-background" title="Upload File" for="test"></label></form></div></div>',
					"message-preview-item": '<span class="message-preview-close-button icon-close"></span><div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div><div class="messageBody"><div class="message">__MESSAGE__</div><div class="messageInformation"><div class="messageNameContainer"><div class="messageName">__NAME__</div></div><div class="messageTimeContainer"><div class="messageTime">__TIME__</div></div></div></div>',
					"messagePreview-callInfo": '<div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div><div class="mp-callInfoContainer messageBody"><div class="mp-callInfoWrapper"><div class="mp-callIconContainer"><div id="mp-callIconWrapper"><span id="mp-callIcon" class="btn-icon icon-voice-chat"></span></div></div><span id="mp-callInfo">__CALL_INFO__ __CALLER_NAME__</span></div><div class="mp-callInfoElapsedTime">__ELAPSED_TIME__</div></div>',
					"tawkchat-maximized-wrapper": '<div id="innerWrapper" class="border-corner"><div id="headerBoxWrapper" class="border-corner"><div id="headerBox" class="theme-background-color theme-text-color border-corner"><div id="headerAccountStateContainer"><p id="headerAccountState"><span id="shortMessage"></span></p><div id="agentProfileContainer">&nbsp;</div></div><div id="headerBoxControlsContainer"><a id="screenShare" class="headerBoxLink" href="javascript:void(0);" title="__SCREENSHARE__"><span class="icon-desktop-sharing headerBoxIcon"></span></a><a id="voiceCall" class="headerBoxLink" href="javascript:void(0);" title="__VOICECALL__"><span class="icon-voice-chat headerBoxIcon"></span></a><a id="videoCall" class="headerBoxLink" href="javascript:void(0);" title="__VIDEOCALL__"><span class="icon-video-chat headerBoxIcon"></span></a><div class="headerBoxLink"><a id="chatMenu"  href="javascript:void(0);" title="__CHATMENU__"><span class="icon-menu headerBoxIcon"></span></a><div id="chatMenuControls"><div id="chatMenuControlsOverlay"></div><ul><li id="changeName" style="display: none;">__CHANGE_NAME__</li><li id="emailTranscriptOption" style="display: none;"></li><li id="soundOn"></li><li id="soundOff"></li><li id="popoutChat"></li><li id="endChat"></li></ul></div></div><a id="minimizeChat" class="headerBoxLink" href="javascript:void(0);" title="__END__"><span class="icon-close headerBoxIcon"></span></a></div></div></div><div id="contentContainer"><div id="greetingsMainContainer" class="theme-background-color theme-text-color"><div id="greetingsContent"><p id="greetingsText"></p><p id="greetingsWaitTime"></p></div><div id="agentBar"><div id="agentList"></div></div></div><div id="chatPanel"><div id="chatContainerWrapper"><div id="chatContainer"><div id="chatTableWrapper"><div id="chatRowWrapper"><div id="chatCellWrapper"><div id="chatWrapper" class="single-agent"><div id="agentTypingContainer"></div></div></div></div></div><div id="maxFileNotificationContainer" class="hidden"><div id="maxFileNotifHeader"><div id="maxFileNotifIconContainer"><div id="maxFileNotifIconWrapper"></div><span id="maxFileNotifIcon">!</span></div><span id="maxFileNotifLabel"></span><div class="closeButtonContainer"><span class="icon-close" id="closeNumberNotification"></span></div></div><div id="maxFileNotificationMessage"></div><div id="maxFileNumberList"></div></div><div id="maxSizeNotificationContainer" class="hidden"><div id="maxSizeNotifHeader"><div id="maxSizeNotifIconContainer"><div id="maxSizeNotifIconWrapper"></div><span id="maxSizeNotifIcon">!</span></div><span id="maxSizeNotifLabel"></span><div class="closeButtonContainer"><span class="icon-close" id="closeSizeNotification"></span></div></div><div id="maxSizeNotificationMessage"></div><div id="maxFileSizeList"></div></div></div></div><div id="actionsContainer"><fieldset id="textareaWrapper"><div id="textareaContainer" class="additionalPadding"><div id="tooLongMsgNotification"><span class="icon-alert"></span><span id="notifMessageText">__TOO_LONG_MESSAGE__</span></div></div><div id="actionButtonsContainer"><div id="hidableActionsWrapper"><div id="rateMainWrapper"><a id="rateChat" href="javascript:void(0);"><span class="icon-vote-up"></span></a><div id="rateContainer"><a id="rateNegative" href="javascript:void(0);" title="__RATE_NEGATIVE__"><span class="icon-vote-down"></span></a><a id="ratePositive" href="javascript:void(0);" title="__RATE_POSITIVE__"><span class="icon-vote-up"></span></a></div></div><a id="uploadFileOption" href="javascript:void(0);" title="__UPLOAD_FILE__"><label for="fileInput"><span class="icon-upload"></span></label></a></div><a id="viewEmoji" href="javascript:void(0);" title="__VIEW_EMOJI__"><span class="icon-happy"></span></a></div><div id="textareaSubmitContainer"><div class="icon-mobile-submit" id="textareaSubmitButton"></div></div></fieldset></div><div id="file-upload-drop-container"><div id="fileUploadWrapper"><div id="file-upload-drop-icon-label-container"><span id="file-upload-drop-icon" class="icon-upload"></span><span id="file-upload-drop-label"></span></div></div></div><form enctype="multipart/form-data" id="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label class="upload-file sprite-background" title="Upload File" for="test"></label></form></div><div id="__BOTTOM_CONTAINER__"><a id="__TAWK_TO_LINK__" tabindex="-1"></a></div><div id="newMessagesBar"><div id="newMessageContainer"><p id="newMessagesNotification"><a id="newMessagesNotificationLink" title="" class="icon-message"></a><span id="notificationMessageText"></span></p><div id="newMessageArrowDown"></div></div></div><div id="formContainer"></div></div><div id="emoji-selection-container"></div><div id="tawkToContent"><div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="contentContainer"><div class="longFormContainer"><div id="formInnerHeight"><div id="tawkImage"></div><p id="tawkHeader">TAWK.TO</p><div id="tawkContent" class="formMessageField innerTittle"></div></div></div><div class="longFormBottomContainer"><button id="cancelTawkRedirect" class="formButton"></button><button id="tawkRedirect" class="theme-background-color theme-text-color formButton"></button><div class="clear"></div></div></div></div></div></div></div></div></div></div>',
					uploadFailedNotification: '<div class="uploadFailedNotifContainer"><div class="uploadFailedNotifHeader"><div class="uploadFailedNotifIconContainer"><div class="uploadFailedNotifIconWrapper"></div><span class="uploadFailedSizeNotifIcon">!</span></div><span class="uploadFailedNotifLabel">__UPLOAD_FAILED_LABEL__</span></div><div class="uploadFailedNotifMessage">__UPLOAD_FAILED_MESSAGE__</div><div class="uploadFailedRetryContainer"></div></div>',
					"mobile-bottom-round": '<div id="tawkchat-minified-box"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" class="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><div id="tawkchat-status-icon" class="online"><svg id="chat-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z" fill-rule="evenodd" clip-rule="evenodd" /></svg></div></div></div></div>',
					"mobile-bottom-rectangle": '<div id="tawkchat-minified-box"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" class="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><div id="tawkchat-status-icon" class="online"><span id="chat-icon"><svg id="chat-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z" fill-rule="evenodd" clip-rule="evenodd"/></svg></span><span id="tawk-minified-mobile-text" class="text"></span></div></div></div></div>',
					"chat-message-container": '__OWNER_TPL__<div class="clearfix"></div><div class="messageBody clearfix">__CONTENT__</div>',
					"chat-message-owner-agent": '<div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div>',
					"chat-message-owner-visitor": '<div class="ownerNameContainer"><a class="messageOwnerName visitor" href="#">__NAME__</a></div>',
					"agent-typing": '<div id="agentTyping-__MESSAGE_ID__" class="agentChatContainer clearfix"><div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div><div class="clearfix"></div><div class="messageBody clearfix"><div class="message agentTypingIndicator"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div></div>',
					"agent-profile": "__AGENT_PROFILE_IMAGE____AGENT_PROFILE_DETAIL__",
					"agent-profile-image": '<div class="alias-image theme-background-color" style="__IMAGE_URL__;"></div>',
					"agent-profile-detailed": '<div class="agentDetailedInfo"><strong>__NAME__</strong><p>__POSITION__</p></div>',
					"agent-profile-description": '<div class="agentContainer"><div class="agentInformationContainer"><p class="__POSITION_CLASS__">__NAME__</p><p class="position-label" style="display: none;">__POSITION__</p></div></div>',
					"agent-profile-description-noimage": '<div class="agentContainerNoImage"><div class="agentInformationContainerNoImage"><p class="agentInfoNoImage"><b>__NAME__</b><i>__POSITION__</i></p></div></div>',
					"chat-message-row": '<div class="messageWrapper __PENDING__"><div class="message">__MESSAGE__</div></div>__MESSAGE_STATUS_ROW__<div class="clear"></div>',
					"chat-message-status-row": '<div class="clear"></div><div class="time-agent-display"><div class="agent-div __TIME_CLASS__">__NAME__</div><div class="time-div __TIME_CLASS__">__TIME__</div></div>',
					"chat-message-pending-row": '<div class="messageStatusContainer pending"><div class="lds-spinner loader"><div class="spin spin-1"></div><div class="spin spin-2"></div><div class="spin spin-3"></div><div class="spin spin-4"></div><div class="spin spin-5"></div><div class="spin spin-6"></div><div class="spin spin-7"></div><div class="spin spin-8"></div><div class="spin spin-9"></div><div class="spin spin-10"></div><div class="spin spin-11"></div><div class="spin spin-12"></div></div></div>'
				},
				H = {
					undefined: 1,
					"boolean": 1,
					number: 1,
					string: 1
				},
				w = {
					exportProperty: function (a, e, b) {
						a[e] = b
					}
				};
			w.dependencyDetection = function () {
				var a = [];
				return {
					begin: function (e) {
						a.push(e && {
							callback: e,
							distinctDependencies: []
						})
					},
					end: function () {
						a.pop()
					},
					registerDependency: function (e) {
						if (!w.isSubscribable(e)) throw Error("Only subscribable things can act as dependencies");
						if (0 < a.length) {
							var b = a[a.length - 1];
							!b || 0 <= w.utils.arrayIndexOf(b.distinctDependencies, e) || (b.distinctDependencies.push(e), b.callback(e))
						}
					},
					ignore: function (e,
						b, n) {
						try {
							return a.push(null), e.apply(b, n || [])
						} finally {
							a.pop()
						}
					}
				}
			}();
			w.observable = function (a) {
				function e() {
					if (0 < arguments.length) return e.equalityComparer && e.equalityComparer(b, arguments[0]) || (e.valueWillMutate(), b = arguments[0], e.valueHasMutated()), this;
					w.dependencyDetection.registerDependency(e);
					return b
				}
				var b = a;
				w.subscribable.call(e);
				e.peek = function () {
					return b
				};
				e.valueHasMutated = function () {
					e.notifySubscribers(b)
				};
				e.valueWillMutate = function () {
					e.notifySubscribers(b, "beforeChange")
				};
				w.utils.extend(e,
					w.observable.fn);
				w.exportProperty(e, "peek", e.peek);
				w.exportProperty(e, "valueHasMutated", e.valueHasMutated);
				w.exportProperty(e, "valueWillMutate", e.valueWillMutate);
				return e
			};
			w.subscribable = function () {
				this._subscriptions = {};
				w.utils.extend(this, w.subscribable.fn);
				w.exportProperty(this, "subscribe", this.subscribe);
				w.exportProperty(this, "getSubscriptionsCount", this.getSubscriptionsCount)
			};
			w.subscribable.fn = {
				subscribe: function (a, e, b) {
					b = b || "change";
					a = e ? a.bind(e) : a;
					var n = new w.subscription(this, a, function () {
						w.utils &&
							w.utils.arrayRemoveItem && w.utils.arrayRemoveItem(this._subscriptions[b], n)
					}.bind(this));
					this._subscriptions[b] || (this._subscriptions[b] = []);
					this._subscriptions[b].push(n);
					return n
				},
				notifySubscribers: function (a, e) {
					e = e || "change";
					if (this.hasSubscriptionsForEvent(e)) {
						var b = this._subscriptions[e],
							n;
						n = 0;
						for (var B = this._subscriptions[e].length; n < B; ++n) b = this._subscriptions[e].slice(0), (b = b[n]) && !0 !== b.isDisposed && b.callback(a)
					}
				},
				hasSubscriptionsForEvent: function (a) {
					return this._subscriptions[a] && this._subscriptions[a].length
				},
				getSubscriptionsCount: function () {
					var a = 0;
					w.utils.objectForEach(this._subscriptions, function (e, b) {
						a += b.length
					});
					return a
				},
				unsubscribe: function (a, e) {
					w.utils.arrayRemoveItem(this._subscriptions[e || "change"], a)
				}
			};
			w.isSubscribable = function (a) {
				return null !== a && "function" === typeof a.subscribe && "function" === typeof a.notifySubscribers
			};
			w.subscription = function (a, e, b) {
				this.target = a;
				this.callback = e;
				this.disposeCallback = b;
				w.exportProperty(this, "dispose", this.dispose)
			};
			w.subscription.prototype.dispose = function () {
				this.isDisposed = !0;
				this.disposeCallback()
			};
			w.observable.fn = {
				equalityComparer: function (a, e) {
					return null === a || typeof a in H ? a === e : !1
				}
			};
			var O = w.observable.protoProperty = "__tw_proto__";
			w.observable.fn[O] = w.observable;
			w.hasPrototype = function (a, e) {
				return null === a || void 0 === a || void 0 === a[O] ? !1 : a[O] === e ? !0 : w.hasPrototype(a[O], e)
			};
			w.isObservable = function (a) {
				return w.hasPrototype(a, w.observable)
			};
			w.utils = {
				arrayIndexOf: function (a, e) {
					if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, e);
					for (var b =
							0, n = a.length; b < n; b++)
						if (a[b] === e) return b;
					return -1
				},
				extend: function (a, e) {
					if (e)
						for (var b in e) e.hasOwnProperty(b) && (a[b] = e[b]);
					return a
				},
				arrayRemoveItem: function (a, e) {
					var b = w.utils.arrayIndexOf(a, e);
					0 <= b && a.splice(b, 1)
				},
				objectForEach: function (a, e) {
					for (var b in a) a.hasOwnProperty(b) && e(b, a[b])
				}
			};
			(function (a) {
				function e(a, e) {
					var b = a.split("@"),
						f = "";
					1 < b.length && (f = b[0] + "@", a = b[1]);
					a = a.replace(r, ".");
					for (var b = a.split("."), n = b.length, B = []; n--;) B[n] = e(b[n]);
					b = B.join(".");
					return f + b
				}

				function b(a) {
					for (var e = [], f = 0, n = a.length, B, c; f < n;) B = a.charCodeAt(f++), 55296 <= B && 56319 >= B && f < n ? (c = a.charCodeAt(f++), 56320 == (c & 64512) ? e.push(((B & 1023) << 10) + (c & 1023) + 65536) : (e.push(B), f--)) : e.push(B);
					return e
				}

				function n(a) {
					var e, n, q, r, u, x, y, A, z, C = [],
						D, xa, va;
					a = b(a);
					D = a.length;
					e = m;
					n = 0;
					u = k;
					for (x = 0; x < D; ++x) z = a[x], 128 > z && C.push(w(z));
					for ((q = r = C.length) && C.push(p); q < D;) {
						y = B;
						for (x = 0; x < D; ++x) z = a[x], z >= e && z < y && (y = z);
						xa = q + 1;
						if (y - e > v((B - n) / xa)) throw new RangeError(s.overflow);
						n += (y - e) * xa;
						e = y;
						for (x = 0; x < D; ++x) {
							z = a[x];
							if (z < e && ++n > B) throw new RangeError(s.overflow);
							if (z == e) {
								A = n;
								for (y = c;; y += c) {
									z = y <= u ? d : y >= u + g ? g : y - u;
									if (A < z) break;
									va = A - z;
									A = c - z;
									C.push(w(z + va % A + 22 + 75 * (26 > z + va % A) - 0));
									A = v(va / A)
								}
								C.push(w(A + 22 + 75 * (26 > A) - 0));
								u = xa;
								y = 0;
								n = q == r ? v(n / l) : n >> 1;
								for (n += v(n / u); n > t * g >> 1; y += c) n = v(n / t);
								u = v(y + (t + 1) * n / (n + h));
								n = 0;
								++q
							}
						}++n;
						++e
					}
					return C.join("")
				}
				var B = 2147483647,
					c = 36,
					d = 1,
					g = 26,
					h = 38,
					l = 700,
					k = 72,
					m = 128,
					p = "-",
					q = /[^\x20-\x7E]/,
					r = /[\x2E\u3002\uFF0E\uFF61]/g,
					s = {
						overflow: "Overflow: input needs wider integers to process",
						"not-basic": "Illegal input >= 0x80 (not a basic code point)",
						"invalid-input": "Invalid input"
					},
					t = c - d,
					v = Math.floor,
					w = String.fromCharCode;
				a.punycode = {
					version: "1.4.1",
					ucs2: {
						decode: b
					},
					encode: n,
					toASCII: function (a) {
						return e(a, function (a) {
							return q.test(a) ? "xn--" + n(a) : a
						})
					}
				}
			})(b);
			k = {};
			d.$_Tawk = d.$_Tawk || {};
			d.Tawk_API = d.Tawk_API || {};
			if ("object" === typeof d.$_Tawk_API)
				for (var W in d.$_Tawk_API) d.$_Tawk_API.hasOwnProperty(W) && (d.Tawk_API[W] = d.$_Tawk_API[W]);
			if ("function" !== typeof d.CustomEvent) {
				var P = function (a, e) {
					e = e || {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					var b = document.createEvent("CustomEvent");
					b.initCustomEvent(a, e.bubbles, e.cancelable, e.detail);
					return b
				};
				P.prototype = d.Event.prototype;
				b.CustomEventIE = P
			}
			u.begin = function (a) {
				b.main.begin(a)
			};
			u.init = function (a) {
				b.main.init(a)
			};
			var X = function () {
				k = {
					disableSound: !!Tawk_API.disableSound,
					embedded: Tawk_API.embedded || null,
					visitor: Tawk_API.visitor || null,
					disableMobileBackHistory: !!Tawk_API.disableMobileBackHistory,
					isPopup: !!Tawk_API.isPopup,
					onBeforeLoad: {
						eventName: "tawkBeforeLoad",
						func: Tawk_API.onBeforeLoad
					},
					onLoad: {
						eventName: "tawkLoad",
						func: Tawk_API.onLoad
					},
					onStatusChange: {
						eventName: "tawkStatusChange",
						func: Tawk_API.onStatusChange
					},
					onChatMaximized: {
						eventName: "tawkChatMaximized",
						func: Tawk_API.onChatMaximized
					},
					onChatMinimized: {
						eventName: "tawkChatMinimized",
						func: Tawk_API.onChatMinimized
					},
					onChatHidden: {
						eventName: "tawkChatHidden",
						func: Tawk_API.onChatHidden
					},
					onChatStarted: {
						eventName: "tawkChatStarted",
						func: Tawk_API.onChatStarted
					},
					onChatEnded: {
						eventName: "tawkChatEnded",
						func: Tawk_API.onChatEnded
					},
					onPrechatSubmit: {
						eventName: "tawkPrechatSubmit",
						func: Tawk_API.onPrechatSubmit
					},
					onOfflineSubmit: {
						eventName: "tawkOfflineSubmit",
						func: Tawk_API.onOfflineSubmit
					},
					onChatMessageVisitor: {
						eventName: "tawkChatMessageVisitor",
						func: Tawk_API.onChatMessageVisitor
					},
					onChatMessageAgent: {
						eventName: "tawkChatMessageAgent",
						func: Tawk_API.onChatMessageAgent
					},
					onChatMessageSystem: {
						eventName: "tawkChatMessageSystem",
						func: Tawk_API.onChatMessageSystem
					},
					onAgentJoinChat: {
						eventName: "tawkAgentJoinChat",
						func: Tawk_API.onAgentJoinChat
					},
					onAgentLeaveChat: {
						eventName: "tawkAgentLeaveChat",
						func: Tawk_API.onAgentLeaveChat
					},
					onChatSatisfaction: {
						eventName: "tawkChatSatisfaction",
						func: Tawk_API.onChatSatisfaction
					},
					onVisitorNameChanged: {
						eventName: "tawkVisitorNameChanged",
						func: Tawk_API.onVisitorNameChanged
					},
					onFileUpload: {
						eventName: "tawkFileUpload",
						func: Tawk_API.onFileUpload
					},
					onTagsUpdated: {
						eventName: "tawkTagsUpdated",
						func: Tawk_API.onTagsUpdated
					},
					onUnreadCountChanged: {
						eventName: "tawkUnreadCountChanged"
					},
					triggerApiHandlers: function (a, e) {
						var b = k[a];
						if (void 0 !== b) {
							if ("onBeforeLoad" === a) {
								if (Tawk_API.onBeforeLoaded) return;
								Tawk_API.onBeforeLoaded = !0
							} else if ("onLoad" === a) {
								if (Tawk_API.onLoaded) return;
								Tawk_API.onLoaded = !0
							}
							this.dispatch(b.eventName, e);
							if ("function" === typeof b.func) try {
								b.func(e)
							} catch (n) {}
						}
					},
					dispatch: function (a, e) {
						var f;
						a && (f = "function" === typeof d.CustomEvent ? new CustomEvent(a, {
							detail: e
						}) : new b.CustomEventIE(a, {
							detail: e
						}), d.dispatchEvent(f))
					}
				}
			};
			u.maximize = Tawk_API.maximize = function () {
				u.ready && b.sessionHandler.notifyWindowState("max")
			};
			u.minimize = Tawk_API.minimize = function () {
				u.ready && b.sessionHandler.notifyWindowState("min")
			};
			u.toggle =
				Tawk_API.toggle = function () {
					u.ready && b.viewHandler.toggleWidget()
				};
			u.popup = Tawk_API.popup = function () {
				u.ready && b.viewHandler.popoutWidget()
			};
			u.getWindowType = Tawk_API.getWindowType = function () {
				if (u.ready) return c.isEmbedded ? "embed" : c.isPopup ? "popup" : "inline"
			};
			u.showWidget = Tawk_API.showWidget = function () {
				u.ready && b.viewHandler.showWidget()
			};
			u.hideWidget = Tawk_API.hideWidget = function () {
				u.ready && b.viewHandler.hideWidget()
			};
			u.toggleVisibility = Tawk_API.toggleVisibility = function () {
				u.ready && b.viewHandler.toggleVisibility()
			};
			u.getStatus = Tawk_API.getStatus = function () {
				if (u.ready) return r.pageStatus()
			};
			u.isChatMaximized = Tawk_API.isChatMaximized = function () {
				if (u.ready) return "max" === r.chatWindowState()
			};
			u.isChatMinimized = Tawk_API.isChatMinimized = function () {
				if (u.ready) return "min" === r.chatWindowState()
			};
			u.isChatHidden = Tawk_API.isChatHidden = function () {
				if (u.ready) return b.viewHandler.isWidgetHidden()
			};
			u.isChatOngoing = Tawk_API.isChatOngoing = function () {
				if (u.ready) return b.chatHandler.isChatOngoing()
			};
			u.isVisitorEngaged = Tawk_API.isVisitorEngaged =
				function () {
					if (u.ready) return b.chatHandler.isVisitorEngaged()
				};
			u.endChat = Tawk_API.endChat = function () {
				u.ready && b.chatHandler.triggerEndChat()
			};
			u.addEvent = Tawk_API.addEvent = function (a, e, f) {
				b.sessionHandler.addEvent(a, e, f)
			};
			u.setAttributes = Tawk_API.setAttributes = function (a, e) {
				b.sessionHandler.setAttributes(a, !0, e)
			};
			u.addTags = Tawk_API.addTags = function (a, e) {
				b.sessionHandler.addTags(a, e)
			};
			u.removeTags = Tawk_API.removeTags = function (a, e) {
				b.sessionHandler.removeTags(a, e)
			};
			u.widgetPosition = Tawk_API.widgetPosition =
				function () {
					if (u.ready) return c.chatPosition()
				};
			u.setMobilePosition = Tawk_API.setMobilePosition = function (a) {
				var e = "br bl cr cl tr tl".split(" ");
				u.ready && -1 !== e.indexOf(a) && (s && s.mobileBrowserName) && c.chatPosition(a)
			};
			var s = {
					vendor: "",
					version: 0,
					isIE: !1,
					isIE6: !1,
					isIE8: !1,
					windowId: null,
					mobileBrowserName: null,
					html5audio: {},
					isPlaceholderSupported: !0
				},
				c = {
					widgetId: "default",
					isPopup: !1,
					isEmbedded: !1,
					soundOn: w.observable(!0),
					showAgentBar: !0,
					showWaitTime: !0,
					showPreChatForm: !1,
					showOfflineForm: !0,
					hideWidget: !1,
					hideWidgetOnLoad: !1,
					hideWidgetOnOffline: !1,
					greetings: {},
					prechatOptions: {},
					headerBgColor: null,
					headerTxtColor: null,
					isLegacyLayout: !1,
					whiteLabel: w.observable(),
					mobileWidget: w.observable("round"),
					desktopWidget: w.observable("full"),
					chatBubble: w.observable(),
					chatPosition: w.observable("br"),
					maximizedDimensions: w.observable({
						width: 0,
						height: 0
					}),
					minimizedDimensions: w.observable({
						width: 0,
						height: 0,
						position: "br"
					}),
					showMessagePreview: w.observable(!0),
					showUploads: w.observable(!0),
					showRating: w.observable(!0),
					showAgentTyping: !0,
					showVisitorTyping: w.observable(!0),
					showEmoji: w.observable(!0),
					showUnreadInTab: w.observable(!0),
					onClickAction: "max",
					widgetVersion: 0,
					locale: "en",
					schedule: null,
					scheduleTimezone: null,
					isTopPositioned: function () {
						return "tr" === this.chatPosition() || "tl" === this.chatPosition()
					},
					isBottomPositioned: function () {
						return "br" === this.chatPosition() || "bl" === this.chatPosition()
					},
					isCenterPositioned: function () {
						return "cr" === this.chatPosition() || "cl" === this.chatPosition()
					},
					isRightPositioned: function () {
						return "cr" === this.chatPosition() ||
							"tr" === this.chatPosition() || "br" === this.chatPosition()
					},
					isLeftPositioned: function () {
						return "cl" === this.chatPosition() || "tl" === this.chatPosition() || "bl" === this.chatPosition()
					},
					isDesktopRectangle: function () {
						return "min" !== this.desktopWidget()
					},
					agentTextBgColor: null,
					agentTextColor: null,
					visitorTextBgColor: null,
					visitorTextColor: null,
					agentTextBorderColor: null,
					topCorner: null,
					bottomCorner: null,
					widgetOffsetX: 0,
					widgetOffsetY: 0,
					isHeaderCompact: null,
					maxStyle: w.observable(),
					minStyle: w.observable(),
					mobMaxStyle: w.observable(),
					mobMinStyle: w.observable(),
					isRTL: w.observable(!1),
					webRTCSettings: w.observable(),
					brandingRedirect: w.observable(),
					key: -1987780763
				},
				z = {
					uuid: null,
					uuidVer: 0,
					visitorId: "",
					name: w.observable(),
					displayName: w.observable(),
					email: w.observable(),
					transcriptEmail: "",
					uuids: []
				},
				L = {
					pageId: null,
					tawkId: "",
					pageName: w.observable(),
					isStable: !0
				},
				v = {
					chatSynced: !1,
					chatBuffer: [],
					chatVersion: 0,
					chatDepartment: "any",
					agents: {},
					agentProfiles: {},
					profiles: {},
					rating: w.observable(),
					chatHistory: [],
					chatOrder: 0,
					chatEndVersion: 1,
					chatId: null
				},
				r = {
					transferKey: "",
					sessionKey: "",
					transferedSession: !1,
					currentVersion: 694,
					criticalVersion: 0,
					serverVersion: 0,
					agentImgUrl: "https://s3.amazonaws.com/tawk-to-pi",
					visitorAppServer: "https://va.tawk.to",
					visitorSocketServer: "",
					chatWindowState: w.observable("min"),
					pageStatus: w.observable(),
					pageStatusVersion: 0,
					prechatFormSubmitted: w.observable(!1),
					waitTime: 6E4,
					chatBubbleClosed: w.observable(!1),
					restarted: !1,
					departments: []
				},
				Ua = {
					chat_sound: "https://static-v.tawk.to/a-v3/audio/chat_sound.mp3"
				},
				Va = {
					chat_sound: "https://static-v.tawk.to/a-v3/audio/chat_sound.ogg"
				},
				Wa = {
					chat_sound: "https://static-v.tawk.to/a-v3/audio/chat_sound.wav"
				};
			(function () {
				var a = !1,
					e = /xyz/.test(function () {
						xyz
					}) ? /\b_super\b/ : /.*/;
				this.TawkClass = function () {};
				TawkClass.extend = function (b) {
					function n() {
						!a && this.init && this.init.apply(this, arguments)
					}
					var B = this.prototype;
					a = !0;
					var c = new this;
					a = !1;
					for (var d in b) c[d] = "function" === typeof b[d] && "function" === typeof B[d] && e.test(b[d]) ? function (a, e) {
						return function () {
							var b = this._super;
							this._super = B[a];
							var f = e.apply(this, arguments);
							this._super = b;
							return f
						}
					}(d,
						b[d]) : b[d];
					n.prototype = c;
					n.prototype.constructor = n;
					n.extend = arguments.callee;
					return n
				}
			})();
			var A = function () {
				this.br = "<br/>";
				this.regAlphaNumeric = /^[a-z0-9\-]{1,50}$/i;
				this.regNameMach = /^V[0-9]{16}$/;
				this.regTrim = /^\s+|\s+$/g;
				this.regDate = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
				this.regEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/i;
				this.regSurvey = /\[option\](.*?)(<br\/>|$)/g;
				this.regSurveyQuestion = /^(.*?)\[option\]/g;
				this.regOption = /\[option\]/g;
				this.regBr = /<br\/>/;
				this.regMatchUrl = RegExp('(?:^(?:(?:[a-z]+:)?//)?(?:\\S+(?::\\S*)?@)?(?:localhost|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)', "i");
				this.regMatchIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\/\?#]+)+)\b/gi;
				this.regEmailMatch = /^((mailto:){0,1}[a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]+)$/;
				this.regLineBreaks = /(\r\n|\n|\r)/gm;
				this.decodedAmp = "&";
				this.decodedQuote = '"';
				this.decodedApos = "'";
				this.decodedLess = "<";
				this.decodedGreat = ">";
				this.encodedQuote = "&quot;";
				this.encodedApos = "&#39;";
				this.encodedLess = "&lt;";
				this.encodedGreat = "&gt;";
				this.encodedAmp = "&amp;";
				this.rtlLangTab = ["ar", "he", "fa"];
				this.decodedAmpRegex = RegExp(this.decodedAmp, "g");
				this.decodedQuoteRegex = RegExp(this.decodedQuote, "g");
				this.decodedAposRegex =
					RegExp(this.decodedApos, "g");
				this.decodedLessRegex = RegExp(this.decodedLess, "g");
				this.decodedGreatRegex = RegExp(this.decodedGreat, "g");
				this.encodedQuoteRegex = RegExp(this.encodedQuote, "g");
				this.encodedAposRegex = RegExp(this.encodedApos, "g");
				this.encodedLessRegex = RegExp(this.encodedLess, "g");
				this.encodedGreatRegex = RegExp(this.encodedGreat, "g");
				this.encodedAmpRegex = RegExp(this.encodedAmp, "g");
				this.connectionUrl = "https://video.tawk.to"
			};
			A.prototype.createElement = function (a, e, b, n, B) {
				var c;
				a = a.createElement(e);
				b = b || {};
				for (c in b) a[c] = b[c];
				B && "iframe" !== e && (a.innerHTML = B);
				n && (a.style.cssText = n);
				return a
			};
			A.prototype.getDocument = function (a) {
				return a.contentWindow ? a.contentWindow.document : a.contentDocument ? a.contentDocument : a.document ? a.document : null
			};
			A.prototype.parseQueryString = function (a) {
				var e, b, n, B = {};
				n = (a ? a.replace(/(.*)\?/, "") : d.location.search.substring(1)).split("&");
				a = 0;
				for (e = n.length; a < e; a += 1) b = n[a].split("="), B[b[0]] = b[1];
				return B
			};
			A.prototype.createQueryString = function (a) {
				var e, b = [];
				for (e in a) a.hasOwnProperty(e) &&
					b.push(encodeURIComponent(e) + "=" + encodeURIComponent(a[e]));
				return b.join("&")
			};
			A.prototype.getReloadedScript = function () {
				var a, e, b = document.getElementsByTagName("script"),
					n = null;
				a = 0;
				for (e = b.length; a < e; a++) b[a].id && -1 !== b[a].id.indexOf("TawkScript") && (n = b[a]);
				return n
			};
			A.prototype.trim = function (a) {
				return this.isString(a) ? String.prototype.trim ? a.trim().toString() : a.replace(this.regTrim, "") : null
			};
			A.prototype.isString = function (a) {
				return void 0 === a || "string" !== typeof a ? !1 : !0
			};
			A.prototype.isEmail = function (a) {
				return this.regEmail.test(a)
			};
			A.prototype.isArray = Array.isArray || function (a) {
				return "[object Array]" === Object.prototype.toString.call(a)
			};
			A.prototype.parseVisitorName = function (a) {
				return this.isGeneratedName(a) ? b.languageParser.translate("chat", "defaultName") : a
			};
			A.prototype.generateRandomString = function (a) {
				var e, b = [];
				a = a || 6;
				for (e = 0; e < a; e++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random())));
				return b.join("")
			};
			A.prototype.computedStyle = function (a, e) {
				var b;
				if (!a || !e) return null;
				if (a.currentStyle) b = a.currentStyle[e];
				else try {
					b = getComputedStyle(a, null).getPropertyValue(e)
				} catch (n) {
					b = "none"
				}
				"width" === e && "auto" === b && (b = a.clientWidth);
				return "" + b
			};
			A.prototype.parseChatTime = function (a) {
				var e = this.getDateFromUTC(a);
				a = e.getHours();
				e = e.getMinutes();
				10 > a && (a = "0" + a);
				10 > e && (e = "0" + e);
				return a + ":" + e
			};
			A.prototype.getDateFromUTC = function (a) {
				if (a instanceof Date) return a;
				a = this.regDate.exec(a);
				return new Date(Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6], a[7]))
			};
			A.prototype.rawEncode = function (a) {
				return a.replace(this.decodedAmpRegex,
					this.encodedAmp).replace(this.decodedQuoteRegex, this.encodedQuote).replace(this.decodedAposRegex, this.encodedApos).replace(this.decodedLessRegex, this.encodedLess).replace(this.decodedGreatRegex, this.encodedGreat)
			};
			A.prototype.rawDecode = function (a) {
				return a.replace(this.encodedQuoteRegex, this.decodedQuote).replace(this.encodedAposRegex, this.decodedApos).replace(this.encodedLessRegex, this.decodedLess).replace(this.encodedGreatRegex, this.decodedGreat).replace(this.encodedAmpRegex, this.decodedAmp)
			};
			A.prototype.getMilliseconds =
				function (a) {
					a instanceof Date || (a = this.regDate.exec(a), a = new Date(Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6], a[7])));
					return a.getTime()
				};
			A.prototype.capitalize = function (a) {
				return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
			};
			A.prototype.getDepartmentStatus = function (a) {
				var e, b, n = r.departments,
					B = "",
					c = !0,
					d = "";
				if ("any" === a) return {
					status: "",
					isOnline: !0,
					name: ""
				};
				e = 0;
				for (b = n.length; e < b; e++)
					if (n[e].did === a) {
						c = "online" === n[e].st;
						B = n[e].st;
						d = n[e].n;
						break
					}
				return {
					status: B,
					isOnline: c,
					name: d
				}
			};
			A.prototype.getElementsByClassName =
				function (a, e) {
					var b, n, B, c;
					if (a.getElementsByClassName) return a.getElementsByClassName(e);
					B = a.getElementsByTagName("*");
					c = [];
					b = 0;
					for (n = B.length; b < n; b++) - 1 !== B[b].className.indexOf(e) && c.push(B[b]);
					return c
				};
			A.prototype.insertScript = function (a, e, b) {
				var n = document.getElementsByTagName("script")[0],
					c = document.createElement("script");
				c.async = !0;
				c.src = a;
				c.charset = "UTF-8";
				c.setAttribute("crossorigin", "*");
				e && (c.id = e);
				b ? n.parentNode.insertBefore(c, n) : n.parentNode.appendChild(c)
			};
			A.prototype.isPlaceholderSupported =
				function () {
					return "placeholder" in document.createElement("input")
				};
			A.prototype.togglePlaceholderText = function (a, e, f) {
				b.eventHandler.listen(a, "focus", function (a) {
					this.value === e && (this.value = "")
				}, f + "inputfocus");
				b.eventHandler.listen(a, "blur", function () {
					"" === this.value && (this.value = e)
				}, f + "inputblur")
			};
			A.prototype.redraw = function (a) {
				var e = a.style.display;
				a.style.display = "none !important";
				a.style.display = e + " !important"
			};
			A.prototype.isTouchDevice = function () {
				try {
					return document.createEvent("TouchEvent"), !0
				} catch (a) {
					return !1
				}
			};
			A.prototype.shadeColor = function (a, e) {
				var b = "#",
					n, c;
				a = String(a).replace(/[^0-9a-f]/gi, "");
				6 > a.length && (a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2));
				e = e || 0;
				for (c = 0; 6 > c; c += 2) n = parseInt(a[c] + "" + a[c + 1], 16), n = Math.round(Math.min(Math.max(0, n + n * e), 255)).toString(16), b += ("00" + n).substring(n.length);
				return b
			};
			A.prototype.getContrast = function (a) {
				a = a.replace("#", "");
				6 > a.length && (a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2));
				return 8388607.5 <
					parseInt(a, 16) ? "white" : "black"
			};
			A.prototype.getElementsByTagName = function (a, e) {
				for (var b = [], n = a.getElementsByTagName(e), c = 0; c < n.length; c++) b.push(n[c]);
				return b
			};
			A.prototype.chatElementInView = function (a) {
				var e = b.viewHandler.chatContainer.getElementById("chatContainer");
				return !!(a.offsetTop >= e.scrollTop && a.offsetTop <= e.scrollTop + e.offsetHeight && 0 !== a.clientWidth && 0 !== a.clientHeight)
			};
			A.prototype.formatFileSize = function (a) {
				var e = "Bytes KB MB GB TB PB EB ZB YB".split(" ");
				a = parseInt(a, 10);
				if (!a) return "0Bytes";
				for (var b = 1; b < e.length; b++)
					if (a < Math.pow(1024, b)) return Math.round(100 * (a / Math.pow(1024, b - 1))) / 100 + e[b - 1];
				return a
			};
			A.prototype.isFileInputSupported = function () {
				if (x.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
				var a = document.createElement("input");
				a.type = "file";
				return !a.disabled
			};
			A.prototype.escapeTemplateReplacement = function (a, e) {
				for (var b = 0; b < e.length; b++) {
					var n = e[b],
						c = n.textReplace;
					"string" === typeof c && (c = c.replace(/\$/g, "$$$"));
					a = a.replace(n.placeholder, c)
				}
				return a
			};
			A.prototype.getGenericStyle = function (a) {
				return ["outline                     : " + (a.outline ? a.outline : "none") + " !important; ", "visibility                  : " + (a.visibility ? a.visibility : "visible") + " !important; ", "resize                      : " + (a.resize ? a.resize : "none") + " !important; ", "box-shadow                  : " + (a.boxshadow ? a.boxshadow : "none") + " !important; ", "overflow                    : " + (a.overflow ?
						a.overflow : "visible") + " !important; ", "background                  : " + (a.background ? a.background : "none") + " !important; ", "opacity                     : " + (a.opacity ? a.opacity : "1") + " !important; ", "filter                      : alpha(opacity=" + (a.opacity ? 100 * a.opacity : "100") + ") !important; ", "-ms-filter                  : progid:DXImageTransform.Microsoft.Alpha(Opacity" + (a.opacity ? a.opacity : "1") + ") !important; ", "-moz-opacity                : " + (a.opacity ? a.opacity : "1") + " !important; ", "-khtml-opacity              : " +
					(a.opacity ? a.opacity : "1") + " !important; ", "top                         : " + (a.top ? a.top : "auto") + " !important; ", "right                       : " + (a.right ? a.right : "auto") + " !important; ", "bottom                      : " + (a.bottom ? a.bottom : "auto") + " !important; ", "left                        : " + (a.left ? a.left : "auto") + " !important; ", "position                    : " + (a.position ? a.position : "absolute") + " !important; ", "border                      : " + (a.border ? a.border : "0") + " !important; ", "min-height                  : " +
					(a.minheight ? a.minheight : "auto") + " !important; ", "min-width                   : " + (a.minwidth ? a.minwidth : "auto") + " !important; ", "max-height                  : " + (a.maxheight ? a.maxheight : "none") + " !important; ", "max-width                   : " + (a.maxwidth ? a.maxwidth : "none") + " !important; ", "padding                     : " + (a.padding ? a.padding : "0") + " !important; ", "margin                      : " + (a.margin ? a.margin : "0") + " !important; ", "-moz-transition-property    : " + (a.transition ? a.transition : "none") +
					" !important; ", "-webkit-transition-property : " + (a.transition ? a.transition : "none") + " !important; ", "-o-transition-property      : " + (a.transition ? a.transition : "none") + " !important; ", "transition-property         : " + (a.transition ? a.transition : "none") + " !important; ", "transform                   : " + (a.transform ? a.transform : "none") + " !important; ", "-webkit-transform           : " + (a.transform ? a.transform : "none") + " !important; ", "-ms-transform               : " + (a.transform ? a.transform : "none") + " !important; ",
					"width                       : " + (a.width ? a.width : "auto") + " !important; ", "height                      : " + (a.height ? a.height : "auto") + " !important; ", "display                     : " + (a.display ? a.display : "block") + " !important; ", "z-index                     : " + (a.zindex ? a.zindex : "none") + " !important; ", "background-color            : " + (a.backgroundcolor ? a.backgroundcolor : "transparent") + " !important; ", "cursor                      : " + (a.cursor ? a.cursor : "auto") + " !important; ", "float                       : " +
					(a["float"] ? a["float"] : "none") + " !important; ", "border-radius               : " + (a.borderRadius ? a.borderRadius : "unset") + " !important; ", "pointer-events              : auto !important"
				].join("").replace(/\s/gm, "")
			};
			A.prototype.isGeneratedName = function (a) {
				return this.regNameMach.test(a)
			};
			A.prototype.getRotateStyling = function (a, e) {
				var b = "rotate(" + a + "deg) translateZ(0px)";
				return {
					transform: b,
					"-moz-transform": b,
					"-webkit-transform": b,
					"-o-transform": b,
					"-ms-transform": b,
					"transform-origin": e,
					"-moz-transform-origin": e,
					"-webkit-transform-origin": e,
					"-o-transform-origin": e,
					"-ms-transform-origin": e
				}
			};
			A.prototype.blurElements = function (a) {
				for (var b = 0; b < a.length; b++) a[b].blur()
			};
			A.prototype.transformGreetings = function (a) {
				for (var b = /\[([^)]+)\]/, f = /\(([^)]+)\)/, n = /\[[^\]\(\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b){1}[^\]\(\)]+\)/i, c = "_blank", d = a, g, h; null !== (g = n.exec(d)) && (h = b.exec(g[0]), g = f.exec(g[0]), g[0].indexOf("(mailto:") || (c = "_top"), d = d.replace(h[0] + g[0], '<a target="' + c + '" href="' + g[1] + '" class="link">' + h[1] +
						"</a>"), d !== a););
				return d
			};
			A.prototype.checkWhiteLabelLink = function (a, e, f) {
				var n = 1E4 * Math.random(),
					B = this,
					d = b.viewHandler.chatContainer,
					g, h, k = null,
					k = function () {
						if (e.label !== a.innerHTML || e.url && e.url !== a.href || !e.url && a.href || e.id !== a.id || !d.getElementById(a.id) || e.cssText !== a.style.cssText || l.h(a.innerHTML) !== c.key) B.whiteLabelUnexpectedIssueLogged || (b.loggingHandler.logIncident("White label element has changed unexpectedly", {
								pageId: z.uuid
							}), B.whiteLabelUnexpectedIssueLogged = !0), a.id = e.id, a.innerHTML =
							e.label, a.style.cssText = e.cssText, null !== e.url ? a.href = e.url : a.removeAttribute("href"), !d.getElementById(e.parentElem.id) && e.grandParentName && (g = d.getElementById(e.grandParentName), e.siblingName && (h = d.getElementById(e.siblingName)) && g && g.insertBefore(e.parentElem, h)), g = d.getElementById(e.parentElem.id), !d.getElementById(a.id) && g && g.appendChild(a);
						B.checkWhiteLabelLink(a, e, f)
					};
				f ? this.messagePreviewCheckWhiteLabelRef = setTimeout(k, n) : this.checkWhiteLabelRef = setTimeout(k, n)
			};
			A.prototype.applyWhiteLabelSettings =
				function (a, b, f) {
					f ? clearTimeout(this.messagePreviewCheckWhiteLabelRef) : clearTimeout(this.checkWhiteLabelRef);
					null === b.url ? a.removeAttribute("href") : (a.href = b.url, b.url = a.href);
					c.whiteLabel() && null !== b.url && (a.target = "_blank");
					a.innerHTML = b.label;
					a.style.cssText += ";color:" + b.textColor + " !important";
					b.cssText = a.style.cssText;
					this.checkWhiteLabelLink(a, b, f)
				};
			A.prototype.transformLabel = function (a) {
				var b;
				(b = a.match(/_[^_]+_/gi)) && 0 < b.length && b.forEach(function (b) {
					var e;
					e = b.indexOf("_");
					var c = b.lastIndexOf("_");
					e = b.substring(0, e) + "<i>" + b.substring(e + 1, c) + "</i>" + b.substring(c + 1, b.length);
					a = a.replace(b, e)
				});
				(b = a.match(/\*[^*]+\*/gi)) && 0 < b.length && b.forEach(function (b) {
					var e;
					e = b.indexOf("*");
					var c = b.lastIndexOf("*");
					e = b.substring(0, e) + "<b>" + b.substring(e + 1, c) + "</b>" + b.substring(c + 1, b.length);
					a = a.replace(b, e)
				});
				return a
			};
			A.prototype.getRandomName = function () {
				return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(52 * Math.random()) + this.generateRandomString() + "-" + (new Date).getTime()
			};
			A.prototype.insertRandomTagsBeforeAndAfter =
				function (a, b, f) {
					var n = Math.floor(3 * Math.random() + 1),
						c;
					for (c = 0; c < n; c++) {
						var d = document.createElement(f);
						d.id = l.getRandomName();
						b.insertBefore(d, a)
					}
					n = Math.floor(3 * Math.random() + 1);
					for (c = 0; c < n; c++) a = document.createElement(f), a.id = l.getRandomName(), b.appendChild(a)
				};
			A.prototype.getWebRTCToken = function (a, e, f) {
				if (!this.hasWebRTC()) return f(!0);
				var n = this;
				a = {
					video: a,
					screen: e
				};
				f = f || function () {};
				this.webrtcWin = d.open("", "");
				b.socketManager.sendToConnector("getWebRTCToken", a, function (a, b) {
					if (a) return n.webrtcWin.close(),
						f(!0, a);
					n.webrtcWin.location.href = n.connectionUrl + "/v2/call?token=" + b.data.token;
					f()
				})
			};
			A.prototype.rejectCall = function (a, e) {
				var f = {
					callId: a
				};
				e = e || function () {};
				b.socketManager.sendToConnector("declineCall", f, function () {
					e()
				})
			};
			A.prototype.disconnectWebRTC = function () {
				this.webrtcWin && this.webrtcWin.close()
			};
			A.prototype.debounce = function (a, b, f) {
				var n;
				return function () {
					var c = this,
						d = arguments,
						g = f && !n;
					clearTimeout(n);
					n = setTimeout(function () {
						n = null;
						f || a.apply(c, d)
					}, b);
					g && a.apply(c, d)
				}
			};
			A.prototype.isDescendent =
				function (a, b) {
					for (var f = b.parentNode; null !== f;) {
						if (f === a) return !0;
						f = f.parentNode || null
					}
					return !1
				};
			A.prototype.getTimeDifference = function (a, e) {
				var f, n;
				f = new Date(a);
				endTimeFmt = new Date(e);
				diff = endTimeFmt.getTime() - f.getTime();
				36E5 <= diff ? (f = Math.round(diff / 36E5), n = "hours") : 6E4 <= diff ? (f = Math.round(diff / 6E4), n = "minutes") : (f = Math.round(diff / 1E3), n = "seconds");
				return b.languageParser.translate("chat", n, {
					num: f
				})
			};
			A.prototype.hasClass = function (a, b) {
				return a.classList ? a.classList.contains(b) : !!a.className.match(RegExp("(\\s|^)" +
					b + "(\\s|$)"))
			};
			A.prototype.addClass = function (a, b) {
				a.classList ? a.classList.add(b) : this.hasClass(a, b) || (a.className += " " + b)
			};
			A.prototype.removeClass = function (a, b) {
				a.classList ? a.classList.remove(b) : this.hasClass(a, b) && (a.className = a.className.replace(RegExp("(\\s|^)" + b + "(\\s|$)"), " "))
			};
			A.prototype.updateFontStylesheet = function (a) {
				if (a && (a !== document || c.isPopup)) {
					var b = a.getElementById("lato-fonts"),
						f = a.body;
					l.supportsLatin(c.locale) && !b ? (a.querySelector("head").innerHTML += '<link id="lato-fonts" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext" rel="stylesheet"/>',
						this.addClass(f, "font-lato")) : !l.supportsLatin(c.locale) && b && (b.parentNode.removeChild(b), this.removeClass(f, "font-lato"))
				}
			};
			A.prototype.updateFonts = function () {
				if (b.viewHandler && b.viewHandler.iframeContainer && b.viewHandler.iframeContainer.childViews)
					for (var a = b.viewHandler.iframeContainer.childViews, e = 0; e < a.length; e++) {
						var f = a[e];
						f.isIframe && this.updateFontStylesheet(f.documentRef)
					}
			};
			A.prototype.supportsLatin = function (a) {
				return -1 < "cat cs da de en et es fi fil fr hr hu id it lv lt ms nl no pl pt pt_br ro sk sl sr_cs sq sv tr vi".split(" ").indexOf(a)
			};
			A.prototype.hasWebRTC = function () {
				var a = !0;
				s.isIE && (a = !1);
				return a
			};
			A.prototype.h = function (a) {
				var b = 0;
				if (0 === a.length) return b;
				for (var f = 0; f < a.length; f++) var n = a.charCodeAt(f),
					b = (b << 5) - b + n,
					b = b & b;
				return b
			};
			Inheritance_Manager = {
				extend: function (a, b) {
					function f() {}
					f.prototype = b.prototype;
					a.prototype = new f;
					a.prototype.constructor = a;
					a.prototype.parent = b.prototype;
					a.baseConstructor = b;
					a.superClass = b.prototype
				}
			};
			var l = new A;
			"undefined" !== typeof module && module.exports && (module.exports.Utils = A);
			var Xa = [{
					string: x.userAgent,
					subString: "Edge",
					identity: "explorer",
					versionSearch: "Edge"
				}, {
					string: x.userAgent,
					subString: "Trident/7.0",
					identity: "explorer",
					versionSearch: "rv"
				}, {
					string: x.userAgent,
					subString: "(Opera|OPR)",
					identity: "opera",
					versionSearch: "Version"
				}, {
					string: x.userAgent,
					subString: "Chrome",
					identity: "chrome",
					versionSearch: "Chrome"
				}, {
					string: x.userAgent,
					subString: "Mobile Safari",
					identity: "android",
					versionSearch: "Version"
				}, {
					string: x.userAgent,
					subString: "Firefox",
					identity: "firefox",
					versionSearch: "Firefox"
				}, {
					string: x.userAgent,
					subString: "MSIE",
					identity: "explorer",
					versionSearch: "MSIE"
				}, {
					string: x.userAgent,
					subString: "IEMobile",
					identity: "explorer",
					versionSearch: "IEMobile"
				}, {
					string: x.userAgent,
					subString: "Safari",
					identity: "safari",
					versionSearch: "Version"
				}, {
					string: x.userAgent,
					subString: "Gecko",
					identity: "mozilla",
					versionSearch: "rv"
				}],
				Ya = [{
					string: x.userAgent,
					subString: "Windows Phone",
					identity: "windows_phone"
				}, {
					string: x.platform,
					subString: "Win",
					identity: "windows"
				}, {
					string: x.platform,
					subString: "Mac",
					identity: "mac"
				}, {
					string: x.userAgent,
					subString: "iPhone",
					identity: "iphone"
				}, {
					string: x.userAgent,
					subString: "Android",
					identity: "android"
				}, {
					string: x.platform,
					subString: "Linux",
					identity: "linux"
				}, {
					string: x.userAgent,
					subString: "iPad",
					identity: "ipad"
				}],
				Pa = {
					google: "q",
					yahoo: "p",
					baidu: "wd",
					yandex: "text",
					bing: "q",
					soso: "w",
					ask: "q",
					aol: "q",
					sogou: "query",
					mywebsearch: "searchfor",
					youdao: "q",
					lycos: "q",
					infospace: "q",
					blekko: "q",
					info: "q",
					dogpile: "q",
					duckduckgo: "q",
					webcrawler: "q"
				},
				Y = {
					src: "about:blank",
					border: "0",
					cellspacing: "0",
					frameBorder: "0",
					scrolling: "no",
					horizontalscrolling: "no",
					verticalscrolling: "no",
					allowTransparency: "true",
					title: "chat widget"
				},
				Ga = {
					nokia: [/(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/, /^(Nokia)/, /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/, /(NokiaBrowser)\/(\d+)\.(\d+)/, /(BrowserNG)\/(\d+)\.(\d+).(\d+)/, /(Series60)\/5\.0/, /(Series60)\/(\d+)\.(\d+)/, /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Nokia)[EN]?(\d+)/],
					blackberry: [/(BB10);/, /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry)\s?(\d+)/],
					chrome: [/(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Android).*(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) (Mobile)?/],
					ie: [/(IEMobile)[ \/](\d+)\.(\d+)/],
					firefox: [/Mobile.*(Firefox)\/(\d+)\.(\d+)/, /Tablet.*(Firefox)\/(\d+)\.(\d+)/],
					operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
					opera: [/(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/, /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/, /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/, /(Opera)\/(\d+)\.(\d+).+Opera Mobi/, /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/,
						/Opera Mobi/, /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/
					],
					safari: [/(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
					uc: [/(UCBrowser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/],
					"android2.3": [/(Android) 2\.3(?:[.\-]([a-z0-9]+))?/],
					android2: [/(Android) 2\.(\d+)(?:[.\-]([a-z0-9]+))?/],
					android: [/Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; WOWMobile (.+) Build/, /Android[\- ][\d]+\.[\d]+\-update1; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/,
						/Android[\- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}\-[A-Za-z]{0,2};(.+) Build/, /Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android[\- ][\d]+\.[\d]+; (.+) Build/
					]
				},
				Z = function () {
					this.versionSearchString = this.browserObj = null;
					this.init()
				};
			Z.prototype.init = function () {
				var a = this.getBrowserVersion();
				s.mobileBrowserName = this.getMobileBrowser();
				s.version = a.version;
				s.vendor =
					a.vendor;
				s.os = a.os;
				s.plugins = a.plugins;
				s.html5audio = {
					mp3: this.hasHtmlAudio("mp3"),
					ogg: this.hasHtmlAudio("ogg"),
					wav: this.hasHtmlAudio("wav")
				};
				s.html5audio.supported = s.html5audio.mp3 || s.html5audio.ogg || s.html5audio.wav || s.html5audio.aac;
				s.isPlaceholderSupported = l.isPlaceholderSupported();
				"explorer" === s.vendor && (s.isIE = !0, 6 === s.version ? s.isIE6 = !0 : 8 <= s.version && 9 > s.version && (s.isIE8 = !0))
			};
			Z.prototype.getBrowserVersion = function () {
				return this.browserObj ? this.browserObj : this.browserObj = {
					vendor: this.searchString(Xa) ||
						"other",
					version: this.searchVersion(x.userAgent) || this.searchVersion(x.appVersion) || "other",
					os: this.searchString(Ya) || "other",
					plugins: this.getPlugins()
				}
			};
			Z.prototype.getPlugins = function () {
				var a, b, f = [];
				a = 0;
				for (b = x.plugins.length; a < b; a++) x.plugins[a].name && f.push(x.plugins[a].name);
				return f
			};
			Z.prototype.searchString = function (a) {
				var b, f, n;
				for (b = 0; b < a.length; b++)
					if (f = a[b].string, n = RegExp(a[b].subString), this.versionSearchString = a[b].versionSearch || a[b].identity, n.test(f)) return a[b].identity
			};
			Z.prototype.searchVersion =
				function (a) {
					var b = a.indexOf(this.versionSearchString);
					if (-1 !== b) return parseFloat(a.substring(b + this.versionSearchString.length + 1))
				};
			Z.prototype.getMobileBrowser = function () {
				for (var a = !1, b = x.userAgent, f = Object.keys(Ga), n = 0; !a && n < f.length;) {
					for (var c = f[n], d = 0; d < Ga[c].length; d++)
						if (b.match(Ga[c][d])) {
							a = c;
							break
						}
					n++
				}
				return a
			};
			Z.prototype.getReferredSearchEngine = function () {
				var a, b, f = "";
				if (document.referrer && (b = this.getHostname(document.referrer)))
					for (a in b = b.toLowerCase(), Pa)
						if (0 <= b.indexOf(a)) {
							queryString =
								this.getQuerystring(document.referrer, Pa[a]);
							"blekko" === a && "" === queryString && (queryString = this.getQuerystring(document.referrer.replace("/ws/", "/?q="), "q"));
							f = a;
							break
						}
				return f
			};
			Z.prototype.getQuerystring = function (a, b) {
				var f;
				b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				f = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
				return null === f || !l.isArray(f) || 2 > f.length ? null : f[1] ? unescape(f[1].replace(/\+/g, " ")) : null
			};
			Z.prototype.getHostname = function (a) {
				a = a.match(/^(?:f|ht)tp(?:s)?:\/\/([^/]+)/im);
				return null ===
					a || !l.isArray(a) || 2 > a.length ? null : a[1] ? a[1].toString() : null
			};
			Z.prototype.hasHtmlAudio = function (a) {
				var b = document.createElement("audio");
				try {
					if (!b.canPlayType || "no" === b.canPlayType("audio/" + a) || "" === b.canPlayType("audio/" + a)) return !1
				} catch (f) {
					return !1
				}
				return !0
			};
			b.browserData = new Z;
			var qa = function () {
				this.unloading = !1
			};
			qa.prototype.logPerformance = function (a) {
				Ha.xhrRequest("https://va.tawk.to/log-performance/v3", {
					logData: JSON.stringify(a)
				}, function () {})
			};
			qa.prototype.logIncident = function (a, b) {
				var f = q.getBrowserData();
				f.visitorId = z.visitorId || "";
				f.message = a;
				f.data = b;
				this.log("warning", f)
			};
			qa.prototype.log = function (a, b) {
				var f;
				b && a && (b.uiVersion = "v3", b.buildVersion = "694", b.buildCommit = "a933348f4b50eb52d7799ae7c30e9cfd6a1b30e2", f = {
					type: a,
					data: b
				}, this.postForm("log", JSON.stringify(f)))
			};
			qa.prototype.postForm = function (a, b) {
				var f, n, c;
				n = document.createElement("iframe");
				if (!document.body) return !1;
				n.src = "about:blank";
				n.style.cssText = ";display:none !important;";
				n.title = "chat widget logging";
				document.body.appendChild(n);
				try {
					f = l.getDocument(n)
				} catch (d) {
					return !1
				}
				s.isIE && (f.open(), f.writeln('<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><iframe name="form-receiver" id="form-receiver"></iframe></body></html>'), f.close());
				n = f.createElement("form");
				n.method = "POST";
				n.action = "https://va.tawk.to/" + a;
				n.enctype = "application/x-www-form-urlencoded";
				n.acceptCharset = "UTF-8";
				c = f.createElement("input");
				c.type = "text";
				c.name = "logData";
				c.value = b;
				n.appendChild(c);
				s.isIE && (n.target = "form-receiver");
				f.body.appendChild(n);
				n.submit();
				n.parentNode.removeChild(n)
			};
			d.onbeforeunload = function () {
				this.unloading = !0
			};
			d.onunload = function () {
				this.unloading = !0
			};
			var Ia = function () {
				this.originalErrorHandlerFn = d.onerror
			};
			Ia.prototype.getBrowserData = function () {
				var a = b.browserData.getBrowserVersion();
				return {
					site: d.location.href,
					browser: a.vendor || "",
					version: a.version || "",
					os: a.os || "",
					plugins: a.plugins || ""
				}
			};
			Ia.prototype.handleError = function (a, e, f, n, c) {
				var d;
				if (!(e && f || "Script error." !==
						a && "Script error" !== a) || "string" !== typeof e || -1 === e.indexOf("tawk.to") && -1 === e.indexOf("tawk.js")) return !1;
				d = this.getBrowserData();
				d.visitorId = z.visitorId || "";
				d.message = a || "";
				d.file = e || "";
				d.line = f || "";
				d.column = n || "";
				d.stack = c ? JSON.stringify(c) : "";
				d.stack = d.stack.replace(l.regLineBreaks, "");
				b.loggingHandler.log("error", d);
				return !0
			};
			q = new Ia;
			d.onerror = function () {
				var a;
				if (!q) return !1;
				a = q.handleError.apply(this, arguments);
				return "function" === typeof q.originalErrorHandlerFn ? q.originalErrorHandlerFn.apply(this,
					arguments) : a
			};
			var ea = function () {
				var a = this;
				this.events = {};
				this.supportsPassive = !1;
				if (d.addEventListener) try {
					var b = Object.defineProperty({}, "passive", {
						get: function () {
							a.supportsPassive = !0
						}
					});
					d.addEventListener("testPassive", null, b);
					d.removeEventListener("testPassive", null, b)
				} catch (f) {
					a.supportsPassive = !1
				}
			};
			ea.prototype.attachEvent = function (a, b, f) {
				var n = this,
					c = function (b) {
						f.call(a, n.getEvent(b))
					};
				a.attachEvent("on" + b, c);
				return c
			};
			ea.prototype.listen = function (a, b, f, n) {
				var c;
				if (n) {
					this.events[n] && (c = this.events[n],
						this.events[n] = null, this.removeEventHandler(c.element, c.eventName, c.eventListener));
					if (a.addEventListener) a.addEventListener(b, f, this.supportsPassive ? {
						passive: !1
					} : !1);
					else if (document.attachEvent) f = this.attachEvent(a, b, f);
					else return null;
					this.events[n] = {
						element: a,
						eventName: b,
						eventListener: f
					};
					return f
				}
			};
			ea.prototype.cancelEvent = function (a) {
				document.attachEvent && (a = this.getEvent(a));
				a.preventDefault ? a.preventDefault() : a.returnValue = !1
			};
			ea.prototype.removeEventHandler = function (a, b, f) {
				document.removeEventListener ?
					a.removeEventListener(b, f, !1) : a.detachEvent("on" + b, f)
			};
			ea.prototype.getEvent = function (a) {
				var b = a || d.event;
				if (!b)
					for (a = this.getEvent.caller; a && (!(b = a.arguments[0]) || Event != b.constructor);) a = a.caller;
				return b
			};
			ea.prototype.clearEvents = function () {
				var a = this;
				Object.keys(this.events).forEach(function (b) {
					b = a.events[b];
					a.removeEventHandler(b.element, b.eventName, b.eventListener)
				});
				this.events = {}
			};
			ea.prototype.getTargetElement = function (a) {
				document.attachEvent && (a = this.getEvent(a));
				a = a.target || a.srcElement;
				3 === a.nodeType && (a = a.parentNode);
				return a
			};
			var Za = {
					keypressTimer: 0,
					previousValue: 0,
					initElement: function (a, e) {
						var f = this;
						this.previousValue = "";
						b.eventHandler.listen(a, "focus", function (b) {
							f.startWatching(b, a, e)
						}, a.id + "focus");
						b.eventHandler.listen(a, "blur", function (a) {
							f.stopWatching()
						}, a.id + "blur");
						b.eventHandler.listen(a, "keyup", function (b) {
							f.detectChange(b, a, e)
						}, a.id + "keyup")
					},
					startWatching: function (a, b, f) {
						var n = this;
						this.stopWatching();
						this.keypressTimer = setInterval(function () {
							n.detectChange(a, b,
								f)
						}, 100)
					},
					stopWatching: function () {
						0 != this.keypressTimer && (clearInterval(this.keypressTimer), this.keypressTimer = 0)
					},
					detectChange: function (a, b, f) {
						b = b.value || "";
						if (this.previousValue === b) return !1;
						f(a, b);
						this.previousValue = b
					}
				},
				Ja = function () {};
			Ja.prototype.xhrRequest = function (a, b, f) {
				var n = new XMLHttpRequest;
				b = b || {};
				n.onerror = f;
				n.open("POST", a, !0);
				n.withCredentials = !0;
				n.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				n.onreadystatechange = function () {
					n.passed || 4 !== n.readyState || (n.passed = !0, f(null, n.responseText))
				};
				n.send(l.createQueryString(b));
				return {
					type: "xhr",
					req: n
				}
			};
			Ja.prototype.abort = function (a) {
				a && "xhr" === a.type && a.req.abort()
			};
			var Ha = new Ja,
				M = function () {
					this.isCookieEnabled = this.checkCookieEnabled();
					this.alphaNumericReg = /[^0-9a-zA-Z]/g;
					this.hasSessionStorage = this.isCookieEnabled && !!d.sessionStorage;
					this.checkLocalStorageUsage();
					this.clearOldCookies("TawkCookie")
				};
			M.prototype.checkLocalStorageUsage = function () {
				try {
					localStorage.setItem("exist_test", "yes"), localStorage.removeItem("exist_test"),
						this.hasLocalStorage = !0
				} catch (a) {
					this.hasLocalStorage = !1
				}
			};
			M.prototype.setHTTPCookie = function (a, b, f, n) {
				var c = "";
				f || (f = new Date, f.setTime(f.getTime() + 15552E6), c = "; expires=" + f.toGMTString());
				document.cookie = a + "=" + b + c + "; path=/" + (n ? ";domain=" + n : "")
			};
			M.prototype.getHTTPCookie = function (a) {
				var b, f, n = [],
					c = a + "=",
					d = document.cookie.split(";");
				a = 0;
				for (b = d.length; a < b; a++) {
					for (f = d[a];
						" " === f.charAt(0);) f = f.substring(1, f.length);
					0 === f.indexOf(c) && n.push(f.substring(c.length, f.length))
				}
				return n
			};
			M.prototype.setSessionStorage =
				function (a, b) {
					if (this.hasSessionStorage && sessionStorage.setItem) try {
						sessionStorage.setItem(a, b)
					} catch (f) {}
				};
			M.prototype.getSessionStorage = function (a) {
				return this.hasSessionStorage && sessionStorage.getItem ? sessionStorage.getItem(a) : null
			};
			M.prototype.setLocalStorage = function (a, b) {
				d.localStorage.setItem(a, b)
			};
			M.prototype.getLocalStorage = function (a) {
				return d.localStorage.getItem(a)
			};
			M.prototype.setWindowName = function (a) {
				d.name && 0 !== d.name.indexOf("TawkWindowName-") || (d.name = "TawkWindowName-" + a)
			};
			M.prototype.getWindowName =
				function () {
					var a, b, f;
					if (!d.name) return null;
					if (0 !== d.name.indexOf("TawkWindowName-")) {
						f = d.name.substring(0, 5);
						b = f.length;
						if (6 > b)
							for (a = 0, b = 6 - b; a < b; a++) f += "0";
						return f.replace(/[^0-9a-zA-Z]/g, "0").replace(" ", "0")
					}
					return d.name.substring(15, 21)
				};
			M.prototype.handleWindowId = function () {
				var a = this.getSessionStorage("TawkWindowName");
				"null" === a && (a = null);
				a || this.hasSessionStorage || (a = this.getWindowName());
				"null" === a && (a = null);
				a || (a = l.generateRandomString(), this.hasSessionStorage ? this.setSessionStorage("TawkWindowName",
					a) : this.setWindowName(a));
				s.windowId = a
			};
			M.prototype.storeUUID = function () {
				var a = this;
				r.transferedSession || z.uuids && 0 < z.uuids.length && z.uuids.forEach(function (b) {
					var f = (b.isExact ? "e::" : "p::") + b.domain + "::" + b.uuid + "::" + z.uuidVer;
					a.isCookieEnabled && a.setHTTPCookie("__tawkuuid", f, !1, b.domain)
				});
				this.handleWindowId();
				this.storeSessionInformation()
			};
			M.prototype.getSessionInformation = function () {
				var a;
				this.sessionInformation && (a = this.sessionInformation);
				this.hasLocalStorage && (a = this.getLocalStorage("twk_" +
					L.pageId));
				a || (a = this.getHTTPCookie("Tawk_" + L.pageId)[0]);
				return this.parseSessionInformation(a)
			};
			M.prototype.storeSessionInformation = function (a, e) {
				var f, n = this.getSessionInformation();
				if (!a || r.visitorSocketServer) a ? f = r.visitorSocketServer + "::" + b.viewHandler.indicator.unansweredMessages : (f = n[1] || 0, b.main.previousSessionKey !== r.sessionKey && (f = 0), f = r.visitorSocketServer + "::" + f), e ? f += "::cf" : 3 === n.length && (f += "::" + n[2]), this.hasLocalStorage ? (this.setLocalStorage("twk_" + L.pageId, f), this.clearOldCookies("Tawk_" +
					L.pageId)) : this.setHTTPCookie("Tawk_" + L.pageId, f, !1), this.sessionInformation = f
			};
			M.prototype.parseSessionInformation = function (a) {
				var b = [];
				a && (b = a.split("::"), 1 >= b.length && (b = a.split("||")));
				return b
			};
			M.prototype.clearOldCookies = function (a) {
				document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
			};
			M.prototype.checkCookieEnabled = function () {
				var a = x.cookieEnabled ? !0 : !1;
				"undefined" != typeof x.cookieEnabled || a || (document.cookie = "testcookie", a = -1 != document.cookie.indexOf("testcookie") ? !0 : !1);
				return a
			};
			M.prototype.getStoredUUID = function () {
				var a;
				this.isCookieEnabled && (a = this.getHTTPCookie("__tawkuuid"));
				return a && 0 < a.length ? a : []
			};
			var aa = new M,
				$a = function (a) {
					var b;
					"symbian" === s.mobileBrowserName ? this.play = function () {} : ("safari" === s.mobileBrowserName ? (b = document.createElement("audio"), b.src = a, b.style.cssText = "position: absolute; position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;", document.body.appendChild(b)) : b = new Audio(a), b.addEventListener("timeupdate", function () {
						0.2 <= b.currentTime &&
							b.pause()
					}, !1), b.load(), this.soundEl = b, this.play = function () {
						try {
							b.currentTime = 0, b.autoplay = !0, b.load(), b.play()
						} catch (a) {}
					})
				},
				ab = function (a, b, f) {
					this.sourcePath = a;
					this.buffer = null;
					this.name = b;
					this.audioPlayer = f;
					this.source = null;
					this.volume = 1;
					this.play = function () {
						if (this.buffer) {
							var a = this.audioPlayer.audioContext.createGain();
							a.gain.value = this.volume;
							this.source = this.audioPlayer.audioContext.createBufferSource();
							this.source.buffer = this.buffer;
							this.source.connect(a);
							a.connect(this.audioPlayer.audioContext.destination);
							this.source.start(0)
						}
					};
					this.loadBuffer = function () {
						var a = new XMLHttpRequest,
							b = this;
						a.open("GET", b.sourcePath, !0);
						a.responseType = "arraybuffer";
						a.onload = function () {
							b.audioPlayer.audioContext.decodeAudioData(a.response, function (a) {
								a && (b.buffer = a, b.audioPlayer.isReadyForInit || (b.audioPlayer.eventUsedForInit = b.name, b.audioPlayer.isReadyForInit = !0))
							}, function (a) {
								throw Error(a);
							})
						};
						a.onerror = function (a) {
							throw Error("BufferLoader: XHR error for " + b.sourcePath);
						};
						a.send()
					};
					this.loadBuffer()
				},
				Ka = function () {
					this.sounds = {};
					this.audioContext = null;
					this.isReadyForInit = !1;
					this.eventUsedForInit = null
				};
			Ka.prototype.initAudioPlayer = function () {
				var a, e, f, n = {},
					B = this;
				if (s.html5audio.supported) {
					this.audioContext || (/Firefox/.test(x.userAgent) || "undefined" === typeof AudioBuffer || void 0 === d.AudioContext && void 0 === d.webkitAudioContext) || (d.AudioContext = d.AudioContext || d.webkitAudioContext, this.audioContext = new d.AudioContext);
					s.html5audio.mp3 ? n = Ua : s.html5audio.wav ? n = Wa : s.html5audio.ogg && (n = Va);
					for (a in n) this.sounds[a] = this.audioContext ?
						new ab(n[a], a, this) : new $a(n[a]);
					this.audioContext && (f = function () {
							B.isReadyForInit && (B.eventUsedForInit && !B.touchstartInited) && (B.sounds[B.eventUsedForInit].volume = 0, B.sounds[B.eventUsedForInit].play(), B.sounds[B.eventUsedForInit].source.stop(0), B.sounds[B.eventUsedForInit].volume = 1, d && "function" === typeof d.removeEventListener && d.removeEventListener("touchstart", f, !1), e && "function" === typeof e.removeEventListener && e.removeEventListener("touchstart", f, !1), B.touchstartInited = !0)
						}, s.mobileBrowserName &&
						"ontouchstart" in d && (a = b.viewHandler.chatContainer.elementReferrer, c.isPopup || (e = a.contentWindow ? a.contentWindow : a.contentDocument.defaultView), e ? e.addEventListener("touchstart", f, !1) : a.addEventListener("touchstart", f, !1), d.addEventListener("touchstart", f, !1)))
				}
			};
			Ka.prototype.play = function (a) {
				k.disableSound || c.soundOn() && this.sounds[a] && this.sounds[a].play()
			};
			var La = function () {
				var a = this;
				this.uploads = {};
				b.eventEmitter.on("fileUploadProgress", function (a) {
					b.viewHandler.updateFileProgress(a)
				});
				b.eventEmitter.on("fileUploadFinished",
					function (e) {
						a.uploads[e.handle] && (delete a.uploads[e.handle], b.viewHandler.fileUploaded(e.handle), b.chatHandler.sendFileMessage(e))
					});
				b.eventEmitter.on("fileUploadError", function (e) {
					var f = a.uploads[e.handle];
					f && b.viewHandler.handleUploadError(null, f, e.handle)
				})
			};
			La.prototype.getUploadHandler = function (a) {
				var b = "https://upload.tawk.to/upload/handle?_t=" + (new Date).getTime(),
					f = new XMLHttpRequest;
				f.onreadystatechange = function () {
					4 === this.readyState && (200 <= this.status && 400 > this.status ? a(JSON.parse(this.responseText)) :
						a(!0))
				};
				f.open("GET", b);
				f.onerror = function () {
					a(!0)
				};
				f.send();
				f = null
			};
			La.prototype.uploadFile = function (a, b, f, n) {
				var c = "https://upload.tawk.to/upload/visitor-chat/visitor?handle=" + a + "&visitorSessionId=" + r.sessionKey;
				this.uploads[a] = f;
				if (52428800 < b.size) return n(!0, "limit50");
				a = new FormData;
				a.append("upload", b, b.name || b.filename);
				b = new XMLHttpRequest;
				b.open("POST", c);
				b.onload = function () {
					return n(JSON.parse(this.responseText))
				};
				b.onerror = function () {
					return n(!0)
				};
				b.send(a)
			};
			var ya, G, ra, za, na = 0,
				Ma = {
					people: {
						header: ":smiley:",
						content: ":grinning: :grin: :joy: :rofl: :smiley: :smile: :sweat_smile: :laughing: :wink: :blush: :yum: :sunglasses: :heart_eyes: :kissing_heart: :kissing: :kissing_smiling_eyes: :kissing_closed_eyes: :relaxed: :slight_smile: :hugging: :thinking: :neutral_face: :expressionless: :no_mouth: :rolling_eyes: :smirk: :persevere: :disappointed_relieved: :open_mouth: :zipper_mouth: :hushed: :sleepy: :tired_face: :sleeping: :relieved: :nerd: :stuck_out_tongue: :stuck_out_tongue_winking_eye: :stuck_out_tongue_closed_eyes: :drooling_face: :unamused: :sweat: :pensive: :confused: :upside_down: :money_mouth: :astonished: :frowning2: :slight_frown: :confounded: :disappointed: :worried: :triumph: :cry: :sob: :frowning: :anguished: :fearful: :weary: :grimacing: :cold_sweat: :scream: :flushed: :dizzy_face: :rage: :angry: :innocent: :cowboy: :clown: :lying_face: :mask: :thermometer_face: :head_bandage: :nauseated_face: :sneezing_face: :smiling_imp: :imp: :japanese_ogre: :japanese_goblin: :skull: :ghost: :alien: :robot: :poop: :smiley_cat: :smile_cat: :joy_cat: :heart_eyes_cat: :smirk_cat: :kissing_cat: :scream_cat: :crying_cat_face: :pouting_cat: :boy: :boy_tone1: :boy_tone2: :boy_tone3: :boy_tone4: :boy_tone5: :girl: :girl_tone1: :girl_tone2: :girl_tone3: :girl_tone4: :girl_tone5: :man: :man_tone1: :man_tone2: :man_tone3: :man_tone4: :man_tone5: :woman: :woman_tone1: :woman_tone2: :woman_tone3: :woman_tone4: :woman_tone5: :older_man: :older_man_tone1: :older_man_tone2: :older_man_tone3: :older_man_tone4: :older_man_tone5: :older_woman: :older_woman_tone1: :older_woman_tone2: :older_woman_tone3: :older_woman_tone4: :older_woman_tone5: :baby: :baby_tone1: :baby_tone2: :baby_tone3: :baby_tone4: :baby_tone5: :angel: :angel_tone1: :angel_tone2: :angel_tone3: :angel_tone4: :angel_tone5: :cop: :cop_tone1: :cop_tone2: :cop_tone3: :cop_tone4: :cop_tone5: :spy: :spy_tone1: :spy_tone2: :spy_tone3: :spy_tone4: :spy_tone5: :guardsman: :guardsman_tone1: :guardsman_tone2: :guardsman_tone3: :guardsman_tone4: :guardsman_tone5: :construction_worker: :construction_worker_tone1: :construction_worker_tone2: :construction_worker_tone3: :construction_worker_tone4: :construction_worker_tone5: :man_with_turban: :man_with_turban_tone1: :man_with_turban_tone2: :man_with_turban_tone3: :man_with_turban_tone4: :man_with_turban_tone5: :person_with_blond_hair: :person_with_blond_hair_tone1: :person_with_blond_hair_tone2: :person_with_blond_hair_tone3: :person_with_blond_hair_tone4: :person_with_blond_hair_tone5: :santa: :santa_tone1: :santa_tone2: :santa_tone3: :santa_tone4: :santa_tone5: :mrs_claus: :mrs_claus_tone1: :mrs_claus_tone2: :mrs_claus_tone3: :mrs_claus_tone4: :mrs_claus_tone5: :princess: :princess_tone1: :princess_tone2: :princess_tone3: :princess_tone4: :princess_tone5: :prince: :prince_tone1: :prince_tone2: :prince_tone3: :prince_tone4: :prince_tone5: :bride_with_veil: :bride_with_veil_tone1: :bride_with_veil_tone2: :bride_with_veil_tone3: :bride_with_veil_tone4: :bride_with_veil_tone5: :man_in_tuxedo: :man_in_tuxedo_tone1: :man_in_tuxedo_tone2: :man_in_tuxedo_tone3: :man_in_tuxedo_tone4: :man_in_tuxedo_tone5: :pregnant_woman: :pregnant_woman_tone1: :pregnant_woman_tone2: :pregnant_woman_tone3: :pregnant_woman_tone4: :pregnant_woman_tone5: :man_with_gua_pi_mao: :man_with_gua_pi_mao_tone1: :man_with_gua_pi_mao_tone2: :man_with_gua_pi_mao_tone3: :man_with_gua_pi_mao_tone4: :man_with_gua_pi_mao_tone5: :person_frowning: :person_frowning_tone1: :person_frowning_tone2: :person_frowning_tone3: :person_frowning_tone4: :person_frowning_tone5: :person_with_pouting_face: :person_with_pouting_face_tone1: :person_with_pouting_face_tone2: :person_with_pouting_face_tone3: :person_with_pouting_face_tone4: :person_with_pouting_face_tone5: :no_good: :no_good_tone1: :no_good_tone2: :no_good_tone3: :no_good_tone4: :no_good_tone5: :ok_woman: :ok_woman_tone1: :ok_woman_tone2: :ok_woman_tone3: :ok_woman_tone4: :ok_woman_tone5: :information_desk_person: :information_desk_person_tone1: :information_desk_person_tone2: :information_desk_person_tone3: :information_desk_person_tone4: :information_desk_person_tone5: :raising_hand: :raising_hand_tone1: :raising_hand_tone2: :raising_hand_tone3: :raising_hand_tone4: :raising_hand_tone5: :bow: :bow_tone1: :bow_tone2: :bow_tone3: :bow_tone4: :bow_tone5: :face_palm: :face_palm_tone1: :face_palm_tone2: :face_palm_tone3: :face_palm_tone4: :face_palm_tone5: :shrug: :shrug_tone1: :shrug_tone2: :shrug_tone3: :shrug_tone4: :shrug_tone5: :massage: :massage_tone1: :massage_tone2: :massage_tone3: :massage_tone4: :massage_tone5: :haircut: :haircut_tone1: :haircut_tone2: :haircut_tone3: :haircut_tone4: :haircut_tone5: :walking: :walking_tone1: :walking_tone2: :walking_tone3: :walking_tone4: :walking_tone5: :runner: :runner_tone1: :runner_tone2: :runner_tone3: :runner_tone4: :runner_tone5: :dancer: :dancer_tone1: :dancer_tone2: :dancer_tone3: :dancer_tone4: :dancer_tone5: :man_dancing: :man_dancing_tone1: :man_dancing_tone2: :man_dancing_tone3: :man_dancing_tone4: :man_dancing_tone5: :dancers: :speaking_head: :bust_in_silhouette: :busts_in_silhouette: :couple: :two_men_holding_hands: :two_women_holding_hands: :couplekiss: :kiss_mm: :kiss_ww: :couple_with_heart: :couple_mm: :couple_ww: :family: :family_mwg: :family_mwgb: :family_mwbb: :family_mwgg: :family_mmb: :family_mmg: :family_mmgb: :family_mmbb: :family_mmgg: :family_wwb: :family_wwg: :family_wwgb: :family_wwbb: :family_wwgg: :muscle: :muscle_tone1: :muscle_tone2: :muscle_tone3: :muscle_tone4: :muscle_tone5: :selfie: :selfie_tone1: :selfie_tone2: :selfie_tone3: :selfie_tone4: :selfie_tone5: :point_left: :point_left_tone1: :point_left_tone2: :point_left_tone3: :point_left_tone4: :point_left_tone5: :point_right: :point_right_tone1: :point_right_tone2: :point_right_tone3: :point_right_tone4: :point_right_tone5: :point_up: :point_up_tone1: :point_up_tone2: :point_up_tone3: :point_up_tone4: :point_up_tone5: :point_up_2: :point_up_2_tone1: :point_up_2_tone2: :point_up_2_tone3: :point_up_2_tone4: :point_up_2_tone5: :middle_finger: :middle_finger_tone1: :middle_finger_tone2: :middle_finger_tone3: :middle_finger_tone4: :middle_finger_tone5: :point_down: :point_down_tone1: :point_down_tone2: :point_down_tone3: :point_down_tone4: :point_down_tone5: :v: :v_tone1: :v_tone2: :v_tone3: :v_tone4: :v_tone5: :fingers_crossed: :fingers_crossed_tone1: :fingers_crossed_tone2: :fingers_crossed_tone3: :fingers_crossed_tone4: :fingers_crossed_tone5: :vulcan: :vulcan_tone1: :vulcan_tone2: :vulcan_tone3: :vulcan_tone4: :vulcan_tone5: :metal: :metal_tone1: :metal_tone2: :metal_tone3: :metal_tone4: :metal_tone5: :call_me: :call_me_tone1: :call_me_tone2: :call_me_tone3: :call_me_tone4: :call_me_tone5: :hand_splayed: :hand_splayed_tone1: :hand_splayed_tone2: :hand_splayed_tone3: :hand_splayed_tone4: :hand_splayed_tone5: :raised_hand: :raised_hand_tone1: :raised_hand_tone2: :raised_hand_tone3: :raised_hand_tone4: :raised_hand_tone5: :ok_hand: :ok_hand_tone1: :ok_hand_tone2: :ok_hand_tone3: :ok_hand_tone4: :ok_hand_tone5: :thumbsup: :thumbsup_tone1: :thumbsup_tone2: :thumbsup_tone3: :thumbsup_tone4: :thumbsup_tone5: :thumbsdown: :thumbsdown_tone1: :thumbsdown_tone2: :thumbsdown_tone3: :thumbsdown_tone4: :thumbsdown_tone5: :fist: :fist_tone1: :fist_tone2: :fist_tone3: :fist_tone4: :fist_tone5: :punch: :punch_tone1: :punch_tone2: :punch_tone3: :punch_tone4: :punch_tone5: :left_facing_fist: :left_facing_fist_tone1: :left_facing_fist_tone2: :left_facing_fist_tone3: :left_facing_fist_tone4: :left_facing_fist_tone5: :right_facing_fist: :right_facing_fist_tone1: :right_facing_fist_tone2: :right_facing_fist_tone3: :right_facing_fist_tone4: :right_facing_fist_tone5: :raised_back_of_hand: :raised_back_of_hand_tone1: :raised_back_of_hand_tone2: :raised_back_of_hand_tone3: :raised_back_of_hand_tone4: :raised_back_of_hand_tone5: :wave: :wave_tone1: :wave_tone2: :wave_tone3: :wave_tone4: :wave_tone5: :clap: :clap_tone1: :clap_tone2: :clap_tone3: :clap_tone4: :clap_tone5: :writing_hand: :writing_hand_tone1: :writing_hand_tone2: :writing_hand_tone3: :writing_hand_tone4: :writing_hand_tone5: :open_hands: :open_hands_tone1: :open_hands_tone2: :open_hands_tone3: :open_hands_tone4: :open_hands_tone5: :raised_hands: :raised_hands_tone1: :raised_hands_tone2: :raised_hands_tone3: :raised_hands_tone4: :raised_hands_tone5: :pray: :pray_tone1: :pray_tone2: :pray_tone3: :pray_tone4: :pray_tone5: :handshake: :handshake_tone1: :handshake_tone2: :handshake_tone3: :handshake_tone4: :handshake_tone5: :nail_care: :nail_care_tone1: :nail_care_tone2: :nail_care_tone3: :nail_care_tone4: :nail_care_tone5: :ear: :ear_tone1: :ear_tone2: :ear_tone3: :ear_tone4: :ear_tone5: :nose: :nose_tone1: :nose_tone2: :nose_tone3: :nose_tone4: :nose_tone5: :footprints: :eyes: :eye: :tongue: :lips: :kiss: :zzz: :eyeglasses: :dark_sunglasses: :necktie: :shirt: :jeans: :dress: :kimono: :bikini: :womans_clothes: :purse: :handbag: :pouch: :school_satchel: :mans_shoe: :athletic_shoe: :high_heel: :sandal: :boot: :crown: :womans_hat: :tophat: :mortar_board: :helmet_with_cross: :lipstick: :ring: :closed_umbrella: :briefcase:".split(" ")
					},
					nature: {
						header: ":four_leaf_clover:",
						content: ":see_no_evil: :hear_no_evil: :speak_no_evil: :sweat_drops: :dash: :monkey_face: :monkey: :gorilla: :dog: :dog2: :poodle: :wolf: :fox: :cat: :cat2: :lion_face: :tiger: :tiger2: :leopard: :horse: :racehorse: :deer: :unicorn: :cow: :ox: :water_buffalo: :cow2: :pig: :pig2: :boar: :pig_nose: :ram: :sheep: :goat: :dromedary_camel: :camel: :elephant: :rhino: :mouse: :mouse2: :rat: :hamster: :rabbit: :rabbit2: :chipmunk: :bat: :bear: :koala: :panda_face: :feet: :turkey: :chicken: :rooster: :hatching_chick: :baby_chick: :hatched_chick: :bird: :penguin: :dove: :eagle: :duck: :owl: :frog: :crocodile: :turtle: :lizard: :snake: :dragon_face: :dragon: :whale: :whale2: :dolphin: :fish: :tropical_fish: :blowfish: :shark: :octopus: :shell: :crab: :shrimp: :squid: :butterfly: :snail: :bug: :ant: :bee: :beetle: :spider: :spider_web: :scorpion: :bouquet: :cherry_blossom: :rosette: :rose: :wilted_rose: :hibiscus: :sunflower: :blossom: :tulip: :seedling: :evergreen_tree: :deciduous_tree: :palm_tree: :cactus: :ear_of_rice: :herb: :shamrock: :four_leaf_clover: :maple_leaf: :fallen_leaf: :leaves: :mushroom: :chestnut: :earth_africa: :earth_americas: :earth_asia: :new_moon: :waxing_crescent_moon: :first_quarter_moon: :waxing_gibbous_moon: :full_moon: :waning_gibbous_moon: :last_quarter_moon: :waning_crescent_moon: :crescent_moon: :new_moon_with_face: :first_quarter_moon_with_face: :last_quarter_moon_with_face: :sunny: :full_moon_with_face: :sun_with_face: :star: :star2: :cloud: :partly_sunny: :thunder_cloud_rain: :white_sun_small_cloud: :white_sun_cloud: :white_sun_rain_cloud: :cloud_rain: :cloud_snow: :cloud_lightning: :cloud_tornado: :fog: :wind_blowing_face: :umbrella2: :umbrella: :zap: :snowflake: :snowman2: :snowman: :comet: :fire: :droplet: :ocean: :jack_o_lantern: :christmas_tree: :sparkles: :tanabata_tree: :bamboo:".split(" ")
					},
					food: {
						header: ":hamburger:",
						content: ":grapes: :melon: :watermelon: :tangerine: :lemon: :banana: :pineapple: :apple: :green_apple: :pear: :peach: :cherries: :strawberry: :kiwi: :tomato: :avocado: :eggplant: :potato: :carrot: :corn: :hot_pepper: :cucumber: :peanuts: :bread: :croissant: :french_bread: :pancakes: :cheese: :meat_on_bone: :poultry_leg: :bacon: :hamburger: :fries: :pizza: :hotdog: :taco: :burrito: :stuffed_flatbread: :egg: :cooking: :shallow_pan_of_food: :stew: :salad: :popcorn: :bento: :rice_cracker: :rice_ball: :rice: :curry: :ramen: :spaghetti: :sweet_potato: :oden: :sushi: :fried_shrimp: :fish_cake: :dango: :icecream: :shaved_ice: :ice_cream: :doughnut: :cookie: :birthday: :cake: :chocolate_bar: :candy: :lollipop: :custard: :honey_pot: :baby_bottle: :milk: :coffee: :tea: :sake: :champagne: :wine_glass: :cocktail: :tropical_drink: :beer: :beers: :champagne_glass: :tumbler_glass: :fork_knife_plate: :fork_and_knife: :spoon:".split(" ")
					},
					objects: {
						header: ":bulb:",
						content: ":skull_crossbones: :love_letter: :bomb: :hole: :shopping_bags: :prayer_beads: :gem: :knife: :amphora: :map: :barber: :frame_photo: :bellhop: :door: :sleeping_accommodation: :bed: :couch: :toilet: :shower: :bathtub: :hourglass: :hourglass_flowing_sand: :watch: :alarm_clock: :stopwatch: :timer: :clock: :thermometer: :beach_umbrella: :balloon: :tada: :confetti_ball: :dolls: :flags: :wind_chime: :ribbon: :gift: :joystick: :postal_horn: :microphone2: :level_slider: :control_knobs: :radio: :iphone: :calling: :telephone: :telephone_receiver: :pager: :fax: :battery: :electric_plug: :computer: :desktop: :printer: :keyboard: :mouse_three_button: :trackball: :minidisc: :floppy_disk: :cd: :dvd: :movie_camera: :film_frames: :projector: :tv: :camera: :camera_with_flash: :video_camera: :vhs: :mag: :mag_right: :microscope: :telescope: :satellite: :candle: :bulb: :flashlight: :izakaya_lantern: :notebook_with_decorative_cover: :closed_book: :book: :green_book: :blue_book: :orange_book: :books: :notebook: :ledger: :page_with_curl: :scroll: :page_facing_up: :newspaper: :newspaper2: :bookmark_tabs: :bookmark: :label: :moneybag: :yen: :dollar: :euro: :pound: :money_with_wings: :credit_card: :envelope: :e-mail: :incoming_envelope: :envelope_with_arrow: :outbox_tray: :inbox_tray: :package: :mailbox: :mailbox_closed: :mailbox_with_mail: :mailbox_with_no_mail: :postbox: :ballot_box: :pencil2: :black_nib: :pen_fountain: :pen_ballpoint: :paintbrush: :crayon: :pencil: :file_folder: :open_file_folder: :dividers: :date: :calendar: :notepad_spiral: :calendar_spiral: :card_index: :chart_with_upwards_trend: :chart_with_downwards_trend: :bar_chart: :clipboard: :pushpin: :round_pushpin: :paperclip: :paperclips: :straight_ruler: :triangular_ruler: :scissors: :card_box: :file_cabinet: :wastebasket: :lock: :unlock: :lock_with_ink_pen: :closed_lock_with_key: :key: :key2: :hammer: :pick: :hammer_pick: :tools: :dagger: :crossed_swords: :gun: :shield: :wrench: :nut_and_bolt: :gear: :compression: :alembic: :scales: :link: :chains: :syringe: :pill: :smoking: :coffin: :urn: :moyai: :oil: :crystal_ball: :shopping_cart: :triangular_flag_on_post: :crossed_flags: :flag_black: :flag_white: :rainbow_flag:".split(" ")
					},
					activity: {
						header: ":football:",
						content: ":space_invader: :levitate: :fencer: :horse_racing: :horse_racing_tone1: :horse_racing_tone2: :horse_racing_tone3: :horse_racing_tone4: :horse_racing_tone5: :skier: :snowboarder: :golfer: :surfer: :surfer_tone1: :surfer_tone2: :surfer_tone3: :surfer_tone4: :surfer_tone5: :rowboat: :rowboat_tone1: :rowboat_tone2: :rowboat_tone3: :rowboat_tone4: :rowboat_tone5: :swimmer: :swimmer_tone1: :swimmer_tone2: :swimmer_tone3: :swimmer_tone4: :swimmer_tone5: :basketball_player: :basketball_player_tone1: :basketball_player_tone2: :basketball_player_tone3: :basketball_player_tone4: :basketball_player_tone5: :lifter: :lifter_tone1: :lifter_tone2: :lifter_tone3: :lifter_tone4: :lifter_tone5: :bicyclist: :bicyclist_tone1: :bicyclist_tone2: :bicyclist_tone3: :bicyclist_tone4: :bicyclist_tone5: :mountain_bicyclist: :mountain_bicyclist_tone1: :mountain_bicyclist_tone2: :mountain_bicyclist_tone3: :mountain_bicyclist_tone4: :mountain_bicyclist_tone5: :cartwheel: :cartwheel_tone1: :cartwheel_tone2: :cartwheel_tone3: :cartwheel_tone4: :cartwheel_tone5: :wrestlers: :wrestlers_tone1: :wrestlers_tone2: :wrestlers_tone3: :wrestlers_tone4: :wrestlers_tone5: :water_polo: :water_polo_tone1: :water_polo_tone2: :water_polo_tone3: :water_polo_tone4: :water_polo_tone5: :handball: :handball_tone1: :handball_tone2: :handball_tone3: :handball_tone4: :handball_tone5: :juggling: :juggling_tone1: :juggling_tone2: :juggling_tone3: :juggling_tone4: :juggling_tone5: :circus_tent: :performing_arts: :art: :slot_machine: :bath: :bath_tone1: :bath_tone2: :bath_tone3: :bath_tone4: :bath_tone5: :reminder_ribbon: :tickets: :ticket: :military_medal: :trophy: :medal: :first_place: :second_place: :third_place: :soccer: :baseball: :basketball: :volleyball: :football: :rugby_football: :tennis: :8ball: :bowling: :cricket: :field_hockey: :hockey: :ping_pong: :badminton: :boxing_glove: :martial_arts_uniform: :goal: :dart: :golf: :ice_skate: :fishing_pole_and_fish: :running_shirt_with_sash: :ski: :video_game: :game_die: :musical_score: :microphone: :headphones: :saxophone: :guitar: :musical_keyboard: :trumpet: :violin: :drum: :clapper: :bow_and_arrow:".split(" ")
					},
					travel: {
						header: ":red_car:",
						content: ":race_car: :motorcycle: :japan: :mountain_snow: :mountain: :volcano: :mount_fuji: :camping: :beach: :desert: :island: :park: :stadium: :classical_building: :construction_site: :homes: :cityscape: :house_abandoned: :house: :house_with_garden: :office: :post_office: :european_post_office: :hospital: :bank: :hotel: :love_hotel: :convenience_store: :school: :department_store: :factory: :japanese_castle: :european_castle: :wedding: :tokyo_tower: :statue_of_liberty: :church: :mosque: :synagogue: :shinto_shrine: :kaaba: :fountain: :tent: :foggy: :night_with_stars: :sunrise_over_mountains: :sunrise: :city_dusk: :city_sunset: :bridge_at_night: :milky_way: :carousel_horse: :ferris_wheel: :roller_coaster: :steam_locomotive: :railway_car: :bullettrain_side: :bullettrain_front: :train2: :metro: :light_rail: :station: :tram: :monorail: :mountain_railway: :train: :bus: :oncoming_bus: :trolleybus: :minibus: :ambulance: :fire_engine: :police_car: :oncoming_police_car: :taxi: :oncoming_taxi: :red_car: :oncoming_automobile: :blue_car: :truck: :articulated_lorry: :tractor: :bike: :scooter: :motor_scooter: :busstop: :motorway: :railway_track: :fuelpump: :rotating_light: :traffic_light: :vertical_traffic_light: :construction: :anchor: :sailboat: :canoe: :speedboat: :cruise_ship: :ferry: :motorboat: :ship: :airplane: :airplane_small: :airplane_departure: :airplane_arriving: :seat: :helicopter: :suspension_railway: :mountain_cableway: :aerial_tramway: :rocket: :satellite_orbital: :stars: :rainbow: :fireworks: :sparkler: :rice_scene: :checkered_flag:".split(" ")
					},
					symbols: {
						header: ":hash:",
						content: ":100: :1234: :eye_in_speech_bubble: :cupid: :heart: :heartbeat: :broken_heart: :two_hearts: :sparkling_heart: :heartpulse: :blue_heart: :green_heart: :yellow_heart: :purple_heart: :black_heart: :gift_heart: :revolving_hearts: :heart_decoration: :heart_exclamation: :anger: :boom: :dizzy: :speech_balloon: :speech_left: :anger_right: :thought_balloon: :white_flower: :globe_with_meridians: :hotsprings: :octagonal_sign: :clock12: :clock1230: :clock1: :clock130: :clock2: :clock230: :clock3: :clock330: :clock4: :clock430: :clock5: :clock530: :clock6: :clock630: :clock7: :clock730: :clock8: :clock830: :clock9: :clock930: :clock10: :clock1030: :clock11: :clock1130: :cyclone: :spades: :hearts: :diamonds: :clubs: :black_joker: :mahjong: :flower_playing_cards: :mute: :speaker: :sound: :loud_sound: :loudspeaker: :mega: :bell: :no_bell: :musical_note: :notes: :chart: :currency_exchange: :heavy_dollar_sign: :atm: :put_litter_in_its_place: :potable_water: :wheelchair: :mens: :womens: :restroom: :baby_symbol: :wc: :passport_control: :customs: :baggage_claim: :left_luggage: :warning: :children_crossing: :no_entry: :no_entry_sign: :no_bicycles: :no_smoking: :do_not_litter: :non-potable_water: :no_pedestrians: :no_mobile_phones: :underage: :radioactive: :biohazard: :arrow_up: :arrow_upper_right: :arrow_right: :arrow_lower_right: :arrow_down: :arrow_lower_left: :arrow_left: :arrow_upper_left: :arrow_up_down: :left_right_arrow: :leftwards_arrow_with_hook: :arrow_right_hook: :arrow_heading_up: :arrow_heading_down: :arrows_clockwise: :arrows_counterclockwise: :back: :end: :on: :soon: :top: :place_of_worship: :atom: :om_symbol: :star_of_david: :wheel_of_dharma: :yin_yang: :cross: :orthodox_cross: :star_and_crescent: :peace: :menorah: :six_pointed_star: :aries: :taurus: :gemini: :cancer: :leo: :virgo: :libra: :scorpius: :sagittarius: :capricorn: :aquarius: :pisces: :ophiuchus: :twisted_rightwards_arrows: :repeat: :repeat_one: :arrow_forward: :fast_forward: :track_next: :play_pause: :arrow_backward: :rewind: :track_previous: :arrow_up_small: :arrow_double_up: :arrow_down_small: :arrow_double_down: :pause_button: :stop_button: :record_button: :eject: :cinema: :low_brightness: :high_brightness: :signal_strength: :vibration_mode: :mobile_phone_off: :recycle: :name_badge: :fleur-de-lis: :beginner: :trident: :o: :white_check_mark: :ballot_box_with_check: :heavy_check_mark: :heavy_multiplication_x: :x: :negative_squared_cross_mark: :heavy_plus_sign: :heavy_minus_sign: :heavy_division_sign: :curly_loop: :loop: :part_alternation_mark: :eight_spoked_asterisk: :eight_pointed_black_star: :sparkle: :bangbang: :interrobang: :question: :grey_question: :grey_exclamation: :exclamation: :wavy_dash: :copyright: :registered: :tm: :hash: :asterisk: :zero: :one: :two: :three: :four: :five: :six: :seven: :eight: :nine: :keycap_ten: :capital_abcd: :abcd: :symbols: :abc: :a: :ab: :b: :cl: :cool: :free: :information_source: :id: :m: :new: :ng: :o2: :ok: :parking: :sos: :up: :vs: :koko: :sa: :u6708: :u6709: :u6307: :ideograph_advantage: :u5272: :u7121: :u7981: :accept: :u7533: :u5408: :u7a7a: :congratulations: :secret: :u55b6: :u6e80: :black_small_square: :white_small_square: :white_medium_square: :black_medium_square: :white_medium_small_square: :black_medium_small_square: :black_large_square: :white_large_square: :large_orange_diamond: :large_blue_diamond: :small_orange_diamond: :small_blue_diamond: :small_red_triangle: :small_red_triangle_down: :diamond_shape_with_a_dot_inside: :radio_button: :black_square_button: :white_square_button: :white_circle: :black_circle: :red_circle: :blue_circle: :regional_indicator_z: :regional_indicator_y: :regional_indicator_x: :regional_indicator_w: :regional_indicator_v: :regional_indicator_u: :regional_indicator_t: :regional_indicator_s: :regional_indicator_r: :regional_indicator_q: :regional_indicator_p: :regional_indicator_o: :regional_indicator_n: :regional_indicator_m: :regional_indicator_l: :regional_indicator_k: :regional_indicator_j: :regional_indicator_i: :regional_indicator_h: :regional_indicator_g: :regional_indicator_f: :regional_indicator_e: :regional_indicator_d: :regional_indicator_c: :regional_indicator_b: :regional_indicator_a:".split(" ")
					},
					flags: {
						header: ":flag_black:",
						content: ":flag_ac: :flag_ad: :flag_ae: :flag_af: :flag_ag: :flag_ai: :flag_al: :flag_am: :flag_ao: :flag_aq: :flag_ar: :flag_as: :flag_at: :flag_au: :flag_aw: :flag_ax: :flag_az: :flag_ba: :flag_bb: :flag_bd: :flag_be: :flag_bf: :flag_bg: :flag_bh: :flag_bi: :flag_bj: :flag_bl: :flag_bm: :flag_bn: :flag_bo: :flag_bq: :flag_br: :flag_bs: :flag_bt: :flag_bv: :flag_bw: :flag_by: :flag_bz: :flag_ca: :flag_cc: :flag_cd: :flag_cf: :flag_cg: :flag_ch: :flag_ci: :flag_ck: :flag_cl: :flag_cm: :flag_cn: :flag_co: :flag_cp: :flag_cr: :flag_cu: :flag_cv: :flag_cw: :flag_cx: :flag_cy: :flag_cz: :flag_de: :flag_dg: :flag_dj: :flag_dk: :flag_dm: :flag_do: :flag_dz: :flag_ea: :flag_ec: :flag_ee: :flag_eg: :flag_eh: :flag_er: :flag_es: :flag_et: :flag_eu: :flag_fi: :flag_fj: :flag_fk: :flag_fm: :flag_fo: :flag_fr: :flag_ga: :flag_gb: :flag_gd: :flag_ge: :flag_gf: :flag_gg: :flag_gh: :flag_gi: :flag_gl: :flag_gm: :flag_gn: :flag_gp: :flag_gq: :flag_gr: :flag_gs: :flag_gt: :flag_gu: :flag_gw: :flag_gy: :flag_hk: :flag_hm: :flag_hn: :flag_hr: :flag_ht: :flag_hu: :flag_ic: :flag_id: :flag_ie: :flag_il: :flag_im: :flag_in: :flag_io: :flag_iq: :flag_ir: :flag_is: :flag_it: :flag_je: :flag_jm: :flag_jo: :flag_jp: :flag_ke: :flag_kg: :flag_kh: :flag_ki: :flag_km: :flag_kn: :flag_kp: :flag_kr: :flag_kw: :flag_ky: :flag_kz: :flag_la: :flag_lb: :flag_lc: :flag_li: :flag_lk: :flag_lr: :flag_ls: :flag_lt: :flag_lu: :flag_lv: :flag_ly: :flag_ma: :flag_mc: :flag_md: :flag_me: :flag_mf: :flag_mg: :flag_mh: :flag_mk: :flag_ml: :flag_mm: :flag_mn: :flag_mo: :flag_mp: :flag_mq: :flag_mr: :flag_ms: :flag_mt: :flag_mu: :flag_mv: :flag_mw: :flag_mx: :flag_my: :flag_mz: :flag_na: :flag_nc: :flag_ne: :flag_nf: :flag_ng: :flag_ni: :flag_nl: :flag_no: :flag_np: :flag_nr: :flag_nu: :flag_nz: :flag_om: :flag_pa: :flag_pe: :flag_pf: :flag_pg: :flag_ph: :flag_pk: :flag_pl: :flag_pm: :flag_pn: :flag_pr: :flag_ps: :flag_pt: :flag_pw: :flag_py: :flag_qa: :flag_re: :flag_ro: :flag_rs: :flag_ru: :flag_rw: :flag_sa: :flag_sb: :flag_sc: :flag_sd: :flag_se: :flag_sg: :flag_sh: :flag_si: :flag_sj: :flag_sk: :flag_sl: :flag_sm: :flag_sn: :flag_so: :flag_sr: :flag_ss: :flag_st: :flag_sv: :flag_sx: :flag_sy: :flag_sz: :flag_ta: :flag_tc: :flag_td: :flag_tf: :flag_tg: :flag_th: :flag_tj: :flag_tk: :flag_tl: :flag_tm: :flag_tn: :flag_to: :flag_tr: :flag_tt: :flag_tv: :flag_tw: :flag_tz: :flag_ua: :flag_ug: :flag_um: :flag_us: :flag_uy: :flag_uz: :flag_va: :flag_vc: :flag_ve: :flag_vg: :flag_vi: :flag_vn: :flag_vu: :flag_wf: :flag_ws: :flag_xk: :flag_ye: :flag_yt: :flag_za: :flag_zm: :flag_zw:".split(" ")
					}
				},
				Qa = function (a) {
					var b = a.getElementsByTagName("head")[0],
						f = a.createElement("script");
					a = a.createElement("link");
					f.type = "text/javascript";
					f.src = "https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js";
					f.async = !0;
					a.type = "text/css";
					a.rel = "stylesheet";
					a.href = "https://cdn.jsdelivr.net/emojione/2.2.7/assets/css/emojione.min.css";
					b.appendChild(a);
					b.appendChild(f);
					Na()
				},
				Na = function () {
					var a;
					clearTimeout(ra);
					c.isPopup ? a = d : (a = s.mobileBrowserName && c.isPopup ? b.viewHandler.chatContainer.elementId : g.container.elementId,
						a = document.getElementById(a), a = a.contentWindow || a.contentDocument || a);
					"undefined" === typeof a.emojione ? (na++, 20 === na ? (clearTimeout(ra), na = 0) : ra = setTimeout(function () {
						Na()
					}, 20)) : (clearTimeout(ra), na = 0, G = a.emojione, G.ascii = !0, za = G.shortnames.replace(/\\\+/g, "+").split("|"))
				},
				Oa = function (a) {
					var e, f = "",
						n = t["emoji-selection"],
						c = t["emoji-tab-select"];
					ya && ya === a ? l.addClass(a, "showWithFade") : (l.addClass(a, "showWithFade"), "undefined" === typeof G ? 20 === na ? a.innerHTML = b.languageParser.translate("chat", "emoji_error_load") :
						(0 === na && Na(), setTimeout(function () {
							Oa(a)
						}, 20)) : (clearTimeout(ra), ya = a, setTimeout(function () {
							Object.keys(Ma).forEach(function (a) {
								f += c.replace(/__ID__/, a).replace(/__IMAGE__/, G.shortnameToImage(Ma[a].header)).replace(/__IS_ACTIVE__/, "")
							});
							n = n.replace(/__TAB_LIST__/, f);
							a.innerHTML = n;
							e = l.getElementsByClassName(a, "open-tab");
							Ra(a, {
								target: e[0]
							});
							for (var d = 0; d < e.length; d++) b.eventHandler.listen(e[d], b.viewHandler.clickEvent, function (b) {
								b.stopPropagation();
								Ra(a, b)
							}, e[d].id + "OpenTab")
						})))
				},
				Ra = function (a,
					e) {
					var f, n, B, d = "",
						h = t["emoji-tab-pane"],
						k = t["emoji-list"];
					n = l.getElementsByClassName(a, "open-tab");
					if (B = "max" !== r.chatWindowState() && b.viewHandler.messagePreview ? b.viewHandler.messagePreview.container.getElementById("tab-content") : s.mobileBrowserName && c.isPopup ? b.viewHandler.chatContainer.getElementById("tab-content") : g.container.getElementById("tab-content")) {
						f = "open-tab" === e.target.className ? e.target : e.target.offsetParent;
						f = f.id;
						for (var m = 0; m < n.length; m++) n[m].className = n[m].id === f ? "open-tab active" :
							"open-tab";
						if ("search" === f) B.innerHTML = t["emoji-search-pane"], B = s.mobileBrowserName && c.isPopup ? b.viewHandler.chatContainer.getElementById("search-emoji") : g.container.getElementById("search-emoji"), b.eventHandler.listen(B, "keyup", function (a) {
							var e = b.eventHandler.getTargetElement(a).value.trim().toLowerCase(),
								f = t["emoji-list"],
								n = "";
							if ((a = s.mobileBrowserName && c.isPopup ? b.viewHandler.chatContainer.getElementById("search-list") : g.container.getElementById("search-list")) && za) {
								if (e)
									for (var B = 0; B < za.length; B++) {
										var d =
											za[B]; - 1 !== d.indexOf(e) && (n += f.replace(/__IMAGE__/, G.shortnameToImage(d)).replace(/__SHORTNAME__/g, d))
									}
								a.innerHTML = n;
								Sa()
							}
						}, "searchEmojiKeyup");
						else if (n = Ma[f]) n.content.forEach(function (a) {
							d += k.replace(/__IMAGE__/, G.shortnameToImage(a)).replace(/__SHORTNAME__/g, a)
						}), B.innerHTML = h.replace(/__EMOJIS__/, d).replace(/__ID__/, "people"), Sa()
					}
				},
				Sa = function () {
					for (var a = l.getElementsByClassName(ya, "emoji-select"), e = 0; e < a.length; e++) "touchend" === b.viewHandler.clickEvent ? bb(a[e]) : b.eventHandler.listen(a[e],
						b.viewHandler.clickEvent,
						function (a) {
							a = b.eventHandler.getTargetElement(a);
							Ta(a)
						}, a[e].id + "SelectEmoji")
				},
				bb = function (a) {
					b.eventHandler.listen(a, "touchstart", function (a) {
						b.eventHandler.getTargetElement(a).setAttribute("data-moved", "0")
					}, a.id + "TouchEmoji");
					b.eventHandler.listen(a, "touchmove", function (a) {
						b.eventHandler.getTargetElement(a).setAttribute("data-moved", "1")
					}, a.id + "MoveEmoji");
					b.eventHandler.listen(a, "touchend", function (a) {
						a = b.eventHandler.getTargetElement(a);
						"0" === a.getAttribute("data-moved") &&
							Ta(a);
						a.removeAttribute("data-moved")
					}, a.id + "TapEmoji")
				},
				Ta = function (a) {
					a = G.shortnameToUnicode(a.title);
					s.mobileBrowserName && c.isPopup ? b.viewHandler.addEmojiToInput(a) : "max" === r.chatWindowState() || c.isPopup || c.isEmbedded ? g.addEmojiToInput(a) : b.viewHandler.messagePreview && b.viewHandler.messagePreview.addEmojiToInput(a)
				},
				oa = function () {
					this.chatWindowStates = {
						min: !0,
						max: !0
					};
					this.selfOrigin = this.socket = null;
					this.forceDisconnected = this.banned = this.ready = this.disconnect = !1;
					this.clearRegisterRetryTimeout =
						null
				};
			oa.prototype = new EventEmitter;
			oa.prototype.init = function () {
				var a, e = this,
					f = (new Date).getTime();
				this.forceDisconnected = this.disconnect = u.connected = !1;
				this.removeAllListeners();
				this.socket && (this.socket.removeAllListeners(), this.socket.disconnect());
				null === s.windowId && aa.handleWindowId();
				null !== s.windowId && "null" !== s.windowId || b.loggingHandler.logIncident("windowId is null", {
					windowId: s.windowId,
					type: typeof s.windowId
				});
				a = {
					k: r.sessionKey,
					u: z.uuid,
					uv: z.uuidVer,
					a: L.pageId,
					cver: v.chatVersion,
					pop: c.isPopup,
					jv: r.currentVersion,
					asver: r.pageStatusVersion,
					ust: $_Tawk_Unstable
				};
				a.p && 255 < a.p.length && (a.p = a.p.substring(0, 255));
				this.socket = new $__TawkSocket("wss://" + r.visitorSocketServer + "/", {
					engineIo: $__TawkEngine,
					path: "/s",
					query: a
				});
				this.socket.on("disconnect", function () {
					e.disconnectHandler()
				});
				this.socket.on("error", function (a) {
					var f, c = "socket on error";
					if (a instanceof Error) {
						f = {
							toString: a.toString(),
							stack: a.stack,
							lineNumber: a.lineNumber,
							fileName: a.fileName
						};
						if (b.loggingHandler.unloading && -1 === f.toString.indexOf("post")) return;
						"TransportError" === a.type && (f.description = a.description); - 1 !== f.toString.indexOf("post") && (c = "socket post error")
					} else f = a;
					b.loggingHandler.logIncident(c, f);
					e.socket.disconnect();
					e.disconnectHandler()
				});
				this.socket.on("connect", function () {
					e.disconnect = !1
				});
				this.socket.on("ready", function (a, c, d) {
					if (!b) return e.disconnectSocket();
					e.selfOrigin = a;
					u.connected = !0;
					e.ready || (u.loaded = !0, "undefined" !== typeof $_Tawk_LoadStart && b.loggingHandler.logPerformance({
						socket: (new Date).getTime() - f,
						register: h.registerTime,
						widget: (new Date).getTime() - $_Tawk_LoadStart,
						script: (new Date).getTime() - R,
						download: R - $_Tawk_LoadStart
					}));
					e.ready = !0;
					try {
						b.eventEmitter.emit("syncConversation", c)
					} catch (g) {
						q.handleError("Unable to emit syncConversation", g.fileName, g.lineNumber, g.stack)
					}
					try {
						b.eventEmitter.emit("pageStatusUpdated", d)
					} catch (l) {
						q.handleError("Unable to emit pageStatusUpdated", l.fileName, l.lineNumber, l.stack)
					}
					try {
						b.eventEmitter.emit("socketReady")
					} catch (k) {
						q.handleError("Unable to emit socketReady", k.fileName, k.lineNumber,
							k.stack)
					}
					clearTimeout(e.clearRegisterRetryTimeout);
					e.clearRegisterRetryTimeout = setTimeout(function () {
						e.disconnect || h.resetRetryCount();
						e.clearRegisterRetryTimeout = null
					}, 5E3)
				});
				this.socket.on("remoteDisconnect", function (a) {
					a = a || {};
					if ("BANNED" === a.msg) {
						e.banned = !0;
						try {
							e.socket.disconnect()
						} catch (f) {
							q.handleError("Unable to emit disconnect socket on ban", f.fileName, f.lineNumber, f.stack)
						}
						b.main.hideWidget()
					} else e.socket.disconnect(), e.disconnectHandler()
				});
				this.addEventListeners()
			};
			oa.prototype.addEventListeners =
				function () {
					function a(a, e) {
						try {
							b.eventEmitter.emit(a, e)
						} catch (c) {
							q.handleError("Unable to emit socket event : " + a + " with data : " + JSON.stringify(e), c.fileName, c.lineNumber, c.stack)
						}
					}
					var e = this;
					this.socket.on("visitorChatWindowState", function (b) {
						e.selfOrigin !== b.origin && a("windowStateUpdated", b)
					});
					this.socket.on("visitorDataUpdate", function (b) {
						e.selfOrigin !== b.origin && a("visitorDataUpdate", b)
					});
					this.socket.on("visitorSound", function (a) {
						a.origin !== e.selfOrigin && b.chatHandler.toggleSound(!!a.sdo)
					});
					this.socket.on("visitorMessage", function (b) {
						e.selfOrigin !== b.origin && a("incomingMessage", b)
					});
					this.socket.on("visitorConversationPresenceUpdate", function (b) {
						a("incomingMessage", b)
					});
					this.socket.on("pageStatus", function (b) {
						a("pageStatusUpdated", b)
					});
					this.socket.on("newCriticalUpdate", function (a) {
						a = a || 0;
						a != r.criticalVersion && b.main.criticalRefresh(a, !0)
					});
					this.socket.on("newUnstableCriticalUpdate", function (a) {
						a = a || 0;
						$_Tawk_Unstable && a != r.criticalVersion && b.main.criticalRefresh(a, !0)
					});
					this.socket.on("visitorPopupFocus",
						function (b) {
							b = b || {};
							a("visitorPopupFocus", !!b.hasFocus)
						});
					this.socket.on("chatBubbleClosed", function (b) {
						b.origin !== e.selfOrigin && a("chatBubbleClosed", !0)
					});
					this.socket.on("agentIsTyping", function (b) {
						a("agentIsTyping", b)
					});
					this.socket.on("agentStopedTyping", function (b) {
						a("agentStopedTyping", b)
					});
					this.socket.on("pageDisable", function () {
						a("removeWidget")
					});
					this.socket.on("widgetScheduleUpdate", function (b) {
						a("scheduleUpdate", b)
					});
					this.socket.on("uploadProgress", function (b) {
						a("fileUploadProgress", b)
					});
					this.socket.on("uploadFinished", function (b) {
						a("fileUploadFinished", b)
					});
					this.socket.on("uploadError", function (b) {
						a("fileUploadError", b)
					});
					this.socket.on("vCallStatus", function (b) {
						a("webrtcCallStatus", b)
					});
					this.socket.on("visitorChatSeen", function (b) {
						a("visitorChatSeen", b)
					});
					this.socket.on("visitorChatDismiss", function (b) {
						a("visitorChatDismiss", b)
					});
					this.socket.on("visitorTagsUpdate", function (b) {
						a("visitorTagsUpdate", b)
					});
					this.on("notifyWindowState", function (a) {
						e.chatWindowStates[a] && e.socket.send("chatWindowState",
							a)
					});
					this.on("notifyChatBubbleClosed", function () {
						e.socket.send("chatBubbleClose")
					});
					this.on("notifyMessagePreview", function (a) {
						e.socket.send("messagePreview", a, (new Date).getTime())
					});
					this.on("sendChatMessage", function (a, b) {
						e.socket.send("chatMessage", a, b)
					});
					this.on("notifyNameChange", function (a, b) {
						e.socket.send("saveNameChangeForm", a, b)
					});
					this.on("notifyEmailTranscript", function (a, b) {
						e.socket.send("saveTranscriptEmailForm", a, b)
					});
					this.on("notifyEndChatTranscript", function (a, b) {
						e.socket.send("sendTranscript",
							a, b)
					});
					this.on("notifyOfflineMessage", function (a, b) {
						e.socket.send("service", "visitor-chat", "/v1/visitor/offline-form", a, b)
					});
					this.on("visitorChatSeen", function (a, b) {
						this.socket.send("service", "visitor-chat", "/v1/visitor/messages-seen", a, b)
					});
					this.on("visitorChatDismiss", function (a, b) {
						this.socket.send("service", "visitor-chat", "/v1/visitor/dismiss-preview", a, b)
					});
					this.on("notifyPrechat", function (a, b) {
						e.socket.send("savePrechatForm", a, b)
					});
					this.on("setRating", function (a) {
						e.socket.send("visitorRating",
							a)
					});
					this.on("toggleSound", function (a) {
						e.socket.send("visitorSound", a)
					});
					this.on("notifyWidgetResized", function () {
						e.socket.send("chatWindowResize")
					});
					this.on("popupOnFocus", function (a) {
						e.socket.send("visitorPopupFocus", a)
					});
					this.on("notifySocketStatusUpdate", function (a) {
						e.socket.send("socketStatusUpdate", a)
					});
					this.on("saveForeignKey", function (a, b) {
						e.socket.send("saveForeignKey", a, b)
					});
					this.on("saveConversion", function (a, b) {
						e.socket.send("saveConversion", a, b)
					});
					this.on("submitMultipleOptions", function (a,
						b) {
						e.socket.send("saveMultipleOptions", a, b)
					});
					this.on("endVisitorChat", function (a, b) {
						e.socket.send("endChat", b)
					});
					this.on("fileUploadMessage", function (a, b) {
						e.socket.send("fileUploadMessage", a, b)
					});
					this.on("addEvent", function (a, b) {
						e.socket.send("addEvent", a, b)
					});
					this.on("setAttributes", function (a, b) {
						e.socket.send("setAttributes", a, b)
					});
					this.on("addTags", function (a, b) {
						e.socket.send("addTags", a, b)
					});
					this.on("removeTags", function (a, b) {
						e.socket.send("removeTags", a, b)
					});
					this.on("getWebRTCToken", function (a,
						b) {
						this.socket.send("service", "webrtc", "/v1/vcall/init/visitor", a, b)
					});
					this.on("getCallStatus", function (a, b) {
						this.socket.send("service", "webrtc", "/v1/vcall/status/visitor", a, b)
					});
					this.on("declineCall", function (a, b) {
						this.socket.send("service", "webrtc", "/v1/vcall/reject/visitor", a, b)
					});
					this.on("nav", function (a, b) {
						this.socket.send("nav", a, b)
					})
				};
			oa.prototype.disconnectSocket = function () {
				this.forceDisconnected = !0;
				this.socket && (this.socket.disconnect(), this.disconnectHandler())
			};
			oa.prototype.disconnectHandler =
				function () {
					u.connected = !1;
					this.socket.removeAllListeners();
					this.removeAllListeners();
					b.scheduler.cleanUp();
					this.banned || (this.forceDisconnected || this.disconnect) || (this.disconnect = !0, h.retryRegister())
				};
			var D = function (a, b, f, n, c) {
				var d = this;
				this.elementId = a || "";
				this.style = b || "";
				this.tagName = n || "div";
				this.childViews = [];
				this.template = a && t[a] ? t[a] : "";
				this.elementReferrer = null;
				this.documentRef = c || document;
				this.attributes = {};
				this.isVisible = !1;
				this.classNames = [];
				"iframe" === n && (this.isIframe = !0);
				this.elementId &&
					(this.attributes.id = this.elementId);
				f && Object.keys(f).forEach(function (a) {
					d.attributes[a] = f[a]
				})
			};
			D.prototype.addChildViews = function (a) {
				var b = this;
				a.forEach(function (a) {
					b.childViews.push(a)
				})
			};
			D.prototype.buildView = function (a) {
				this.documentRef = a || this.documentRef;
				this.elementReferrer = l.createElement(this.documentRef, this.tagName, this.attributes, this.style, this.template);
				this.elementReferrer.className += this.classNames.join(" ");
				this.isIframe || this.buildChildViews();
				return this.elementReferrer
			};
			D.prototype.buildChildViews =
				function (a) {
					var b = this;
					this.childViews.length && (this.documentRef = a || this.documentRef, this.childViews.forEach(function (a) {
						b.elementReferrer.appendChild(a.buildView(b.documentRef))
					}))
				};
			D.prototype.restyle = function (a, b) {
				b && (-1 === b.indexOf("!important") && (b += " !important"), this.elementReferrer ? this.elementReferrer.style.cssText += ";" + a + ":" + b : this.style += ";" + a + ":" + b)
			};
			D.prototype.attachUserEventListener = function (a, e, f, n) {
				var c;
				if (c = f ? this.getElementById(f) : this.elementReferrer) f = a.split(" "), 1 < f.length ?
					f.forEach(function (a) {
						b.eventHandler.listen(c, a, e, a + n)
					}) : b.eventHandler.listen(c, a, e, n)
			};
			D.prototype.toggle = function () {
				this.isVisible ? (this.restyle("display", "none !important"), this.isVisible = !1) : (this.restyle("display", "block !important"), this.isVisible = !0)
			};
			D.prototype.getElementById = function (a) {
				return this.elementReferrer ? this.documentRef.getElementById(a) : null
			};
			D.prototype.insertHtml = function (a) {
				this.elementReferrer.innerHTML = a
			};
			D.prototype.clear = function () {
				this.elementReferrer && (this.elementReferrer.outerHTML =
					"", this.elementReferrer = null)
			};
			D.prototype.addClass = function (a) {
				-1 === this.classNames.indexOf(a) && (this.classNames.push(a), this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" ")))
			};
			D.prototype.removeClass = function (a) {
				for (; - 1 !== this.classNames.indexOf(a);) this.classNames.splice(this.classNames.indexOf(a), 1);
				this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" "))
			};
			D.prototype.hide = function () {
				this.restyle("display", "none !important");
				this.isVisible = !1
			};
			D.prototype.show = function () {
				this.restyle("display", "block !important");
				this.isVisible = !0
			};
			D.prototype.insertCssFile = function (a, e) {
				var f = this.documentRef.getElementsByTagName("head")[0],
					n = this.documentRef.createDocumentFragment(),
					c = l.createElement(this.documentRef, "style", {
						type: "text/css"
					}),
					d = this.documentRef.createTextNode(e ? a : b.ResetStyle + "" + a);
				n.appendChild(c);
				f.appendChild(n);
				c.styleSheet ? c.styleSheet.cssText = d.nodeValue : c.appendChild(d)
			};
			D.prototype.massRestyle = function (a) {
				for (var b in a) a.hasOwnProperty(b) &&
					this.restyle(b, a[b])
			};
			var N = function () {
				D.apply(this, arguments)
			};
			N.prototype = new D;
			N.prototype.constructor = N;
			N.prototype.parent = D.prototype;
			N.prototype.buildIframe = function (a, b) {
				this.documentRef = l.getDocument(this.elementReferrer);
				if (s.isIE) this.documentRef.open(), this.documentRef.writeln('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /></head><body></body></html>'),
					this.documentRef.close();
				else {
					this.documentRef.open();
					this.documentRef.close();
					var f = document.implementation.createDocumentType("html", "", "");
					this.documentRef.insertBefore(f, this.documentRef.childNodes[0]);
					this.documentRef.head.innerHTML = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /></head>'
				}
				b || l.updateFontStylesheet(this.documentRef);
				this.insertCssFile(a);
				this.insertContent();
				this.buildChildViews()
			};
			N.prototype.insertContent = function () {
				this.documentRef.body.innerHTML = this.template
			};
			N.prototype.buildChildViews = function () {
				var a = this;
				this.childViews.forEach(function (b) {
					a.documentRef.body.appendChild(b.buildView(a.documentRef))
				})
			};
			var ba = function (a) {
				this.template = (this.elementId = (this.formData = a) ? a.id : null) && t[this.elementId] ? t[this.elementId] : "";
				this.elementReferrer = null;
				this.documentRef = document;
				this.attributes = {
					className: "form"
				};
				this.elementId && (this.attributes.id = this.elementId)
			};
			ba.prototype.buildForm = function () {
				this.formData.additionalFields = [];
				this.insertTranslatedTexts()
			};
			ba.prototype.buildView = function (a) {
				this.documentRef = a || this.documentRef;
				return this.elementReferrer = l.createElement(this.documentRef, "div", this.attributes, null, this.template)
			};
			ba.prototype.addPlaceholderText = function (a, e, f, n, c) {
				c = RegExp("__" + a.toUpperCase() + "_PLACEHOLDER__", "gm");
				a.toUpperCase();
				a = RegExp("__" + a.toUpperCase() + "__", "gm");
				var d = b.languageParser.translate("form", f + "Placeholder");
				s.isPlaceholderSupported ||
					e || (e = d);
				d && d !== f + "Placeholder" || (d = e, e = "");
				if (n) return l.escapeTemplateReplacement(n, [{
					placeholder: c,
					textReplace: d
				}, {
					placeholder: a,
					textReplace: e
				}]);
				this.template = l.escapeTemplateReplacement(this.template, [{
					placeholder: c,
					textReplace: d
				}, {
					placeholder: a,
					textReplace: e
				}])
			};
			ba.prototype.addPlaceholderHandler = function () {
				var a, e = this;
				s.isPlaceholderSupported || (a = this.formData.fields) && a.forEach(function (a) {
					var n, c, d;
					"input" !== a.type || a.isEnabled && !a.isEnabled() || (d = a.getValue ? a.getValue() : "", "input" === a.type &&
						l.isArray(d) ? d.forEach(function (b, d) {
							n = e.documentRef.getElementById(a.fieldName + d);
							c = b;
							l.togglePlaceholderText(n, c, a.fieldName + d);
							"textarea" !== n.tagName.toLowerCase() || l.trim(n.value) || (n.value = c)
						}) : a.hiddenIE8 || (n = e.documentRef.getElementById(a.fieldName + "Field"), c = b.languageParser.translate("form", a.languageKey + "Placeholder"), l.togglePlaceholderText(n, c, a.fieldName + "Field"), "textarea" !== n.tagName.toLowerCase() || l.trim(n.value) || (n.value = c)))
				})
			};
			ba.prototype.insertTranslatedTexts = function () {
				var a =
					this,
					e = "";
				(this.formData.fields || []).forEach(function (b) {
					var e;
					e = b.getValue ? b.getValue() : "";
					a.addPlaceholderText(b.fieldName, e, b.languageKey, null, b.labelText)
				});
				this.template = l.escapeTemplateReplacement(this.template, [{
					placeholder: "__TITLE__",
					textReplace: this.formData.getTitle ? this.formData.getTitle() : b.languageParser.translate("form", this.formData.title)
				}, {
					placeholder: "__OVERLAY__",
					textReplace: b.languageParser.translate("overlay", this.formData.overlayMessage)
				}, {
					placeholder: "__CANCEL_BUTTON__",
					textReplace: b.languageParser.translate("form",
						"CancelButton")
				}, {
					placeholder: "__CLOSE_BUTTON__",
					textReplace: b.languageParser.translate("form", "CloseButton")
				}, {
					placeholder: "__SAVE_BUTTON__",
					textReplace: b.languageParser.translate("form", "SaveButton")
				}, {
					placeholder: "__SEND_BUTTON__",
					textReplace: b.languageParser.translate("form", "SendButton")
				}, {
					placeholder: "__SUBMIT_BUTTON__",
					textReplace: b.languageParser.translate("form", "SubmitButton")
				}, {
					placeholder: "__START_CHAT_BUTTON__",
					textReplace: b.languageParser.translate("form", "StartChatButton")
				}, {
					placeholder: "__END_CHAT_BUTTON__",
					textReplace: b.languageParser.translate("rollover", "end")
				}, {
					placeholder: "__SUBMITTING_INDICATOR__",
					textReplace: b.languageParser.translate("form", "SubmittingProcess")
				}, {
					placeholder: "__ENDING_INDICATOR__",
					textReplace: b.languageParser.translate("form", "EndingProcess")
				}, {
					placeholder: "__SENDING_INDICATOR__",
					textReplace: b.languageParser.translate("form", "SendingProcess")
				}, {
					placeholder: "__SAVING_INDICATOR__",
					textReplace: b.languageParser.translate("form", "SavingProcess")
				}, {
					placeholder: "__EMAIL_TRANSCRIPT_TO__",
					textReplace: b.languageParser.translate("form", "EmailTranscriptTo")
				}, {
					placeholder: "__OFFLINE_MESSAGE_SUCCESSFULY_SENT__",
					textReplace: b.languageParser.translate("form", "OfflineMessageSent")
				}, {
					placeholder: "__SEND_AGAIN__",
					textReplace: b.languageParser.translate("form", "sendAgain")
				}, {
					placeholder: /__STATUS__/gm,
					textReplace: b.languageParser.translate("form", "saving")
				}, {
					placeholder: "__CHANGE_NAME__",
					textReplace: b.languageParser.translate("menu", "change_name")
				}, {
					placeholder: /__SAFARI__/gm,
					textReplace: "safari" ===
						s.vendor ? "safari-fix" : ""
				}, {
					placeholder: /__SKIP_BUTTON__/,
					textReplace: b.languageParser.translate("chat", "skip")
				}, {
					placeholder: "__START_CHAT__",
					textReplace: b.languageParser.translate("chat", "newChat")
				}, {
					placeholder: "__EMAIL_TRANCRIPT__",
					textReplace: b.languageParser.translate("rollover", "emailTranscriptOption")
				}, {
					placeholder: "__END_CHAT_MESSAGE__",
					textReplace: b.languageParser.translate("form", "EndChatMessage")
				}]);
				this.template = "safari" === s.vendor || "chrome" === s.vendor || "firefox" === s.vendor || "mozilla" ===
					s.vendor || s.isIE && 8 <= s.version ? this.template.replace("__NON_MODERN__", "") : this.template.replace("__NON_MODERN__", "other-fix");
				s.mobileBrowserName && (e = l.escapeTemplateReplacement(t["close-form-button"], [{
					placeholder: "__CLOSE_BUTTON__",
					textReplace: b.languageParser.translate("form", "CloseButton")
				}]));
				this.template = l.escapeTemplateReplacement(this.template, [{
					placeholder: "__CLOSE_BUTTON_CONTAINER__",
					textReplace: e
				}]);
				this.formData.customButtons && (this.template = l.escapeTemplateReplacement(this.template,
					this.formData.customButtons()))
			};
			var U = function (a, b) {
				ba.apply(this, [a]);
				this.formName = b;
				this.isFormRequired = !1
			};
			U.prototype = new ba;
			U.prototype.constructor = U;
			U.prototype.parent = ba.prototype;
			U.prototype.buildForm = function () {
				var a, e = [];
				a = "preChatForm" == this.formName ? "prechat" : "offline";
				this.formData.additionalFields = [];
				this.insertTranslatedTexts();
				if (null === this.formData.dynamicFields) {
					for (var f = 0, n = c[a + "Options"].fields.length; f < n; f++) {
						var d = {},
							g = c[a + "Options"].fields[f];
						g.id = a + f;
						d.label = g.label;
						d.instantValidation = !1;
						d.isRequired = g.isRequired;
						d.fieldName = a + f;
						d.fieldType = g.type;
						d.validation = "isValidString";
						"name" === g.type ? (d.valueMaxLength = 40, d.getValue = b.visitorHandler.getNameValue, d.languageKey = "Name") : "email" === g.type ? (d.valueMaxLength = 150, d.getValue = b.visitorHandler.getEmailValue, d.validation = "isValidEmail", d.languageKey = "Email") : "message" === g.type || "textArea" === g.type ? d.valueMaxLength = 500 : "inputText" === g.type ? d.valueMaxLength = 150 : "department" === g.type ? d.getValue = b.sessionHandler.getDeparmentOptions : "choice" ===
							g.type || "option" === g.type ? (d.type = "options", d.selections = g.selections) : "phone" === g.type && (d.valueMaxLength = 20, d.validation = "isValidPhone", d.languageKey = "Phone");
						d.isRequired && !d.languageKey && (d.languageKey = "Required");
						e.push(d)
					}
					this.formData.dynamicFields = e
				}
				this.generateDynamicFields()
			};
			U.prototype.generateDynamicFields = function () {
				for (var a = "", b = RegExp("__LABEL__", "gm"), f = RegExp("__ID__", "gm"), n = RegExp("__MAXLENGTH__", "gm"), c = 0, d = this.formData.dynamicFields.length; c < d; c++) {
					var g, h = "",
						l = this.formData.dynamicFields[c];
					if ("name" === l.fieldType || "email" === l.fieldType || "phone" === l.fieldType || "inputText" === l.fieldType) g = t.inputTextFieldType, g = "email" === l.fieldType ? g.replace("__INPUT_TYPE__", "email") : g.replace("__INPUT_TYPE__", "text");
					else if ("message" === l.fieldType || "textArea" === l.fieldType) g = t.textAreaFieldType;
					else if ("department" === l.fieldType) g = t.departmentSelection;
					else if ("choice" === l.fieldType || "option" === l.fieldType) g = t.selectionsType, h = "choice" === l.fieldType ? this.generateCheckboxOptions(l.fieldName, l.selections) :
						this.generateRadioOptions(l.fieldName, l.selections);
					g && (g = g.replace(b, l.label || ""), g = g.replace(f, l.fieldName || ""), g = g.replace(n, l.valueMaxLength || ""), l.isRequired ? (g = g.replace(/__REQUIRED__/gm, "*"), this.isFormRequired || (this.isFormRequired = !0)) : g = g.replace(/__REQUIRED__/gm, ""), l.getValue && ("department" === l.fieldType ? (h = this.generateDropDownOptions(l.getValue(), l.isRequired, l.label)) || (g = "") : h = l.getValue()), g = g.replace("__VALUE__", h), a += g)
				}
				this.template = this.template.replace("__FIELDS__", a)
			};
			U.prototype.generateDropDownOptions =
				function (a, e, f) {
					var n = "";
					if (0 === a.length) return !1;
					"preChatForm" === this.formData.id || "offlineForm" === this.formData.id ? n += '<option id="department-default" value="" disabled selected>' + (e ? "* " : "") + (f ? f : b.languageParser.translate("form", "department")) + "</option>" : e || (n += '<option value="0"></option>');
					e = 0;
					for (f = a.length; e < f; e++) n += '<option value="' + a[e].value + '"' + (a[e].selected ? 'selected="selected"' : "") + ">" + a[e].text + "</option>";
					return n
				};
			U.prototype.generateRadioOptions = function (a, b) {
				for (var f = "", n = t.radioSelectionType,
						c = 0, d = b.length; c < d; c++) f += n.replace(/__ID__/gm, a + "radio" + c).replace(/__FIELD_ID__/gm, a).replace(/__VALUE__/gm, b[c]);
				return f
			};
			U.prototype.generateCheckboxOptions = function (a, b) {
				for (var f = "", n = t.checkboxSelectionType, c = 0, d = b.length; c < d; c++) f += n.replace(/__ID__/gm, a + "check" + c).replace(/__FIELD_ID__/gm, a).replace(/__VALUE__/gm, b[c]);
				return f
			};
			U.prototype.updateName = function (a) {
				for (var e, f = 0, n = this.formData.dynamicFields.length; f < n; f++) {
					var c = this.formData.dynamicFields[f];
					if ("name" === c.fieldType) {
						e = b.viewHandler.chatContainer.getElementById(c.fieldName +
							"Field");
						break
					}
				}
				e && (e.value = a)
			};
			U.prototype.updateEmail = function (a) {
				for (var e, f = 0, n = this.formData.dynamicFields.length; f < n; f++) {
					var c = this.formData.dynamicFields[f];
					if ("email" === c.fieldType) {
						e = b.viewHandler.chatContainer.getElementById(c.fieldName + "Field");
						break
					}
				}
				e && (e.value = a)
			};
			U.prototype.addPlaceholderHandler = function () {
				var a, b;
				if (!s.isPlaceholderSupported)
					for (var f = 0, n = this.formData.dynamicFields.length; f < n; f++) b = this.formData.dynamicFields[f], "department" !== b.fieldType && ("choice" !== b.fieldType &&
						"option" !== b.fieldType) && (this.formData.dynamicFields[f].placeholderText = (b.isRequired ? "* " : "") + b.label, a = this.documentRef.getElementById(b.fieldName + "Field"), l.togglePlaceholderText(a, this.formData.dynamicFields[f].placeholderText, b.fieldName + "Field"), l.trim(a.value) || (a.value = this.formData.dynamicFields[f].placeholderText))
			};
			var ia = function (a) {
				var e = this;
				this.container = a;
				this.unansweredMessages = 0;
				b.eventEmitter.on("visitorPopupFocus", function (a) {
					e.isPopupFocused = a;
					e.hide()
				});
				r.chatWindowState.subscribe(function (a) {
					"max" ===
					a && e.hide()
				});
				this.originalPageTitle = document.title;
				this.pageTitleNotification = {
					interval: null,
					on: function () {
						!this.interval && c.showUnreadInTab() && (this.interval = setInterval(function () {
							document.title = e.originalPageTitle === document.title ? b.languageParser.translate("chat", "newMessage", {
								num: e.unansweredMessages
							}) : e.originalPageTitle
						}, 1E3))
					},
					off: function () {
						clearInterval(this.interval);
						this.interval = null;
						document.title = e.originalPageTitle
					}
				}
			};
			ia.prototype.initIndicator = function () {
				b.viewHandler.totalUnseenMessages &&
					this.updateUnseenMessages(b.viewHandler.totalUnseenMessages)
			};
			ia.prototype.show = function () {
				var a, e;
				if (!("max" === r.chatWindowState() && !c.isPopup || this.isPopupFocused && !b.viewHandler.popoutWin.closed || c.hideWidgetOnLoad || "restartChatForm" === b.formHandler.currentForm || "offlineForm" === b.formHandler.currentForm) && this.container && this.container.elementReferrer) {
					a = this.container.getElementById("tawkchat-chat-indicator");
					if (e = this.container.getElementById("tawkchat-chat-indicator-text")) e.innerHTML = this.unansweredMessages;
					a && "block" !== a.style.display && (a.style.display = "block", a.style.visibility = "hidden", b.viewHandler.handleIndicatorToggle(!0), b.viewHandler.showWidget(), this.container.show());
					if (!c.showMessagePreview() || !b.viewHandler.messagePreview || !b.viewHandler.messagePreview.isShown || document.hidden) this.pageTitleNotification.on()
				}
			};
			ia.prototype.hide = function () {
				var a, e;
				this.container && this.container.elementReferrer && (a = this.container.getElementById("tawkchat-chat-indicator"), e = this.container.getElementById("tawkchat-chat-indicator-text"),
					a && "block" === a.style.display && (a.style.display = "none", b.viewHandler.handleIndicatorToggle(), s.mobileBrowserName || this.container.hide()), e && (e.innerHTML = ""))
			};
			ia.prototype.updateUnseenMessages = function (a) {
				this.unansweredMessages = a;
				k.triggerApiHandlers("onUnreadCountChanged", this.unansweredMessages);
				if (0 === this.unansweredMessages) this.pageTitleNotification.off();
				else if ("min" === r.chatWindowState()) this.show();
				else this.pageTitleNotification.on()
			};
			var E = function (a) {
				this.container = a;
				this.documentRef =
					this.container.documentRef;
				this.quickReplyContainer = this.messagePreviewContainer = null;
				this.prevSenderUid = "";
				this.messagePreviewCount = 0;
				this.timeIntervalsArr = [];
				this.isQuickReplyInitialized = !1;
				this.maxNumberFileUpload = 5;
				this.chatTextarea = new D("chatTextarea", null, null, "textarea");
				this.incomingCallContainer = null;
				this.offsetX = c.widgetOffsetX;
				this.offsetY = c.widgetOffsetY;
				this.wrapper = null;
				this.isActionsContainerNotifShown = !1;
				this.lastRadioButton = null;
				this.resizeThrottle = 0
			};
			E.prototype.init = function () {
				var a =
					this;
				this.container && (this.wrapper || (this.wrapper = this.container.getElementById("tawkchat-message-preview-container"), c.isRTL() && (this.wrapper.className += "rtl-direction ")), s.mobileBrowserName ? this.updateMobilePositions() : this.updatePositions(), c.chatPosition.subscribe(function () {
					a.updatePositions()
				}))
			};
			E.prototype.show = function (a, e, f) {
				var n = this;
				0 !== a && (this.container && (e || f)) && (1 === a ? this.messagePreviewCount = 1 : this.messagePreviewCount++, this.messagePreviewContainer || (this.messagePreviewContainer =
						this.container.getElementById("tawkchat-message-preview-messages-container"), c.isCenterPositioned() ? this.messagePreviewContainer.style.maxHeight = document.documentElement.clientHeight - (document.documentElement.clientHeight / 2 - 180) - 210 + "px" : this.messagePreviewContainer.style.maxHeight = document.documentElement.clientHeight - (c.minimizedDimensions().height + c.widgetOffsetY + 300) + "px", this.toggleUploadsAction(), this.toggleRatingAction(), this.toggleEmojiAction()), this.quickReplyContainer || (this.quickReplyContainer =
						this.container.getElementById("tawkchat-message-preview-quick-reply-container")), this.isShown = !0, this.container.restyle("display", "block"), p && p.hideBubble(), e && !s.mobileBrowserName ? this.appendMessage(e) : f && (f.isMissed ? this.appendCallInfo(f) : (this.messagePreviewCount--, this.appendCallRequest(f))), this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
						b.sessionHandler.notifyWindowState("max");
						b.viewHandler.scrollToBottom()
					}, "tawkchat-message-preview-messages-container", "mp-maximizeClick"),
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
						b.sessionHandler.visitorChatDismiss(function () {});
						n.removeAllElements()
					}, "tawkchat-message-preview-close", "mp-closeitemsclick"), this.isQuickReplyInitialized || this.initQuickReply(), this.showQuickReply(), 0 === this.messagePreviewCount ? this.hideQuickReply() : (c.showPreChatForm && !r.prechatFormSubmitted() && c.prechatOptions.fields.forEach(function (a) {
							a.isRequired && n.hideQuickReply()
						}), this.hideActionsContainerNotif(), this.resizeTextArea(),
						setTimeout(function () {
							n.container && n.container.restyle("height", n.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px")
						}, 50), c.showEmoji.subscribe(function () {
							n.toggleEmojiAction()
						}), c.showUploads.subscribe(function () {
							n.toggleUploadsAction()
						}), c.showRating.subscribe(function () {
							n.toggleRatingAction()
						})))
			};
			E.prototype.toggleUploadsAction = function () {
				var a = this,
					e = this.container.documentRef.getElementById("uploadFileOption"),
					f = this.container.documentRef.getElementById("actionsContainer");
				e && (c.showUploads() ? (e.style.display = "block", this.container.attachUserEventListener("change", function (e) {
					b.eventHandler.cancelEvent(e);
					e = b.eventHandler.getTargetElement(e).files;
					var f = [],
						c = [];
					if (e && e.length) {
						for (var d = 0; d < e.length; d++) e[d].size > a.maxSizeFileUpload ? f.push(e[d]) : d >= a.maxNumberFileUpload ? c.push(e[d]) : b.viewHandler.startUpload(e[d]);
						b.viewHandler.checkUploadFileWarning(f, c);
						b.viewHandler.userAction = !1;
						b.sessionHandler.notifyWindowState("max")
					}
				}, "fileInput", "mp-fileInputChanged"), this.chatTextarea.attachUserEventListener("paste",
					function (a) {
						var e, f;
						if ((e = (a.originalEvent || a).clipboardData) && (e = e.items) && e.length) {
							for (var c = 0; c < e.length; c++)
								if (-1 !== e[c].type.indexOf("image")) {
									var d = e[c].getAsFile();
									if (null !== d) {
										f = d;
										f.name = b.languageParser.translate("chat", "pasted_image_title", {
											dateTime: l.parseChatTime(new Date)
										});
										break
									}
								}
							f && (b.viewHandler.startUpload(f), a.preventDefault())
						}
					}, null, "mp-chatTextareaPaste"), this.container.attachUserEventListener("dragover", function (a) {
					a.preventDefault();
					a.stopPropagation && a.stopPropagation(); - 1 ===
						f.className.indexOf(" drag-over") && l.addClass(f, "drag-over")
				}, "actionsContainer", "mp-textareaContainerDragOver"), this.container.attachUserEventListener("dragleave", function (b) {
					var e = a.container.getElementById("tawkchat-message-preview-container").getBoundingClientRect();
					if (b.clientY < e.top || b.clientY >= e.bottom || b.clientX < e.left || b.clientX >= e.right) b.preventDefault(), b.stopPropagation && b.stopPropagation(), l.removeClass(f, "drag-over")
				}, "actionsContainer", "mp-textareaContainerDragLeave"), this.container.attachUserEventListener("drop",
					function (e) {
						e.preventDefault();
						e.stopPropagation && e.stopPropagation();
						f.className = f.className.replace(/ drag-over/g, "");
						e = e.target.files || e.dataTransfer.files;
						var c = [],
							d = [];
						if (e && 0 !== e.length) {
							for (var g = 0; g < e.length; g++) e[g].size > a.maxSizeFileUpload ? c.push(e[g]) : g >= a.maxNumberFileUpload ? d.push(e[g]) : b.viewHandler.startUpload(e[g]);
							a.chatTextarea.elementReferrer.value = "";
							a.resizeTextArea();
							a.chatTextarea.elementReferrer.value ? a.toggleActionsContentOnTyping(!1) : a.toggleActionsContentOnTyping(!0);
							b.viewHandler.checkUploadFileWarning(c,
								d);
							b.viewHandler.userAction = !1;
							b.sessionHandler.notifyWindowState("max")
						}
					}, "actionsContainer", "mp-textareaContainerDrop")) : e.style.display = "none")
			};
			E.prototype.toggleRatingAction = function () {
				var a = this.container.getElementById("rateMainWrapper"),
					e = this.container.getElementById("rateContainer");
				a && e && (c.showRating() ? (a.style.display = "block", this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
					b.chatHandler.changeRating(1);
					b.viewHandler.userAction = !1;
					b.sessionHandler.notifyWindowState("max");
					b.eventHandler.cancelEvent(a)
				}, "ratePositive", "mp-ratepveclick"), this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
					b.chatHandler.changeRating(-1);
					b.viewHandler.userAction = !1;
					b.sessionHandler.notifyWindowState("max");
					b.eventHandler.cancelEvent(a)
				}, "rateNegative", "mp-ratenveclick"), this.container.attachUserEventListener("mouseover", function () {
					e.style.display = "block"
				}, "rateMainWrapper", "rateMainWrapperOverQR"), this.container.attachUserEventListener("mouseout", function () {
					e.style.display =
						"none"
				}, "rateMainWrapper", "rateMainWrapperOutQR")) : a.style.display = "none")
			};
			E.prototype.updateMobilePositions = function () {
				var a = {},
					e = c.minimizedDimensions().width,
					f = c.minimizedDimensions().height;
				c.isCenterPositioned() ? (-1 === this.wrapper.className.indexOf("center") && (this.wrapper.className += "center"), a.top = "calc(50% - " + (0.5 * e + 20) + "px) !important", a.bottom = "auto !important", c.isRightPositioned() ? (-1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right"), a.right = this.offsetX +
					f + 15 + 100 + "px !important", a.left = "auto !important") : (-1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"), a.left = this.offsetX + f + 15 + 100 + "px !important", a.right = "auto !important")) : (f = b.viewHandler.minifiedBoxHeight * b.viewHandler.zoom + 30, c.isTopPositioned() ? (a.bottom = "auto !important", a.top = f + 30 + "px !important", -1 === this.wrapper.className.indexOf("top") && (this.wrapper.className += " top")) : (a.bottom = f + 30 + "px !important", a.top = "auto !important", -1 === this.wrapper.className.indexOf("bottom") &&
					(this.wrapper.className += " bottom")), c.isRightPositioned() ? (a.right = "10px !important", a.left = "auto !important", -1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right")) : (a.right = "auto !important", a.left = "10px !important", -1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left")));
				this.container.massRestyle(a)
			};
			E.prototype.updatePositions = function () {
				var a = {},
					b = c.minimizedDimensions().width,
					f = c.minimizedDimensions().height;
				c.isCenterPositioned() ? (-1 === this.wrapper.className.indexOf("center") &&
					(this.wrapper.className += "center"), a.top = "calc(50% - " + (0.5 * b + 40) + "px) !important", a.bottom = "auto !important", c.isRightPositioned() ? (-1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right"), a.right = this.offsetX + f + 15 + "px !important", a.left = "auto !important") : (-1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"), a.left = this.offsetX + f + 15 + "px !important", a.right = "auto !important")) : (c.isTopPositioned() ? (a.top = c.minimizedDimensions().height + this.offsetY +
					"px !important", a.bottom = "auto !important", -1 === this.wrapper.className.indexOf("top") && (this.wrapper.className += " top")) : (c.isDesktopRectangle() ? a.bottom = c.minimizedDimensions().height + this.offsetY + 10 + "px !important" : a.bottom = 80 + this.offsetY + "px !important", a.top = "auto !important", -1 === this.wrapper.className.indexOf("bottom") && (this.wrapper.className += " bottom")), c.isRightPositioned() ? (a.right = this.offsetX + "px !important", a.left = "auto !important", -1 === this.wrapper.className.indexOf("right") && (this.wrapper.className +=
					" right")) : (a.left = this.offsetX + "px !important", a.right = "auto !important", -1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left")));
				this.container.massRestyle(a)
			};
			E.prototype.setStyleToSingleAgent = function () {
				var a, b, f;
				if (this.messagePreviewContainer && this.container)
					for (a = this.messagePreviewContainer.getElementsByClassName("messageBody"), b = this.container.documentRef.getElementById("actionsContainer"), f = this.container.documentRef.getElementById("textareaWrapper"), this.quickReplyContainer.style.marginTop =
						"10px", b.setAttribute("style", "border-radius:5px 5px 5px 5px !important; background-color: #fff"), f.setAttribute("style", "border-radius:5px 5px 5px 5px !important"), b = 0; b < a.length; b++) f = 10, a[b].setAttribute("style", "border-bottom-width:1px !important; border-radius:5px 5px 5px 5px !important"), 0 === b && (f = 0), a[b].parentElement.setAttribute("style", "margin-top:" + f + "px !important")
			};
			E.prototype.setStyleToMultipleAgent = function () {
				var a, b, f;
				if (this.messagePreviewContainer && this.container)
					for (a = this.messagePreviewContainer.getElementsByClassName("messageBody"),
						b = this.container.documentRef.getElementById("actionsContainer"), f = this.container.documentRef.getElementById("textareaWrapper"), this.quickReplyContainer.style.marginTop = "0px", b.setAttribute("style", "border-radius:0px 0px 5px 5px !important; background-color: #f8f8f8"), f.setAttribute("style", "border-radius:0px 0px 5px 5px !important"), b = 0; b < a.length; b++) 0 === b ? 1 === this.messagePreviewCount ? a[b].setAttribute("style", "border-bottom-width: 3px !important; border-radius:5px 5px 0px 0px !important") : a[b].setAttribute("style",
						"border-bottom-width:1px !important; border-radius:5px 5px 0px 0px !important") : (b === a.length - 1 ? a[b].setAttribute("style", "border-bottom-width:3px !important; border-radius:0px 0px 0px 0px !important") : a[b].setAttribute("style", "border-bottom-width:1px !important; border-radius:0px 0px 0px 0px !important"), a[b].parentElement.setAttribute("style", "margin-top:0px !important"))
			};
			E.prototype.hide = function () {
				this.isShown = !1;
				this.container.restyle("display", "none !important");
				if (this.messagePreviewContainer) {
					this.messagePreviewContainer.innerHTML =
						"";
					for (var a = 0; a < this.timeIntervalsArr.length; a++) clearInterval(this.timeIntervalsArr[a].timeInterval);
					this.timeIntervalsArr = [];
					this.prevSenderUid = "";
					this.closeEmojiSelection();
					p && p.showBubble()
				}
			};
			E.prototype.removeCallRequest = function () {
				this.incomingCallContainer && (this.incomingCallContainer.elementReferrer.parentElement && (this.incomingCallContainer.elementReferrer.outerHTML = ""), this.incomingCallContainer = null);
				s.mobileBrowserName && this.hide()
			};
			E.prototype.appendCallRequest = function (a) {
				var e, f;
				e =
					t.incomingCallRequest;
				var n = a.callId;
				f = (f = (a = v.agentProfiles[v.profiles[a.caller.urid]]) && a.pi ? r.agentImgUrl + "/" + a.pi : "") ? "url('" + f + "');" : "transparent;";
				b.chatHandler.webrtcWin && !b.chatHandler.webrtcWin.closed ? b.chatHandler.webrtcWin.focus() : (e = e.replace(/__IMAGE_URL__/, f), e = e.replace(/__INCOMING_CALL__/, b.languageParser.translate("chat", "incoming_call_message", {
					name: a.n
				})), e = e.replace(/__ACCEPT_CALL__/, b.languageParser.translate("chat", "accept_call")).replace(/__DECLINE_CALL__/, b.languageParser.translate("chat",
					"decline_call")), a = new D("incoming-call"), a.template = e, a.buildView(), this.messagePreviewContainer.insertBefore(a.elementReferrer, this.messagePreviewContainer.firstElementChild), a.elementReferrer.style.marginBottom = 0 === this.messagePreviewCount ? "0px" : "10px", this.incomingCallContainer = a, e = this.container.getElementById("accept-call"), a = this.container.getElementById("decline-call"), e && b.eventHandler.listen(e, "click", function () {
					clearTimeout(b.viewHandler.incomingCallTimeout);
					l.getWebRTCToken(!1, !1, function () {
						b.viewHandler.removeCallRequest()
					});
					b.viewHandler.userAction = !0;
					b.sessionHandler.notifyWindowState("max")
				}, "mp-acceptVideoCall"), a && b.eventHandler.listen(a, "click", function () {
					clearTimeout(b.viewHandler.incomingCallTimeout);
					l.rejectCall(n, function () {
						b.viewHandler.removeCallRequest()
					});
					b.viewHandler.userAction = !0;
					b.sessionHandler.notifyWindowState("max")
				}, "mp-declineVideoCall"), b.audioPlayer.play("chat_sound"), 0 === this.messagePreviewCount ? (this.container.restyle("height", this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight +
					"px"), this.messagePreviewContainer.style.maxHeight = this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px", this.hideQuickReply()) : (this.messagePreviewContainer.style.maxHeight = this.container.elementReferrer.offsetHeight + "px", this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + this.messagePreviewContainer.offsetHeight + "px")))
			};
			E.prototype.appendCallInfo = function (a) {
				if (!s.mobileBrowserName) {
					var e, f, n = t["messagePreview-callInfo"],
						d = a.callId,
						g = a.caller;
					a = a.isMissed;
					var h = null,
						k = null,
						m = Date.now(),
						p = h = e = null,
						d = "callInfo-" + d,
						p = null,
						q = "",
						wa = null;
					this.container && this.messagePreviewContainer && a && (p = b.languageParser.translate("chat", "missed_visitor_messagePreview"), f = (e = (h = v.agentProfiles[v.profiles[g.urid]]) && h.pi ? r.agentImgUrl + "/" + h.pi : "") ? "url('" + e + "');" : "transparent;", "transparent" !== f && (f += "background-position:0 0;background-size:28px 28px"), e = new D(d, null, {
							className: "message-preview-item"
						}, null, this.documentRef), e.template =
						l.escapeTemplateReplacement(n, [{
							placeholder: "__CALL_INFO__",
							textReplace: p
						}, {
							placeholder: "__CALLER_NAME__",
							textReplace: h.n
						}, {
							placeholder: "__IMAGE_URL__",
							textReplace: f
						}, {
							placeholder: "__ELAPSED_TIME__",
							textReplace: b.languageParser.translate("chat", "justNow")
						}]), e.buildView(), c.isTopPositioned() ? this.messagePreviewContainer.insertBefore(e.elementReferrer, this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0]) : this.messagePreviewContainer.appendChild(e.elementReferrer), h = e.elementReferrer.getElementsByClassName("btn-icon")[0],
						p = e.elementReferrer.getElementsByClassName("mp-callIconContainer")[0], a && (h.style.transform = "rotate(135deg)", h.style.top = "1px", p.style.backgroundColor = "#e52f48"), this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "10px"), this.prevSenderUid === v.profiles[g.urid] && (q += " hidden-profile"), e.elementReferrer.className += q, e.elementReferrer.setAttribute("data-uid", v.profiles[g.urid]), wa = e.elementReferrer.getElementsByClassName("mp-callInfoElapsedTime")[0],
						this.timeIntervalsArr.push({
							messageId: d,
							timeInterval: setInterval(function () {
								k = Math.floor((Date.now() - m) / 1E3);
								wa.innerHTML = 60 > k ? b.languageParser.translate("chat", "justNow") : b.languageParser.translate("chat", "minutes", {
									num: Math.floor(k / 60)
								}) + " ago"
							}, 6E4)
						}), this.prevSenderUid = v.profiles[g.urid], 3 < this.messagePreviewCount && (c.isTopPositioned() ? this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[3]) : this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0])),
						this.container.restyle("height", this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px"), e.elementReferrer.className += " animate-fade-object")
				}
			};
			E.prototype.scrollToBottom = function () {
				this.messagePreviewContainer && (this.messagePreviewContainer.scrollTop = 1E8)
			};
			E.prototype.parseSurvey = function (a, b) {
				var f, n, c, d, g, h, k = a.match(l.regSurvey),
					m = "";
				if (!k) return {
					message: a,
					isSurvey: !1
				};
				d = a.match(l.regSurveyQuestion);
				g = "survey-" + (new Date).getTime();
				f = 0;
				for (n = k.length; f < n; f++) c = k[f].replace(l.regOption,
					""), c = c.replace(l.regBr, ""), c = l.trim(c), h = g + f, m += l.escapeTemplateReplacement(t["survey-option"], [{
					placeholder: /__RADIO_ID__/gm,
					textReplace: h
				}, {
					placeholder: "__RADIO_NAME__",
					textReplace: b
				}, {
					placeholder: /__RADIO_VALUE__/gm,
					textReplace: c
				}]);
				return {
					message: l.escapeTemplateReplacement(t["tawk-survey-wrapper"], [{
						placeholder: "__QUESTION__",
						textReplace: d[0].replace(l.regOption, "")
					}, {
						placeholder: "__OPTIONS__",
						textReplace: m
					}]),
					isSurvey: !0
				}
			};
			E.prototype.appendMessage = function (a) {
				var e = this,
					f = null,
					n = t["message-preview-item"],
					d = null,
					g = null,
					h = g = null,
					k = h = h = null,
					m = "",
					p = null,
					p = !1,
					q = Date.now(),
					s = "msgPreview-messageId-" + (new Date).getTime().toString() + Object.keys(b.chatHandler.messages).length,
					w = (new Date(a.time)).getTime();
				a && this.container && (g = a.message, h = a.profileImg ? a.profileImg ? "https://tawk.link/" + a.profileImg : "" : (h = v.agentProfiles[a.ownerId]) && h.pi ? r.agentImgUrl + "/" + h.pi : "", h = h ? "url('" + h + "');" : "transparent;", this.messagePreviewContainer && ("undefined" !== typeof G && (g = G.unifyUnicode(g), 0 === g.replace(G.regUnicode, "").trim().length &&
						(m += " emojionly"), g = G.toImage(g)), g = "s" === a.senderType ? this.limitMessageLength(g, 500) : this.limitMessageLength(g, 150), a.data && a.data.file && (g = b.viewHandler.parseUploadedFile(a.data.file)), p = this.parseSurvey(g, s), g = p.message, p = p.isSurvey, f = new D(s, null, {
						className: "message-preview-item"
					}, null, this.documentRef), f.template = l.escapeTemplateReplacement(n, [{
						placeholder: "__MESSAGE__",
						textReplace: g
					}, {
						placeholder: "__NAME__",
						textReplace: a.name
					}, {
						placeholder: "__IMAGE_URL__",
						textReplace: h
					}, {
						placeholder: "__TIME__",
						textReplace: b.languageParser.translate("chat", "justNow")
					}]), f.buildView(), c.isTopPositioned() ? this.messagePreviewContainer.insertBefore(f.elementReferrer, this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0]) : this.messagePreviewContainer.appendChild(f.elementReferrer), a.data && a.data.file && (f.elementReferrer.getElementsByClassName("messageBody")[0].className += " imageMessageBody"), this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom =
						"10px"), a.ownerId && this.prevSenderUid === a.ownerId && (m += " hidden-profile"), f.elementReferrer.className += m, f.elementReferrer.setAttribute("data-uid", a.ownerId), d = f.elementReferrer.getElementsByClassName("messageTime")[0], this.timeIntervalsArr.push({
						messageId: s,
						timeInterval: setInterval(function () {
							k = Math.floor((Date.now() - q) / 1E3);
							d.innerHTML = 60 > k ? b.languageParser.translate("chat", "justNow") : b.languageParser.translate("chat", "minutes", {
								num: Math.floor(k / 60)
							}) + " ago"
						}, 1E3),
						timestamp: w
					}), this.prevSenderUid =
					a.ownerId, g = f.elementReferrer.firstElementChild, b.eventHandler.listen(g, b.viewHandler.clickEvent, function () {
						e.removeElement(f.elementReferrer)
					}, "close-" + f.elementReferrer.id), 3 < this.messagePreviewCount && (c.isTopPositioned() ? this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[3]) : this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0])), e.scrollToBottom(), p && this.addSurveyHandlers(s), this.container.restyle("height",
						this.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px"), f.elementReferrer.className += " animate-fade-object"))
			};
			E.prototype.addSurveyHandlers = function (a) {
				var e, f = this;
				this.container && (e = this.container.getElementById(a), e = l.getElementsByTagName(e, "input"), e.forEach(function (e, c) {
					e.id && f.container.attachUserEventListener("click", function () {
							f.lastRadioButton !== e.id && (f.lastRadioButton = e.id, b.chatHandler.sendMessage(e.value), b.sessionHandler.notifyWindowState("max"), b.viewHandler.scrollToBottom())
						},
						e.id, "survey" + a + c + "click")
				}))
			};
			E.prototype.limitMessageLength = function (a, b) {
				var f = 0;
				if (a.length > b)
					for (f = 0; f < b;)
						if ('<img class="emojione"' === a.substring(f, f + 21) || '<a target="_blank"' === a.substring(f, f + 18))
							for (var n = f; n < a.length; n++) {
								if (f++, b++, ">" === a.substring(n, n + 1)) {
									b -= 1;
									break
								}
							} else f++;
				return a.substring(0, b) + (a.length > b ? "[...]" : "")
			};
			E.prototype.removeAllElements = function () {
				for (var a = null, b = 0, f = c.minimizedDimensions().width, n = 0; n < this.timeIntervalsArr.length; n++) clearInterval(this.timeIntervalsArr[n].timeInterval),
					this.timeIntervalsArr.splice(n, 1);
				if (this.messagePreviewContainer) {
					a = this.messagePreviewContainer.getElementsByClassName("message-preview-item");
					b = a.length;
					for (n = 0; n < b; n++) a[0].parentElement && (a[0].outerHTML = "");
					this.messagePreviewCount = 0;
					this.removeCallRequest();
					this.prevSenderUid = "";
					c.isCenterPositioned() && this.container.restyle("top", "calc(50% - " + 0.5 * f + "px) !important");
					this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "0px");
					this.hide()
				}
			};
			E.prototype.removeElement = function (a) {
				for (var b = null, f = null, n = 0; n < this.timeIntervalsArr.length; n++)
					if (this.timeIntervalsArr[n].messageId === a.id) {
						clearInterval(this.timeIntervalsArr[n].timeInterval);
						this.timeIntervalsArr.splice(n, 1);
						break
					}
				f = this.messagePreviewContainer.getElementsByClassName("message-preview-item");
				if (-1 === a.className.indexOf("hidden-profile"))
					if (c.isTopPositioned())
						for (n = f.length - 2; n < f.length; n--) {
							if (b = f[n], b.getAttribute("data-uid") === a.getAttribute("data-uid")) {
								b.className = b.className.replace(/hidden-profile/gi,
									"");
								break
							}
						} else
							for (n = 1; n < f.length; n++)
								if (b = f[n], b.getAttribute("data-uid") === a.getAttribute("data-uid")) {
									b.className = b.className.replace(/hidden-profile/gi, "");
									break
								}
				a.parentElement && (a.outerHTML = "");
				this.messagePreviewCount--;
				0 === this.messagePreviewCount && this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "0px")
			};
			E.prototype.initQuickReply = function () {
				if (!s.mobileBrowserName) {
					var a, e;
					e = this.container.documentRef.getElementById("tooLongMsgNotification");
					this.container.documentRef.getElementById("textareaContainer").insertBefore(this.chatTextarea.buildView(this.container.documentRef), e);
					a = this.container.getElementById("tawkchat-message-preview-quick-reply-container");
					e = this.container.getElementById("file-upload-drop-label");
					r.pageStatus() && a && (a = l.rawDecode(c.onlineGreeting.actionMessage), s.isPlaceholderSupported ? this.chatTextarea.elementReferrer.placeholder = a : (this.chatTextarea.elementReferrer.value = a, l.togglePlaceholderText(this.chatTextarea.elementReferrer,
						a, "chatTextarea")), e.innerHTML = b.languageParser.translate("rollover", "uploadFile"), this.container.getElementById("viewEmoji").setAttribute("title", b.languageParser.translate("chat", "insert_emoji")), this.container.getElementById("uploadFileOption").setAttribute("title", b.languageParser.translate("rollover", "uploadFile")), this.container.getElementById("ratePositive").setAttribute("title", b.languageParser.translate("rollover", "positiveRating")), this.container.getElementById("rateNegative").setAttribute("title",
						b.languageParser.translate("rollover", "negativeRating")), this.attachEventListenerQuickReply(), this.isQuickReplyInitialized = !0)
				}
			};
			E.prototype.showQuickReply = function () {
				s.mobileBrowserName || (this.quickReplyContainer.style.display = "block", this.toggleActionsContentOnTyping(!0))
			};
			E.prototype.hideQuickReply = function () {
				this.quickReplyContainer && (this.quickReplyContainer.style.display = "none")
			};
			E.prototype.attachEventListenerQuickReply = function () {
				var a = this;
				this.container.documentRef.getElementById("notifMessageText").innerHTML =
					b.languageParser.translate("chat", "message_too_long");
				this.hideActionsContainerNotif();
				this.chatTextarea.attachUserEventListener("keydown", function (e) {
					a.resizeTextArea();
					if (13 === e.keyCode && !e.shiftKey) {
						if (5E3 < this.value.length) {
							e.preventDefault();
							return
						}
						b.viewHandler.userAction = !1;
						b.sessionHandler.notifyWindowState("max");
						b.viewHandler.scrollToBottom()
					}
					this.value ? a.toggleActionsContentOnTyping(!1) : a.toggleActionsContentOnTyping(!0);
					b.chatHandler.sendTextPreview(e)
				}, null, "mp-chatinputkeyupresize");
				this.chatTextarea.attachUserEventListener("keyup", function () {
					5E3 >= this.value.length ? a.hideActionsContainerNotif() : a.showActionsContainerNotif();
					this.value ? a.toggleActionsContentOnTyping(!1) : a.toggleActionsContentOnTyping(!0);
					a.resizeTextArea()
				}, null, "mp-chatinputkeyup")
			};
			E.prototype.toggleActionsContentOnTyping = function (a) {
				var b = this.container.getElementById("hidableActionsWrapper"),
					f = this.container.getElementById("textareaContainer");
				a ? (b.style.display = "block", l.addClass(f, "additionalPadding")) :
					(b.style.display = "none", l.removeClass(f, "additionalPadding"))
			};
			E.prototype.toggleEmojiAction = function () {
				var a = this,
					b = this.container.getElementById("viewEmoji"),
					f = this.container.documentRef.getElementById("emoji-selection-container"),
					n = this.container.getElementById("textareaContainer");
				c.showEmoji() ? (b.style.display = "block", l.addClass(n, "with-emoji"), f.innerHTML = t.loader, this.container.attachUserEventListener("click", function (b) {
					b.stopPropagation();
					"active" === a.container.getElementById("viewEmoji").className ?
						a.closeEmojiSelection() : (a.container.getElementById("viewEmoji").className = "active", Oa(f), a.container.restyle("height", a.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px"))
				}, "viewEmoji", "mp-viewEmojiClick")) : (b.style.display = "none", l.removeClass(n, "with-emoji"))
			};
			E.prototype.closeEmojiSelection = function () {
				if (!s.mobileBrowserName) {
					var a = this.container.documentRef.getElementById("actionsContainer"),
						b = this.container.documentRef.getElementById("emoji-selection-container");
					this.container.getElementById("viewEmoji").className = "";
					a.style.height = "50px";
					l.removeClass(b, "showWithFade");
					this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px")
				}
			};
			E.prototype.resizeTextArea = function () {
				var a = this;
				clearTimeout(this.resizeThrottle);
				s.mobileBrowserName || (this.resizeThrottle = setTimeout(function () {
					var b = a.chatTextarea.elementReferrer.value,
						f = a.container.documentRef.getElementById("actionsContainer"),
						n = a.container.documentRef.getElementById("textareaContainer"),
						c = b.split(/\r\n|\r|\n/).length || 1,
						d = 20 * c;
					1 === c && a.chatTextarea.elementReferrer.scrollHeight >= a.chatTextarea.elementReferrer.clientHeight && (d = a.chatTextarea.elementReferrer.scrollHeight);
					b && 20 <= d ? (d = 150 < d ? 150 : d, a.isActionsContainerNotifShown ? (d += 52, n.style.paddingBottom = "67px") : n.style.paddingBottom = "15px", f.style.height = 50 + (d - 20) + "px", a.container.getElementById("tawkchat-message-preview-container").offsetHeight > a.container.elementReferrer.offsetHeight && a.container.restyle("height", a.container.getElementById("tawkchat-message-preview-container").offsetHeight +
						"px")) : (f.style.height = "50px", n.style.paddingBottom = "15px")
				}, 100))
			};
			E.prototype.addEmojiToInput = function (a) {
				s.isPlaceholderSupported || this.chatTextarea.elementReferrer.value !== l.rawDecode(c.onlineGreeting.actionMessage) || (this.chatTextarea.elementReferrer.value = "");
				this.chatTextarea.elementReferrer.value += a;
				this.chatTextarea.elementReferrer.focus();
				this.closeEmojiSelection()
			};
			E.prototype.showActionsContainerNotif = function () {
				s.mobileBrowserName || (this.container.documentRef.getElementById("tooLongMsgNotification").style.display =
					"block", this.isActionsContainerNotifShown = !0)
			};
			E.prototype.hideActionsContainerNotif = function () {
				s.mobileBrowserName || (this.container.documentRef.getElementById("tooLongMsgNotification").style.display = "none", this.isActionsContainerNotifShown = !1)
			};
			var y = TawkClass.extend({
				init: function () {
					this.chatContainer = null;
					this.removeAgentNotification = !1;
					this.lastRadioButton = null;
					this.clickEvent = "click";
					this.isPopupFocused = !1;
					this.indicator = null;
					this.newMessageNotSeen = !1;
					this.unseenMessages = [];
					this.lastMessageTime =
						null;
					this.totalUnseenMessages = 0;
					this.retryUploadList = this.removeDividerTimeout = null;
					this.tawktoLinkName = l.getRandomName();
					this.bottomContainerName = l.getRandomName();
					this.currentScrollY = this.incomingCallTimeout = null;
					this.callData = {};
					this.mainAgent = null
				},
				show: function () {
					var a = this,
						e = "visibilitychange";
					"webkitvisibilitychange" in document ? e = "webkitvisibilitychange" : "mozvisibilitychange" in document ? e = "mozvisibilitychange" : "msvisibilitychange\ufeff" in document && (e = "msvisibilitychange\ufeff");
					b.eventHandler.listen(d,
						"focus",
						function () {
							b.viewHandler.messagePreview && b.viewHandler.indicator.pageTitleNotification.off();
							a.checkSeenMessageViewport()
						}, "windowOnFocus");
					b.eventHandler.listen(document, e, function () {
						document.hidden || (b.viewHandler.messagePreview && b.viewHandler.indicator.pageTitleNotification.off(), a.checkSeenMessageViewport())
					}, "documentVisibilityChange");
					b.eventHandler.listen(d, "popstate", function () {
						b && b.visitorHandler && b.visitorHandler.sendNavigationEvent()
					}, "windowOnPopstate");
					b.eventHandler.listen(d,
						"hashchange",
						function () {
							d.location && d.location.hash && "#" === d.location.hash || b && b.visitorHandler && b.visitorHandler.sendNavigationEvent()
						}, "windowOnHashchange")
				},
				appendAgent: function (a) {
					var e, f, n, d, g, h = "";
					d = this.chatContainer;
					e = d.getElementById("agentProfileContainer");
					var k = d.getElementById("agentList");
					f = d.getElementById("chatWrapper");
					n = d.getElementById("headerAccountStateContainer");
					g = d.getElementById("shortMessage");
					d && (e && k) && (-1 < this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") &&
						(g.style.display = "none", e.className = "show"), b.agents.agentsCount++, 1 < b.agents.agentsCount || 1 === b.agents.agentsCount && this.mainAgent && this.mainAgent.pid !== a.pid ? f.classList.remove("one-agent") : f.classList.add("one-agent"), 1 === b.agents.agentsCount ? (this.mainAgent = a, b.viewHandler.renderAgentHeader(a.pid), this.renderAgentMinimizedWidget(a.pid)) : (b.viewHandler.renderAgentHeader(a.pid), n.classList.add("multiple-agent")), b.viewHandler.openAgentList(), e = t["agent-profile"], f = t["agent-profile-image"], n = t["agent-profile-description"],
						d = new D("agentProfile-" + a.pid, null, {
							className: "agentWrapper clearfix"
						}, null, d.documentRef), (g = a.pi ? r.agentImgUrl + "/" + a.pi : "") && (h = "background-image : url('" + g + "'); background-position : 0px 0px;"), h += "box-shadow: 0px 0px 0px 1px " + c.headerTxtColor + ";", n = l.escapeTemplateReplacement(n, [{
							placeholder: "__POSITION_CLASS__",
							textReplace: "agentName"
						}, {
							placeholder: "__POSITION__",
							textReplace: a.pst
						}, {
							placeholder: "__NAME__",
							textReplace: a.n
						}]), f = f.replace("__PROFILE_ID__", a.pid).replace("__IMAGE_URL__", h), d.template =
						l.escapeTemplateReplacement(e, [{
							placeholder: "__AGENT_PROFILE_DETAIL__",
							textReplace: n
						}, {
							placeholder: "__AGENT_PROFILE_IMAGE__",
							textReplace: f
						}, {
							placeholder: "__ID__",
							textReplace: ""
						}]), k.appendChild(d.buildView()), k.style.left = "50%")
				},
				removeAgent: function (a) {
					var e, f, n, c, d = g.container.elementReferrer ? g.container : null,
						h = d.getElementById("chatWrapper");
					d && (b.agents.agentsCount--, e = d.getElementById("agentProfileContainer"), f = d.getElementById("agentProfile-" + a), n = d.getElementById("profileImage-" + a), c = d.getElementById("profileDetail" +
						a), 0 === b.agents.agentsCount ? (b.viewHandler.clearAgentHeader(), this.clearAgentFooter()) : 1 === b.agents.agentsCount && (b.eventHandler.removeEventHandler(e, "click", this.expandAgentList), d.getElementById("headerAccountStateContainer").classList.remove("multiple-agent")), 0 < b.agents.agentsCount && this.mainAgent.pid === a && (this.mainAgent = v.agentProfiles[Object.keys(v.agentProfiles)[0]], this.renderAgentMinimizedWidget(this.mainAgent.pid)), f && f.parentNode.removeChild(f), n && (n.parentNode && n.parentNode.removeChild(n),
						e.style.width = 1 >= b.agents.agentsCount ? "" : 30 * b.agents.agentsCount - 10 * (b.agents.agentsCount - 1) + "px"), c && c.parentNode && c.parentNode.removeChild(c), 1 === b.agents.agentsCount && (this.renderAgentMinimizedWidget(this.mainAgent.pid), h.className = "single-agent", b.viewHandler.calculateOwnerNameAndMessageTimeSizeAll(), b.viewHandler.messagePreview && b.viewHandler.messagePreview.setStyleToSingleAgent()));
					0 === b.agents.agentsCount && (b.viewHandler.clearAgentHeader(), this.clearAgentFooter(), b.viewHandler.closeAgentList())
				},
				clearAgentFooter: function () {
					var a, b, f, n;
					a = p && p.container && p.container.elementReferrer ? p.container : null;
					s.mobileBrowserName && (this.minifiedWidget && this.minifiedWidget.container) && (a = this.minifiedWidget.container);
					a && this.chatContainer && (f = a.getElementById("tawkchat-status-text-container"), n = a.getElementById("min-agent-profile-details"), b = a.getElementById("agent-profile-image"), (a = a.getElementById("tawkchat-status-agent-container")) || a) && (f && (f.style.display = "block"), n && (n.innerHTML = ""), b.innerHTML =
						"", a.style = "", a.className = "")
				},
				renderAgentMinimizedWidget: function (a) {
					var e, f, n, d;
					f = p && p.container && p.container.elementReferrer ? p.container : null;
					s.mobileBrowserName && (this.minifiedWidget && this.minifiedWidget.container) && (f = this.minifiedWidget.container);
					f && (this.chatContainer && a) && (e = v.agentProfiles[a], a = f.getElementById("tawkchat-status-agent-container"), iconContainer = f.getElementById("tawkchat-status-icon-container"), d = f.getElementById("agent-profile-image"), tawkStatusMessage = f.getElementById("tawkchat-status-text-container"),
						profileDetails = f.getElementById("min-agent-profile-details"), n = f.getElementById("tawkchat-chat-indicator"), a && (this.clearAgentFooter(), f = e.pi ? r.agentImgUrl + "/" + e.pi : "", d.style.backgroundImage = f ? "url('" + f + "')" : "", d.style.boxShadow = "0px 0px 0px 1px " + c.headerTxtColor, a.className += "appear", profileDetails && (profileDetails.innerHTML = '<p class="name">' + e.n + '</p><p class="position">' + e.pst + "</p>"), tawkStatusMessage && c.isDesktopRectangle() && (tawkStatusMessage.style.display = "none"), n && "block" === n.style.display &&
							b.viewHandler.handleIndicatorToggle(!0)))
				},
				clearAgentHeader: function () {},
				handleAcknowledgment: function (a) {
					var e, f, n, c, d, g, h, k, m = this.chatContainer;
					if (m && a.messageId && (c = m.getElementById(a.messageId))) {
						n = c.parentNode;
						f = 0;
						for (var p = c.childNodes.length; f < p; f++) {
							var q = c.childNodes[f]; - 1 !== q.className.indexOf("messageBody") && (e = l.getElementsByClassName(q, "messageWrapper"), k = l.getElementsByClassName(q, "messageStatusContainer"))
						}
						e && (e.length && k && k.length) && (k = k[0], e = e[0], a.error ? k && (n = t["chat-resend-link"].replace("__MESSAGE_ID__",
							a.messageId).replace("__NOT_DELIVERED__", b.languageParser.translate("chat", "resend")).replace("__FAILED__", b.languageParser.translate("chat", "failed")), e.className = "messageWrapper error", k.className = "messageStatusContainer errorInMessage", k.innerHTML = n, d = l.rawDecode(e.childNodes[0].textContent || e.childNodes[0].innerText), this.scrollToBottom(), h = b.eventHandler.listen(k, b.viewHandler.clickEvent, function (f) {
							b.eventHandler.cancelEvent(f);
							b.chatHandler.sendMessageToServer(d, a.messageId);
							if (g = m.getElementById("errorFor" +
									a.messageId)) e.className = "messageWrapper pending";
							k.className = "messageStatusContainer pending";
							k.childNodes[0].className = "";
							k.childNodes[0].innerHTML = t.loader;
							b.eventHandler.removeEventHandler(e, "click", h)
						}, "resend" + a.messageId + "click")) : (f = b.chatHandler.messages[a.order], b.viewHandler.addWaitTime(), n.removeChild(c), b.chatHandler.prepareMessage(f, !0, !1, !0)))
					}
				},
				handleEndChat: function () {},
				clearAgents: function () {},
				handleRestartChat: function () {},
				appendMessage: function (a) {
					var e, f, n, d, g;
					e = !1;
					var h = null;
					f = a.message;
					var k = a.time,
						m = a.senderType,
						p = this.chatContainer.documentRef,
						w = this.ifScrollbarDown(),
						wa = p.getElementById("chatWrapper"),
						u = "messageId-" + (new Date).getTime().toString() + Object.keys(b.chatHandler.messages).length,
						h = "messageContainer clearfix",
						x = {
							"chat-message-row": t["chat-message-row"],
							"chat-resend-link": t["chat-resend-link"],
							"chat-message-owner-agent": t["chat-message-owner-agent"],
							"chat-message-owner-visitor": t["chat-message-owner-visitor"],
							"chat-message-container": t["chat-message-container"],
							"chat-notification-container": t["chat-notification-container"],
							"chat-message-status-row": t["chat-message-status-row"],
							"chat-divider": t["chat-divider"]
						},
						k = l.parseChatTime(k);
					b.chatHandler.noRedraw || (b.viewHandler.isMaximized || c.isEmbedded || c.isPopup || s.mobileBrowserName || "v" === m || "c" !== a.type) || (c.hideWidgetOnLoad && "max" === c.onClickAction ? (b.viewHandler.userAction = !1, b.sessionHandler.notifyWindowState("max")) : b.viewHandler.messagePreview && b.viewHandler.messagePreview.show ? b.viewHandler.messagePreview.show(b.viewHandler.indicator.unansweredMessages +
						1, a) : b.viewHandler.messagePreview || (this.hasBeenMaximizedOnce || "max" !== c.onClickAction || b.chatHandler.agentHasMessaged) || (b.viewHandler.userAction = !1, b.sessionHandler.notifyWindowState("max"), this.hasBeenMaximizedOnce = !0));
					g = a.profileImg ? a.profileImg ? "https://tawk.link/" + a.profileImg : "" : (g = v.agentProfiles[a.ownerId]) && g.pi ? r.agentImgUrl + "/" + g.pi : "";
					g = g ? "url('" + g + "');" : "transparent;";
					if ("a" === a.senderType || "s" === a.senderType) x["chat-message-owner-agent"] = x["chat-message-owner-agent"].replace("__IMAGE_URL__",
						g);
					x["chat-message-status-row"] = a.isPending ? t["chat-message-pending-row"] : x["chat-message-status-row"].replace("__TIME__", k).replace("__TIME_CLASS__", "v" === a.senderType ? "visitor" : "agent").replace("__NAME__", "v" === a.senderType ? "" : a.name);
					"undefined" !== typeof G && (f = G.unifyUnicode(f), 0 === f.replace(G.regUnicode, "").trim().length && (h += " emojionly"), f = G.toImage(f));
					1 >= v.chatOrder && (b.viewHandler.chatContainer.getElementById("changeName").style.display = "block", b.viewHandler.chatContainer.getElementById("emailTranscriptOption").style.display =
						"block");
					"a" === m ? (e = this.parseSurvey(f, u), f = e.message, e = e.isSurvey, b.chatHandler.handleAgentStoppedTyping(a.data.rsc)) : b.chatHandler.visitorHasMessaged || "s" === m || (b.chatHandler.visitorHasMessaged = !0);
					a.data && a.data.file && (f = this.parseUploadedFile(a.data.file));
					"c" === a.type && (n = l.escapeTemplateReplacement(x["chat-message-row"], [{
						placeholder: "__MESSAGE_STATUS_ROW__",
						textReplace: x["chat-message-status-row"]
					}, {
						placeholder: /__MESSAGE_ID__/gm,
						textReplace: u
					}, {
						placeholder: "__MESSAGE__",
						textReplace: f
					}, {
						placeholder: "__PENDING__",
						textReplace: a.isPending ? "pending" : ""
					}]), h = "v" === m ? h + " visitorChatContainer " : h + " agentChatContainer ");
					h = new D(u, null, {
						className: h
					}, null, p);
					this.lastMessageTime = a.isPending ? this.lastMessageTime : k;
					"c" === a.type ? (b.chatHandler.lastMessageOwner = "s" === m ? "server" : a.isPending ? b.chatHandler.lastMessageOwner : a.ownerId, "a" === m || "s" === m ? ("a" === m && (b.chatHandler.agentHasMessaged = !0, this.removeWaitTime()), f = l.escapeTemplateReplacement(x["chat-message-owner-agent"], [{
								placeholder: "__NAME__",
								textReplace: a.name
							}])) :
							f = l.isGeneratedName(z.name()) && x["chat-message-owner-visitor"] ? l.escapeTemplateReplacement(x["chat-message-owner-visitor"], [{
								placeholder: "__NAME__",
								textReplace: a.name
							}]) : "", d = l.escapeTemplateReplacement(x["chat-message-container"], [{
								placeholder: "__OWNER_TPL__",
								textReplace: f
							}, {
								placeholder: "__CONTENT__",
								textReplace: n
							}]), a.data && "v" === m && (d = d.replace("messageBody", "messageBody file")), "s" === m && (d = d.replace("ownerNameContainer", "ownerNameContainer trigger"), d = d.replace("messageBody", "messageBody trigger"))) :
						"n" === a.type && (b.chatHandler.lastMessageOwner = "notif", a.isRtcError ? (n = "video" === a.rtcType ? b.languageParser.translate("chat", "video_call_error") : "screen" === a.rtcType ? b.languageParser.translate("chat", "screen_share_error") : b.languageParser.translate("chat", "voice_call_error"), d = l.escapeTemplateReplacement(t.noWebrtc, [{
							placeholder: "__MESSAGE__",
							textReplace: f
						}, {
							placeholder: "__HEADER__",
							textReplace: n
						}])) : d = l.escapeTemplateReplacement(x["chat-notification-container"], [{
								placeholder: "__MESSAGE_ID__",
								textReplace: u
							},
							{
								placeholder: "__MESSAGE__",
								textReplace: f
							}, {
								placeholder: "__TIME__",
								textReplace: k
							}
						]));
					h.template = d;
					h.buildView();
					try {
						wa.insertBefore(h.elementReferrer, p.getElementById("agentTypingContainer"))
					} catch (y) {
						q.handleError("Chat wrapper is null to append message : " + JSON.stringify(a), y.fileName, y.lineNumber, y.stack)
					}
					a.dontPlaySound || ("v" === m || a.isPending) || this.popoutWin && !this.popoutWin.closed || b.audioPlayer.play("chat_sound");
					if (a.timeStamp > r.lastMessageTimestamp)
						if ("v" === m) r.lastMessageTimestamp = a.timeStamp;
						else if (!document.hidden && l.chatElementInView(h.elementReferrer) && b.viewHandler.isMaximized) this.updateLastTimestamp(a.timeStamp);
					else if (this.unseenMessages.push(u), this.updateTotalUnseenMessages(), 0 < this.totalUnseenMessages && (this.setDivider(h.elementReferrer, x["chat-divider"], h), a = this.chatContainer.documentRef.getElementById("newMessagesBar"))) this.chatContainer.getElementById("notificationMessageText").innerHTML = b.languageParser.translate("chat", "newMessage", {
						num: this.totalUnseenMessages
					});
					!w ||
						b.formHandler.currentForm && !b.viewHandler.isMaximized || this.scrollToBottom();
					e && this.addSurveyHandlers(u);
					return u
				},
				parseSurvey: function (a, b) {
					var f, n, c, d, g, h, k = a.match(l.regSurvey),
						m = "";
					if (!k) return {
						message: a,
						isSurvey: !1
					};
					d = a.match(l.regSurveyQuestion);
					g = "survey-" + (new Date).getTime();
					f = 0;
					for (n = k.length; f < n; f++) c = k[f].replace(l.regOption, ""), c = c.replace(l.regBr, ""), c = l.trim(c), h = g + f, m += l.escapeTemplateReplacement(t["survey-option"], [{
						placeholder: /__RADIO_ID__/gm,
						textReplace: h
					}, {
						placeholder: "__RADIO_NAME__",
						textReplace: b
					}, {
						placeholder: /__RADIO_VALUE__/gm,
						textReplace: c
					}]);
					return {
						message: l.escapeTemplateReplacement(t["tawk-survey-wrapper"], [{
							placeholder: "__QUESTION__",
							textReplace: d[0].replace(l.regOption, "")
						}, {
							placeholder: "__OPTIONS__",
							textReplace: m
						}]),
						isSurvey: !0
					}
				},
				updateViewByStatus: function (a) {
					"emailTranscriptFormOnChatEnded" !== b.formHandler.currentForm && "restartChatForm" !== b.formHandler.currentForm && b.formHandler.closeForm();
					if (c.isPopup) {
						var e = m.getShortMessage(a);
						document.title = e ? L.pageName() + " - " +
							l.rawDecode(e) : L.pageName()
					}
					"online" === a || "away" === a ? (c.showConsentForm ? b.formHandler.openForm("consentForm") : c.showPreChatForm && !r.prechatFormSubmitted() && b.formHandler.openForm("preChatForm"), this.showWidget(), p && (b.viewHandler.isMaximized || p.showBubble())) : "offline" === a && (c.hideWidgetOnOffline ? this.hideWidget() : (b.formHandler.openForm(c.showConsentForm ? "consentForm" : "offlineForm"), this.showWidget()), p && (p.hideBubble(), this.messagePreview && this.messagePreview.removeAllElements()))
				}
			});
			y.prototype.openAgentList =
				function () {
					var a = this.chatContainer.getElementById("agentBar");
					"preChatForm" !== b.formHandler.currentForm && (this.scrollToBottom(), this.chatContainer.getElementById("greetingsContent") && (this.chatContainer.getElementById("greetingsContent").style.display = "none"), a.style.display = "block")
				};
			y.prototype.addProfileDetail = function (a) {
				var e, f, c, d = this.chatContainer.getElementById("agentProfileContainer");
				a.pi || 1 < b.agents.agentsCount ? (e = new D("profileDetail", null, null, null, this.chatContainer.documentRef), c =
					t["agent-profile-description"], e.template = l.escapeTemplateReplacement(c, [{
						placeholder: "__POSITION_CLASS__",
						textReplace: a.pst ? "agentName" : "agentNameCentered"
					}, {
						placeholder: "__POSITION__",
						textReplace: a.pst
					}, {
						placeholder: "__NAME__",
						textReplace: a.n
					}])) : (e = new D("profileDetailNoImage", null, {
					className: "noImageAgentProfileDetail"
				}, null, this.chatContainer.documentRef), f = a.pst ? "&nbsp-&nbsp" + a.pst : "", c = t["agent-profile-description-noimage"], e.template = l.escapeTemplateReplacement(c, [{
					placeholder: "__POSITION__",
					textReplace: f
				}, {
					placeholder: "__NAME__",
					textReplace: a.n
				}]));
				d.appendChild(e.buildView())
			};
			y.prototype.renderAgentWithPosition = function (a) {
				var b, f, c;
				b = this.chatContainer;
				var d = b.getElementById("agentProfileContainer");
				b && (d && a) && (a = v.agentProfiles[a], b = new D("profileDetail" + a.pid, null, {
					className: "agent-profile-detailed theme-background-color"
				}, null, b.documentRef), f = a.pst ? a.pst : "", c = t["agent-profile-detailed"], b.template = l.escapeTemplateReplacement(c, [{
					placeholder: "__POSITION__",
					textReplace: f
				}, {
					placeholder: "__NAME__",
					textReplace: a.n
				}]), d.appendChild(b.buildView()))
			};
			y.prototype.renderAgentHeader = function (a) {
				var e, f, n = "",
					d = this.chatContainer,
					g = d.getElementById("agentProfileContainer");
				d && (g && a) && (e = v.agentProfiles[a], (f = e.pi ? r.agentImgUrl + "/" + e.pi : "") && (n = "background-image : url('" + f + "'); background-position : 0px 0px;z-index: " + (7 - b.agents.agentsCount) + ";"), n += "box-shadow: 0px 0px 0px 1px " + c.headerTxtColor + ";", e = new D("profileImage-" + e.pid, n, {
						className: "alias-image theme-background-color"
					}, null, d.documentRef),
					g.appendChild(e.buildView()), this.renderAgentWithPosition(a), 1 < b.agents.agentsCount && (g.style.width = 30 * b.agents.agentsCount - 10 * (b.agents.agentsCount - 1) + "px"), -1 < this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && (1 === b.agents.agentsCount && this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), this.chatContainer.getElementById("shortMessage").style.display = "none"))
			};
			y.prototype.clearAgentHeader = function () {
				var a = this.chatContainer;
				a.getElementById("agentProfileContainer").innerHTML = "";
				a.getElementById("innerWrapper").className = "border-corner";
				a.getElementById("shortMessage").style.display = "block"
			};
			y.prototype.closeAgentList = function () {
				var a = this.chatContainer.getElementById("greetingsContent");
				this.chatContainer.getElementById("agentBar").style.display = "none";
				a && (l.hasClass(a, "no-content") ? this.chatContainer.getElementById("greetingsContent").style.display = "none" : this.chatContainer.getElementById("greetingsContent").style.display =
					"block")
			};
			y.prototype.calculateOwnerNameAndMessageTimeSizeAll = function () {
				var a = this.chatContainer.getElementById("chatWrapper"),
					e = null,
					f = null,
					c = null,
					d = null;
				[].forEach.call(a.getElementsByClassName("agentChatContainer"), function (a) {
					e = a.getElementsByClassName("messageOwnerName")[0];
					f = a.getElementsByClassName("messageTime")[0];
					d = a.getElementsByClassName("message")[0];
					c = a.getElementsByClassName("messageTimeContainer")[0];
					e && (f && d && c) && (1 < b.agents.agentsCount && d.offsetWidth < f.offsetWidth + e.offsetWidth ?
						(c.style.left = 45 + e.offsetWidth + "px", c.style.right = "auto") : (c.style.right = "0", c.style.left = "auto"))
				})
			};
			y.prototype.resetView = function () {};
			y.prototype.styleAgentBar = function () {};
			y.prototype.expandAgentList = function () {};
			y.prototype.hideWidget = function () {};
			y.prototype.showWidget = function () {};
			y.prototype.toggleWidget = function () {
				s.mobileBrowserName && b.viewHandler.maximize()
			};
			y.prototype.popoutWidget = function () {
				s.mobileBrowserName && b.viewHandler.popup()
			};
			y.prototype.handleIndicatorToggle = function () {};
			y.prototype.begin =
				function () {};
			y.prototype.getViewportDimensions = function (a) {
				var b, f = {};
				a ? (a = d, b = document) : (a = g.container.elementReferrer, b = g.container.documentRef);
				if ("undefined" !== typeof a.innerWidth) return f.height = a.innerHeight, f.width = a.innerWidth, f;
				if ("undefined" !== typeof b.documentElement && "undefined" !== typeof b.documentElement.clientWidth && 0 !== b.documentElement.clientWidth) return f.height = b.documentElement.clientHeight, f.width = b.documentElement.clientWidth, f;
				f.height = b.getElementsByTagName("body")[0].clientHeight;
				f.width = b.getElementsByTagName("body")[0].clientWidth;
				return f
			};
			y.prototype.getActualViewportDimensions = function () {
				var a = this.getViewportDimensions(!0);
				return {
					width: this.isVerticalScrollbar() ? a.width - this.getScrollerWidth() : a.width,
					height: this.isHorizontalScrollbar() ? a.height - this.getScrollerWidth() : a.height
				}
			};
			y.prototype.isVerticalScrollbar = function () {
				return this.getViewportDimensions(!0).height < document.body.scrollHeight
			};
			y.prototype.isHorizontalScrollbar = function () {
				var a = this.getViewportDimensions(!0).width;
				return document.documentElement && a < document.documentElement.scrollWidth || a < document.body.scrollWidth
			};
			y.prototype.getScrollerWidth = function () {
				var a = null,
					b = null,
					f = 0,
					a = 0,
					a = document.createElement("div");
				a.style.cssText = "position: absolute; top: -10000px; left: -10000px; width: 100px; height: 50px; overflow: hidden";
				b = document.createElement("div");
				b.style.cssText = "width: 100%; height: 200px";
				a.appendChild(b);
				document.body.appendChild(a);
				f = b.offsetWidth;
				a.style.overflow = "auto";
				a = b.offsetWidth;
				document.body.removeChild(document.body.lastChild);
				return f - a
			};
			y.prototype.addSurveyHandlers = function (a) {
				var e, f = this;
				this.chatContainer && (e = this.chatContainer.getElementById(a), e = l.getElementsByTagName(e, "input"), e.forEach(function (e, c) {
					e.id && f.chatContainer.attachUserEventListener("click", function () {
						f.lastRadioButton !== e.id && (f.lastRadioButton = e.id, b.chatHandler.sendMessage(e.value))
					}, e.id, "survey" + a + c + "click")
				}))
			};
			y.prototype.ifScrollbarDown = function () {
				var a, e, f;
				if (!this.chatContainer || !this.chatContainer.elementReferrer) return !1;
				a = this.chatContainer.getElementById("chatContainer");
				f = this.chatContainer.getElementById("chatPanel");
				if (a && f) {
					if (b.formHandler.currentForm) return f.style.display = "block", e = a.offsetHeight + 10, a = 30 > a.scrollHeight - (a.scrollTop + e), f.style.display = "none", a;
					e = a.offsetHeight + 10;
					return 30 > a.scrollHeight - (a.scrollTop + e)
				}
			};
			y.prototype.scrollToBottom = function () {
				if (this.chatContainer && this.chatContainer.elementReferrer) {
					var a = this.chatContainer.getElementById("chatContainer"),
						b = this.chatContainer.getElementById("chatPanel");
					if (a) {
						var f = a.style.display,
							c = b.style.display;
						"none" === f && (a.style.display = "block");
						"none" === c && (b.style.display = "block");
						a.scrollTop = 1E8;
						"none" === f && (a.style.display = f);
						"none" === c && (b.style.display = c); - 1 === this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && 0 !== a.scrollTop && this.toggleGreetingsView(a.scrollHeight < this.chatContainer.getElementById("chatWrapper").offsetHeight)
					}
				}
			};
			y.prototype.isChatScrollbar = function () {
				var a;
				if (this.chatContainer && this.chatContainer.elementReferrer && (a = this.chatContainer.getElementById("chatContainer"))) return a.scrollHeight >
					this.getViewportDimensions(c.isPopup).height - 139
			};
			y.prototype.addWaitTime = function () {
				var a, e, f;
				!b.chatHandler.agentHasMessaged && c.showWaitTime && (e = this.chatContainer.getElementById("greetingsContent"), (a = this.chatContainer.getElementById("greetingsWaitTime")) && e && (f = Math.ceil(r.waitTime / 6E4), f = b.languageParser.translate("chat", "messageQueuedText", {
					t: f,
					strongStart: "<b>",
					strongEnd: "</b>"
				}), a.innerHTML = f, a.style.display = "block", e.style.display = "block", this.waitTimeUpdater(!0)))
			};
			y.prototype.removeWaitTime =
				function () {
					var a, b;
					this.chatContainer && this.chatContainer.elementReferrer && (a = this.chatContainer.getElementById("greetingsWaitTime"), b = this.chatContainer.getElementById("greetingsContent"), a && b && (a.innerHTML = "", a.style.display = "none", l.hasClass(b, "no-content") && (b.style.display = "none")))
				};
			y.prototype.waitTimeUpdater = function (a) {
				var e, f, c = this;
				if (this.chatContainer && this.chatContainer.elementReferrer && (f = this.chatContainer.getElementById("greetingsWaitTime")) && !(6E4 >= r.waitTime)) {
					e = r.waitTime % 6E4 ||
						6E4;
					if (a) return setTimeout(function () {
						c.waitTimeUpdater()
					}, e);
					r.waitTime -= e;
					a = Math.ceil(r.waitTime / 6E4);
					a = b.languageParser.translate("chat", "messageQueuedText", {
						t: a,
						strongStart: "<b>",
						strongEnd: "</b>"
					});
					f.innerHTML = a;
					setTimeout(function () {
						c.waitTimeUpdater()
					}, 6E4)
				}
			};
			y.prototype.appendAgentIsTypingElement = function (a) {
				var b, f, c = this.ifScrollbarDown(),
					d = v.agentProfiles[a];
				this.chatContainer && (f = d && d.pi ? r.agentImgUrl + "/" + d.pi : "", d.strongStart = "<b>", d.strongEnd = "</b>", b = t["agent-typing"], b = l.escapeTemplateReplacement(b, [{
					placeholder: "__MESSAGE_ID__",
					textReplace: a
				}, {
					placeholder: /__NAME__/gm,
					textReplace: d.n
				}, {
					placeholder: "__IMAGE_URL__",
					textReplace: f ? "url('" + f + "');" : "transparent;"
				}]), this.chatContainer.getElementById("agentTypingContainer").innerHTML += b, this.chatContainer.getElementById("agentTypingContainer").style.display = "block", c && this.scrollToBottom())
			};
			y.prototype.removeAgentTypingElement = function (a) {
				this.chatContainer && ((a = this.chatContainer.getElementById("agentTyping-" + a)) && a.parentNode.removeChild(a), this.chatContainer.getElementById("agentTypingContainer").style.display =
					"none")
			};
			y.prototype.changeRating = function (a) {
				var e = "c";
				this.chatContainer && (0 > a ? a = c.showEmoji() && "undefined" !== typeof G ? ":thumbsdown_tone2:" : "&#128078;" : 0 < a ? a = c.showEmoji() && "undefined" !== typeof G ? ":thumbsup_tone2:" : "&#128077;" : (a = b.languageParser.translate("chat", "remove_rate"), e = "n"), b.viewHandler.appendMessage({
					message: a,
					type: e,
					time: new Date,
					senderType: "v",
					ownerId: z.visitorId
				}))
			};
			y.prototype.notifiyDepartmentIsNotOnline = function (a, e) {
				var f, c, d = this.chatContainer;
				d && (f = d.getElementById("chatWrapper")) &&
					(c = l.escapeTemplateReplacement(t.departmentOfflineNotification, [{
						placeholder: "__TITLE__",
						textReplace: s.isIE6 ? "<span>" + b.languageParser.translate("chat", "notificationTitle") + "</span>" : "<center><span>" + b.languageParser.translate("chat", "notificationTitle") + "</span></center>"
					}, {
						placeholder: "__MESSAGE__",
						textReplace: b.languageParser.translate("chat", "offline" === e ? "departmentIsOffline" : "departmentIsAway", {
							departmentName: a,
							strongStart: "<b>",
							strongEnd: "</b>"
						})
					}]), c = l.createElement(d.documentRef, "div", {
						id: "departmentOfflineNotification",
						className: "messageContainer"
					}, null, c), f.insertBefore(c, f.firstChild))
			};
			y.prototype.setDivider = function (a, e, f) {
				var n, d, g, h = this;
				!this.chatContainer.documentRef.getElementById("newMessageDivider") && (g = this.chatContainer.documentRef.getElementById("chatWrapper"), d = new D("newMessageDivider"), d.template = l.escapeTemplateReplacement(e, [{
					placeholder: /__NEW_MESSAGES__/gm,
					textReplace: b.languageParser.translate("chat", "newMessages").toUpperCase()
				}]), d.buildView(), g.insertBefore(d.elementReferrer, f.elementReferrer), !l.chatElementInView(d.elementReferrer) && (b.viewHandler.isMaximized || c.isPopup || c.isEmbedded) && (n = this.chatContainer.documentRef.getElementById("newMessagesBar"))) && (n.className = "visible", b.eventHandler.listen(n, this.clickEvent, function () {
					h.scrollToSeeMessage(a);
					n.className = ""
				}, "newmessagedivider"))
			};
			y.prototype.removeDivider = function () {
				var a, b = this;
				clearTimeout(this.removeDividerTimeout);
				this.removeDividerTimeout = setTimeout(function () {
					(a = b.chatContainer.documentRef.getElementById("newMessageDivider")) &&
					a.parentNode.removeChild(a)
				}, 1E3)
			};
			y.prototype.scrollToSeeMessage = function (a) {
				var b = this.chatContainer.documentRef.getElementById("chatContainer");
				a && b && (b.scrollTop = a.offsetTop - b.offsetHeight + 50, this.checkSeenMessageViewport())
			};
			y.prototype.checkUnseenMessages = function () {
				var a;
				if (!this.newMessageNotSeen && !this.unseenMessages.length) return !1;
				for (var b = 0; b < this.unseenMessages.length; b++) l.chatElementInView(this.unseenMessages[b]) && (this.unseenMessages.splice(b, 1), b--);
				if (!this.unseenMessages.length ||
					s.mobileBrowserName && this.ifScrollbarDown()) this.newMessageNotSeen = !1, (a = this.chatContainer.documentRef.getElementById("newMessagesBar")) && setTimeout(function () {
					a.className = ""
				}, 250), this.removeDivider()
			};
			y.prototype.parseUploadedFile = function (a) {
				var e = "https://tawk.link/" + a.name,
					f = this,
					c = t["file-upload"],
					g = this.ifScrollbarDown();
				if (-1 !== ["jpeg", "png", "gif"].indexOf(a.type) && 2E6 >= a.size) {
					var h = new Image;
					h.onload = function () {
						var c = l.createElement(f.chatContainer.documentRef, "a", {
								href: e,
								target: "_blank"
							}),
							n = f.chatContainer.getElementById("placeholder-" + a.name),
							k = null,
							m = null;
						if (n) {
							c.appendChild(h);
							c.className = "clearfix";
							n.parentNode.insertBefore(c, n);
							n.parentNode.removeChild(n);
							if (!b.viewHandler.isMaximized && f.messagePreview) {
								k = l.createElement(f.messagePreview.container.documentRef, "a", {
									href: e,
									target: "_blank"
								});
								if (m = f.messagePreview.container.getElementById("placeholder-" + a.name)) k.appendChild(h), k.className = "clearfix", m.parentNode.insertBefore(k, m), m.parentNode.removeChild(m);
								f.messagePreview.scrollToBottom()
							}
							setTimeout(function () {
								d.requestAnimationFrame(function () {
									g &&
										f.scrollToBottom()
								})
							}, 1E3 / 6)
						}
					};
					h.setAttribute("src", e);
					h.setAttribute("class", "uploaded-image");
					c = l.escapeTemplateReplacement(c, [{
						placeholder: "__FILE_DISPLAY__",
						textReplace: '<div class="image-loader" id="placeholder-' + a.name + '">' + t.loader + "</div>"
					}])
				} else c = -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(a.mimeType) ? l.escapeTemplateReplacement(c, [{
					placeholder: "__FILE_DISPLAY__",
					textReplace: '<video width="auto" height="auto" controls style="display: block; max-width: 420px; width: 100%;"><source src="' +
						e + '" type="' + a.mimeType + '"></source></video>'
				}]) : -1 !== ["audio/mp3", "audio/ogg"].indexOf(a.mimeType) ? l.escapeTemplateReplacement(c, [{
					placeholder: "__FILE_DISPLAY__",
					textReplace: '<audio controls style="display: block; max-width : 220px;"><source src="' + e + '" type="' + a.mimeType + '"></source></audio>'
				}]) : t["file-upload-not-img-vid-audio"];
				return c = l.escapeTemplateReplacement(c, [{
					placeholder: "__FILE_NAME__",
					textReplace: a.fileName
				}, {
					placeholder: "__DOWNLOAD_URL__",
					textReplace: e
				}, {
					placeholder: "__DOWNLOAD_TEXT__",
					textReplace: b.languageParser.translate("chat", "downloadFile")
				}, {
					placeholder: "__FILE_SIZE__",
					textReplace: l.formatFileSize(a.size)
				}, {
					placeholder: "__FILE_TYPE__",
					textReplace: a.type
				}, {
					placeholder: "__DOWNLOAD_LABEL__",
					textReplace: b.languageParser.translate("chat", "download")
				}])
			};
			y.prototype.startUpload = function (a) {
				var e, f, c, d = this,
					g = t.fileUploadProgress,
					h = this.ifScrollbarDown();
				c = this.chatContainer.getElementById("fileInput");
				e = a.name || a.fileName;
				f = l.getElementsByClassName(d.chatContainer.elementReferrer,
					"upload-error");
				if (f.length)
					for (var k = 0; k < f.length; k++) f[k].parentNode.removeChild(f[k]);
				b.fileUploadHandler.getUploadHandler(function (f) {
					var k;
					f.handle ? (k = f.handle, g = l.escapeTemplateReplacement(g, [{
						placeholder: "__HANDLE__",
						textReplace: k
					}, {
						placeholder: "__FILE_NAME__",
						textReplace: l.rawEncode(e)
					}, {
						placeholder: "__FILE_STATUS__",
						textReplace: b.languageParser.translate("chat", "uploading")
					}]), d.chatContainer.getElementById("chatWrapper").innerHTML += g, h && d.scrollToBottom(), b.fileUploadHandler.uploadFile(k,
						a, e,
						function (b, f) {
							c.value = "";
							b.success || d.handleUploadError(a, e, k, f)
						})) : (d.handleUploadError(a, e, k), c.value = "")
				})
			};
			y.prototype.handleUploadError = function (a, e, f, c) {
				var d = this.ifScrollbarDown(),
					g = this,
					h = document.createElement("a"),
					k = new D("uploadFailedNotification"),
					m = t.uploadFailedNotification,
					m = m.replace(/__UPLOAD_FAILED_LABEL__/, b.languageParser.translate("chat", "generalUploadErrorLabel")),
					m = m.replace(/__UPLOAD_FAILED_MESSAGE__/, b.languageParser.translate("chat", "generalUploadError", {
						fileName: l.rawEncode(e)
					}));
				k.template = m;
				k.buildView();
				if (a) {
					if (f) {
						e = this.chatContainer.getElementById("upload-" + f);
						if (!e) return;
						e.parentNode.removeChild(e);
						if (a && (!c || "generalUploadError" === c)) {
							h.innerHTML = b.languageParser.translate("chat", "tryAgain");
							h.setAttribute("href", "javascript:void(0);");
							h.setAttribute("id", "retry-" + f);
							k.elementReferrer.getElementsByClassName("uploadFailedRetryContainer")[0].appendChild(h);
							var p;
							p = b.eventHandler.listen(h, this.clickEvent, function () {
								b.eventHandler.removeEventHandler(h, this.clickEvent,
									p);
								k.elementReferrer.parentNode.removeChild(k.elementReferrer);
								g.startUpload(a)
							}, "retry-" + f)
						}
					}
					this.chatContainer.getElementById("chatContainer").appendChild(k.elementReferrer);
					d && this.scrollToBottom()
				}
			};
			y.prototype.updateFileProgress = function (a) {
				var b = this.chatContainer.getElementById("upload-" + a.handle);
				a = 360 * (a.progress / 100);
				b && (180 >= a ? (b.getElementsByClassName("circle-progress-left")[0].style.transform = "rotate(" + a + "deg)", b.getElementsByClassName("circle-progress-right")[0].style.display = "none",
					b.getElementsByClassName("circle-progress-clip")[0].style.display = "block") : (b.getElementsByClassName("circle-progress-left")[0].style.transform = "rotate(180deg)", b.getElementsByClassName("circle-progress-right")[0].style.transform = "rotate(" + a + "deg)", b.getElementsByClassName("circle-progress-right")[0].style.display = "block", b.getElementsByClassName("circle-progress-clip")[0].style.display = "none"))
			};
			y.prototype.fileUploaded = function (a) {
				(a = this.chatContainer.getElementById("upload-" + a)) && a.parentNode.removeChild(a)
			};
			y.prototype.retryUploadFile = function (a) {
				var b = this,
					f, c;
				this.retryUploadList[a] && this.startUpload(this.retryUploadList[a], function () {
					f = b.chatContainer.getElementById(a);
					c = f.parentNode;
					c.removeChild(f);
					c.parentNode.removeChild(c);
					delete b.retryUploadList[a];
					Object.keys(b.retryUploadList).length || b.chatContainer.getElementById("maxFileNotificationContainer").classList.add("hidden");
					f = null
				})
			};
			y.prototype.checkUploadFileWarning = function (a, e) {
				var f = this.chatContainer.getElementById("maxFileNotificationContainer"),
					c = this.chatContainer.getElementById("maxSizeNotificationContainer"),
					d = this.chatContainer.getElementById("maxFileSizeList"),
					g = this.chatContainer.getElementById("maxFileNumberList"),
					h = this,
					k;
				if (e.length) {
					k = "<ul>";
					this.retryUploadList = {};
					for (var m = 0; m < e.length; m++) this.retryUploadList["retry_upload_" + m] = e[m], k += "<li>" + e[m].name + ' <a id="retry_upload_' + m + '" class="actionRetry">' + b.languageParser.translate("notifications", "retry") + "</a></li>";
					g.innerHTML = k + "</ul>";
					k = l.getElementsByClassName(g, "actionRetry");
					for (g = 0; g < k.length; g++) k[g].addEventListener(h.clickEvent, function () {
						this.classList.add("hidden");
						h.retryUploadFile(this.id)
					});
					f.classList.remove("hidden")
				}
				if (a.length) {
					k = "<ul>";
					for (f = 0; f < a.length; f++) k += "<li>" + a[f].name + "</li>";
					d.innerHTML = k + "</ul>";
					c.classList.remove("hidden")
				}
				k && this.scrollToBottom()
			};
			y.prototype.applyWhiteLabelSettings = function () {
				var a, b, f;
				this.chatContainer && (a = this.chatContainer.documentRef.getElementById(this.tawktoLinkName), b = this.chatContainer.documentRef.getElementById(this.bottomContainerName),
					f = {
						id: this.tawktoLinkName,
						parentElem: b,
						siblingName: b.nextSibling ? b.nextSibling.id : null,
						grandParentName: b.parentNode.id
					}, c.whiteLabel() ? (f.url = c.whiteLabel().url || null, f.label = l.transformLabel(l.rawEncode(c.whiteLabel().label)) || null, f.textColor = c.whiteLabel().textColor || "#000000") : (f.url = "javascript:void(0);", f.label = t["default-branding"]), null === f.label ? (a = this.chatContainer.documentRef.getElementById("contentContainer"), a.className += "no-branding", b.parentNode.removeChild(b)) : (l.insertRandomTagsBeforeAndAfter(b,
						b.parentNode, "div"), l.insertRandomTagsBeforeAndAfter(a, a.parentNode, "a"), l.applyWhiteLabelSettings(a, f)))
			};
			y.prototype.showCallRequest = function (a, e, f, n) {
				var d, g, h = this;
				d = t.incomingCallRequest;
				var k = (new Date).getTime();
				g = (new Date(f)).getTime();
				k = e - (k - g);
				f = {
					callId: a,
					ringTimeout: e,
					startedOn: f,
					caller: n,
					isMissed: null
				};
				g = this.chatContainer.getElementById("incoming-call");
				g || (e = this.ifScrollbarDown(), b.chatHandler.webrtcWin && !b.chatHandler.webrtcWin.closed ? b.chatHandler.webrtcWin.focus() : (g = (n = v.agentProfiles[v.profiles[n.urid]]) &&
					n.pi ? r.agentImgUrl + "/" + n.pi : "default", d = d.replace(/__IMAGE_URL__/, g ? "url('" + g + "');" : "transparent;"), d = d.replace(/__INCOMING_CALL__/, b.languageParser.translate("chat", "incoming_call_message", {
						name: n.n
					})), d = d.replace(/__ACCEPT_CALL__/, b.languageParser.translate("chat", "accept_call")).replace(/__DECLINE_CALL__/, b.languageParser.translate("chat", "decline_call")), clearTimeout(this.incomingCallTimeout), g = new D("incoming-call"), g.template = d, g.buildView(), d = this.chatContainer.getElementById("chatContainer"),
					n = d.parentNode, d && n && (n.insertBefore(g.elementReferrer, d), d = this.chatContainer.getElementById("accept-call"), n = this.chatContainer.getElementById("decline-call"), e && this.scrollToBottom(), b.eventHandler.listen(d, this.clickEvent, function () {
							clearTimeout(h.incomingCallTimeout);
							l.getWebRTCToken(!1, !1, function () {
								h.removeCallRequest()
							})
						}, "acceptVideoCall"), b.eventHandler.listen(n, this.clickEvent, function () {
							clearTimeout(h.incomingCallTimeout);
							l.rejectCall(a, function () {
								h.removeCallRequest()
							})
						}, "declineVideoCall"),
						this.incomingCallTimeout = setTimeout(function () {
							h.removeCallRequest()
						}, k), c.isPopup || (b.viewHandler.isMaximized || c.isEmbedded) || (b.viewHandler.indicator.show(), b.viewHandler.messagePreview && b.viewHandler.messagePreview.show(b.viewHandler.indicator.unansweredMessages, null, f)), b.audioPlayer.play("chat_sound"))))
			};
			y.prototype.removeCallRequest = function () {
				var a = this.chatContainer.getElementById("incoming-call");
				a && a.parentNode.removeChild(a);
				this.messagePreview && this.messagePreview.incomingCallContainer &&
					this.messagePreview.removeCallRequest()
			};
			y.prototype.subscribeCallUpdate = function (a, e) {
				var f, c, d, g, h, k, m, p = this,
					q = this.chatContainer.documentRef,
					r = this.callData[a],
					s = this.ifScrollbarDown();
				r ? f = r.callView : (f = new D(a, null, {
						className: "webrtcCallContainer messageContainer clearfix"
					}, null, q), f.template = l.escapeTemplateReplacement(t.callInfo, [{
						placeholder: "__LOADER__",
						textReplace: t.loader
					}]), f.buildView(), q.getElementById("chatWrapper").insertBefore(f.elementReferrer, q.getElementById("agentTypingContainer")),
					this.callData[a] = {
						callView: f
					});
				c = l.getElementsByClassName(f.elementReferrer, "callLoader");
				d = l.getElementsByClassName(f.elementReferrer, "callInfoContainer");
				g = l.getElementsByClassName(f.elementReferrer, "callIconWrapper");
				h = l.getElementsByClassName(f.elementReferrer, "callErrorContainer");
				c && c.length && (c[0].style.display = "block");
				h && h.length && (h[0].style.display = "none");
				b.socketManager.sendToConnector("getCallStatus", {
					callId: a
				}, function (q, r) {
					c && c.length && (c[0].style.display = "none");
					q ? (d && d.length && (d[0].style.display =
							"none"), h && h.length ? h[0].style.display = "block" : (m = t.callError.replace("__HEADER__", b.languageParser.translate("chat", "error_title")).replace("__MESSAGE__", b.languageParser.translate("chat", "call_error_load")).replace("__ACTION__", b.languageParser.translate("notifications", "retry")), h = l.createElement(p.chatContainer.documentRef, "div", null, null, m), h.className = "callErrorContainer", h.style.display = "block", f.elementReferrer.appendChild(h)), (k = l.getElementsByClassName(f.elementReferrer, "retry-load")) &&
						k.length && b.eventHandler.listen(k[0], p.clickEvent, function () {
							p.subscribeCallUpdate(a, e)
						}, "retryCallLoad" + a)) : r.data.call.f && (d && d.length && (d[0].style.display = "block"), callIcon = r.data.call.f.vid ? '<span class="callIcon btn-icon icon-video-chat"></span>' : r.data.call.f.scrn ? '<span class="callIcon btn-icon icon-desktop-sharing"></span>' : '<span class="callIcon btn-icon icon-voice-chat"></span>', g && g.length && (g[0].innerHTML = callIcon), p.callData[a].ver = r.data.call.ver, s && p.scrollToBottom(), p.updateCallView(r.data.call,
						e))
				})
			};
			y.prototype.updateCallView = function (a, e) {
				var f, c, d, g, h, k = !!a.mssd;
				d = !!a.rjctd;
				c = this.callData[a.clid];
				var m = {},
					m = null;
				if (!c) return this.subscribeCallUpdate(a.clid);
				c.ver > a.ver || (h = this.ifScrollbarDown(), c = c.callView, m = c.elementReferrer.getElementsByClassName("btn-icon")[0], callIconContainerEl = c.elementReferrer.getElementsByClassName("callIconContainer")[0], callIconContainerEl.style.backgroundColor = "#47ca2b", "ringing" === a.stts ? ("v" !== a.cllr.t && this.showCallRequest(a.clid, a.rt, a.so, a.cllr), f =
					b.languageParser.translate("chat", ("v" === a.cllr.t ? "visitor_" : "agent_") + "ringing")) : "in-progress" === a.stts ? (this.removeCallRequest(), f = b.languageParser.translate("chat", "ongoing_call")) : "completed" === a.stts && (g = l.parseChatTime(a.so), this.removeCallRequest(), a.f.vid || a.f.scrn || (m.style.transform = "rotate(135deg)"), callIconContainerEl.style.backgroundColor = "#e52f48", m = {
					callId: a.clid,
					ringTimeout: a.rt,
					startedOn: a.so,
					caller: a.cllr,
					isMissed: k
				}, e || (!b.viewHandler.messagePreview || s.mobileBrowserName) || b.viewHandler.messagePreview.show(b.viewHandler.indicator.unansweredMessages,
					null, m), k || d ? (f = d ? b.languageParser.translate("chat", "rejected_call") : b.languageParser.translate("chat", "missed_" + ("v" === a.cllr.t ? "agent" : "visitor")), d = b.languageParser.translate("chat", "call_started_on", {
					startedOn: g
				})) : (d = l.getTimeDifference(a.so, a.eo), f = b.languageParser.translate("chat", "completed_call"), d = b.languageParser.translate("chat", "call_end_details", {
					startedOn: g,
					duration: d
				})), (g = l.getElementsByClassName(c.elementReferrer, "callEndDetails")) && g.length && (g[0].innerHTML = d, g[0].style.display =
					"block")), (c = l.getElementsByClassName(c.elementReferrer, "callTitle")) && c.length && (c[0].innerHTML = f, k && (c[0].className += " missed")), this.callData[a.clid].ver = a.ver, h && this.scrollToBottom())
			};
			y.prototype.closeMessagePreview = function (a) {
				a.ts && this.messagePreview && this.messagePreview.removeAllElements(a.ts)
			};
			y.prototype.toggleGreetingsView = function (a) {
				var e = this.chatContainer.getElementById("chatContainer"),
					f = this.chatContainer.getElementById("greetingsMainContainer"),
					c = Math.floor(e.scrollHeight),
					d = Math.floor(e.clientHeight);
				a || c === d || 5 >= c - d ? 0 === e.scrollTop && -1 !== f.className.indexOf("minimize") && (f.className = f.className.replace(" minimize", ""), this.chatContainer.getElementById("agentProfileContainer").className = "", 1 === b.agents.agentsCount && this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), this.chatContainer.getElementById("shortMessage").style.display = "block") : -1 === f.className.indexOf("minimize") && (f.className += " minimize", this.chatContainer.getElementById("agentProfileContainer").className =
					"show", 1 < b.agents.agentsCount ? this.chatContainer.getElementById("headerAccountStateContainer").classList.add("multiple-agent") : this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), 0 < b.agents.agentsCount && (this.chatContainer.getElementById("shortMessage").style.display = "none"))
			};
			y.prototype.checkSeenMessageViewport = function () {
				var a = -1,
					e, f;
				if (0 !== this.unseenMessages.length) {
					for (var c = 0; c < this.unseenMessages.length; c++) {
						f = this.unseenMessages[c];
						var d = this.chatContainer.getElementById(f);
						d && l.chatElementInView(d) && (e = b.chatHandler.getMessageObjectById(f));
						if (e && e.timeStamp > r.lastMessageTimestamp) {
							a = c;
							break
						}
					} - 1 !== a && (f = this.unseenMessages[this.unseenMessages.length - 1]) && (e = b.chatHandler.getMessageObjectById(f)) && this.updateLastTimestamp(e.timeStamp)
				}
			};
			y.prototype.updateLastTimestamp = function (a) {
				this.lastUpdateTimeout && clearTimeout(this.lastUpdateTimeout);
				this.clearUnseenNotification();
				this.lastUpdateTimeout = setTimeout(function () {
					!(document.hidden || document.msHidden || document.webkitHidden) &&
					a > r.lastMessageTimestamp && (r.lastMessageTimestamp = a, b.socketManager.sendToConnector("visitorChatSeen", {
						timestamp: a
					}, function () {}))
				}, 1E3)
			};
			y.prototype.clearUnseenNotification = function () {
				var a = this.chatContainer.documentRef.getElementById("newMessagesBar");
				this.unseenMessages = [];
				a && (a.className = "");
				this.updateTotalUnseenMessages();
				this.removeDivider()
			};
			y.prototype.updateTotalUnseenMessages = function () {
				this.totalUnseenMessages = this.unseenMessages.length;
				b.viewHandler.indicator && b.viewHandler.indicator.updateUnseenMessages(this.totalUnseenMessages)
			};
			y.prototype.scrollToFirstUnseen = function () {
				var a = this.chatContainer.documentRef.getElementById("newMessageDivider");
				a ? this.scrollToSeeMessage(a) : this.scrollToBottom()
			};
			var J = function () {
				var a = this;
				this.currentForm = "";
				this.formView = null;
				this.forms = {
					nameForm: {
						id: "changeNameForm",
						title: "NameFormMessage",
						fields: [{
							fieldName: "name",
							valueMaxLength: 40,
							languageKey: "Name",
							getValue: b.visitorHandler.getNameValue,
							validation: "isValidString",
							type: "input",
							isRequired: !0
						}],
						publish: "notifyNameChange",
						afterSave: b.visitorHandler.setNameFromForm,
						resize: "auto"
					},
					emailTranscriptForm: {
						id: "emailTranscriptForm",
						title: "EmailTranscriptFormMessage",
						fields: [{
							fieldName: "name",
							valueMaxLength: 40,
							languageKey: "Name",
							getValue: b.visitorHandler.getNameValue,
							validation: "isValidString",
							type: "input",
							hiddenIE8: !0,
							isRequired: !0
						}, {
							fieldName: "transcriptEmail",
							valueMaxLength: 150,
							languageKey: "Email",
							getValue: b.visitorHandler.getTranscriptEmailValue,
							validation: "isValidEmail",
							type: "input",
							instantValidation: !1,
							isRequired: !0
						}],
						saveFunc: "requestEmailTranscript",
						afterSave: b.visitorHandler.setTranscriptValue,
						resize: "auto"
					},
					offlineForm: {
						id: "offlineForm",
						getTitle: function () {
							return l.transformGreetings(c.offlineOptions.text)
						},
						dynamicFields: null,
						saveFunc: "submitOfflineForm",
						dontCloseForm: !0,
						afterSave: a.showOfflineOverlay
					},
					preChatForm: {
						id: "preChatForm",
						getTitle: function () {
							return c.prechatOptions.text ? l.transformGreetings(c.prechatOptions.text) : c.isEmbedded && "page" === $_Tawk_WidgetId && pageType && "profile" === pageType ? b.languageParser.translate("form", "PreChatFormMessageProfile") : b.languageParser.translate("form",
								"PreChatFormMessage")
						},
						dynamicFields: null,
						saveFunc: "submitPrechatForm",
						afterSave: a.handlePrechatForm,
						dontCloseForm: !1
					},
					inactivityOverlay: {
						id: "inactivityOverlay",
						overlayMessage: "inactive",
						otherEvent: {
							eventName: "click",
							elementName: "inactivityOverlay",
							executedFunc: b.main.criticalRefresh
						}
					},
					maintenanceOverlay: {
						id: "maintenanceOverlay",
						overlayMessage: "maintenance"
					},
					endChatForm: {
						id: "endChatForm",
						publish: "endVisitorChat",
						afterSave: a.handleChatEnded,
						dontCloseForm: !1,
						resize: "auto",
						title: "EndChatTitle"
					},
					consentForm: {
						id: "consentForm",
						saveFunc: "submitConsent",
						getTitle: function () {
							return l.transformGreetings(c.consentOption.text).replace(l.regLineBreaks, l.br)
						},
						dynamicFields: null,
						dontCloseForm: !0,
						otherEvent: {
							eventName: "click",
							elementName: "formDecline",
							executedFunc: function () {
								c.isPopup ? d.close() : r.chatWindowState("min")
							}
						},
						customButtons: function () {
							return c.consentOption.buttons
						}
					},
					restartChatForm: {
						id: "restartChatForm",
						dontCloseForm: !0,
						resize: "auto",
						title: "chatEnded",
						fields: [{
							fieldName: "transcriptEmail",
							valueMaxLength: 150,
							languageKey: "Email",
							getValue: b.visitorHandler.getTranscriptEmailValue,
							validation: "isValidEmail",
							type: "input",
							instantValidation: !1,
							isRequired: !0
						}],
						saveFunc: "requestEmailTranscript",
						afterSave: b.visitorHandler.setTranscriptValue
					}
				};
				b.eventEmitter.on("localeChanged", function () {
					var b = a.currentForm;
					b && (a.closeForm(), a.openForm(b))
				});
				z.displayName.subscribe(function (b) {
					!a.currentForm || "preChatForm" !== a.currentForm && "offlineForm" !== a.currentForm || a.formView.updateName(b)
				});
				z.email.subscribe(function (b) {
					!a.currentForm || "preChatForm" !==
						a.currentForm && "offlineForm" !== a.currentForm || a.formView.updateEmail(b)
				});
				r.prechatFormSubmitted.subscribe(function () {
					"preChatForm" === a.currentForm && a.closeForm()
				})
			};
			J.prototype.openForm = function (a) {
				var e, f, c, h = this,
					k = b.viewHandler.chatContainer.getElementById("formContainer"),
					m = this.forms[a];
				if (m && this.currentForm !== a && k) {
					this.formView = null;
					if ("preChatForm" === a || "offlineForm" === a) {
						if (e = b.viewHandler.chatContainer.getElementById("contentContainer")) e.className += " form-opened ";
						this.formView = new U(m,
							a);
						"offlineForm" === a && b.viewHandler.indicator && (b.viewHandler.indicator.pageTitleNotification.off(), b.viewHandler.indicator.hide());
						g && g.clearTextareaResize()
					} else this.formView = new ba(m);
					this.currentForm = a;
					this.formView.buildForm();
					this.formView.buildView(b.viewHandler.chatContainer.documentRef);
					c = b.viewHandler.chatContainer.getElementById("greetingsMainContainer");
					e = b.viewHandler.chatContainer.getElementById("greetingsText");
					b.viewHandler.chatContainer.getElementById("chatPanel").style.display =
						"none";
					k.innerHTML = "";
					k.appendChild(this.formView.elementReferrer);
					k.style.display = "block";
					this.forms[a].getTitle && "consentForm" !== a && this.forms[a].getTitle() ? (e.innerHTML = this.forms[a].getTitle(), c.style.display = "block") : c.style.display = "none";
					"endChatForm" === a && (c.style.display = "block", b.viewHandler.chatContainer.getElementById("contentContainer").className = "chatEndVisible");
					this.attachEventListeners();
					this.formView.addPlaceholderHandler();
					k.className = this.formView.isFormRequired ? "has-required" :
						"";
					b.eventHandler.listen(d, "resize", function () {
						h.resize()
					}, "windowresizeform");
					l.redraw(k);
					"preChatForm" !== a && "offlineForm" !== a || b.eventEmitter.emit("formOpened");
					var p, q = 0,
						r = 0,
						t = 0;
					a = /Firefox/i.test(x.userAgent) ? "DOMMouseScroll" : "mousewheel";
					s.mobileBrowserName && (a = "touchstart touchmove touchend");
					f = b.viewHandler.chatContainer.getElementById("formFieldsContainer");
					b.viewHandler.chatContainer.attachUserEventListener(a, function (a) {
						var b, e = Math.ceil(f.scrollHeight),
							d = Math.ceil(f.clientHeight);
						p = a.originalEvent ?
							a.originalEvent : a;
						t = p.detail ? -40 * p.detail : p.wheelDelta;
						b = 0 < t;
						"touchmove" === a.type ? r = a.changedTouches[0].clientY : "touchstart" === a.type ? q = a.touches[0].clientY : "touchend" === a.type && (b = q < r);
						if (0 === f.scrollTop && -1 !== c.className.indexOf("minimize")) {
							if (0 > t || q > r) return
						} else if (-1 === c.className.indexOf("minimize") && (q < r || 0 < t)) return;
						b || e === d || 5 >= e - d ? 0 === f.scrollTop && -1 !== c.className.indexOf("minimize") && (c.className = c.className.replace(" minimize", "")) : -1 === c.className.indexOf("minimize") && (c.className +=
							" minimize")
					}, "formFieldsContainer", "formContainerScroll");
					this.handleResizeofForm()
				}
			};
			J.prototype.handleResizeofForm = function (a) {
				if (!(s.mobileBrowserName || c.isPopup || c.isEmbedded))
					if (!b.formHandler.currentForm || a) b.viewHandler.chatContainer.restyle("height", c.maximizedDimensions().height + "px !important");
					else {
						var e = b.viewHandler.chatContainer.getElementById("formContainer");
						a = b.viewHandler.chatContainer.getElementById("greetingsMainContainer");
						var f = 120;
						"offlineForm" === b.formHandler.currentForm &&
							"block" === b.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display ? e = b.viewHandler.chatContainer.getElementById("offlineForm") : l.getElementsByClassName(e, "formFrame") ? e = l.getElementsByClassName(e, "formFrame")[0] : (e = l.getElementsByClassName(e, "formTable")[0], f = 60);
						a && (f += a.offsetHeight);
						a = e.offsetHeight + f;
						a >= c.maximizedDimensions().height && (a = c.maximizedDimensions().height);
						b.viewHandler.chatContainer.restyle("height", a + "px !important")
					}
			};
			J.prototype.showOfflineOverlay = function () {
				b.viewHandler.chatContainer.getElementById("formContainer").className +=
					" success"
			};
			J.prototype.resize = function () {
				var a, e, f, c, d;
				null !== this.formView && s.mobileBrowserName && (c = b.viewHandler.chatContainer.getElementById("formContainer"), f = b.viewHandler.chatContainer.getElementById("formInnerHeight"), d = b.viewHandler.chatContainer.getElementById("headerBoxWrapper"), c && (a = l.getElementsByClassName(c, "formMessageField"), e = l.getElementsByClassName(c, "longFormContainer"), a && (a.length && e && e.length) && (a = l.getElementsByClassName(c, "longFormBottomContainer")[0].clientHeight, e[0].style.height =
					b.viewHandler.iframeContainer.clientHeight - d.clientHeight - a + "px"), !f || "android" !== s.mobileBrowserName && "android2" !== s.mobileBrowserName && "android2.3" !== s.mobileBrowserName || (f.style.overflow = "hidden", b.viewHandler.addOverflowScroll(f))))
			};
			J.prototype.closeForm = function () {
				var a, e;
				a = b.viewHandler.chatContainer.getElementById("formContainer");
				var f = b.viewHandler.chatContainer.getElementById("submitWrapper");
				e = b.viewHandler.chatContainer.getElementById("contentContainer");
				var c = "endChatForm" === this.currentForm,
					d = this.formView ? "preChatForm" === this.formView.elementId : null;
				if (this.currentForm || d) e && (e.className = e.className.replace(/form-opened/g, "")), a && this.formView && (this.formView = null, this.currentForm = "", a.innerHTML = "", a.style.display = "none", a.className = "", a = b.viewHandler.chatContainer.getElementById("greetingsMainContainer"), e = b.viewHandler.chatContainer.getElementById("greetingsText"), a && (a.style.display = "block", e.innerHTML = ""), f && (f.className = "", f.innerHTML = ""), b.eventEmitter.emit("formClosed"), c && (b.viewHandler.chatContainer.getElementById("contentContainer").className =
					"", b.formHandler.openForm("emailTranscriptFormOnChatEnded")), this.handleResizeofForm())
			};
			J.prototype.attachEventListeners = function () {
				var a, e, f = this,
					c = this.formView.formData,
					d = b.viewHandler.chatContainer.getElementById("formCancel"),
					h = b.viewHandler.chatContainer.getElementById("formSubmit"),
					k = b.viewHandler.chatContainer.getElementById("formCloseChat"),
					l = this.formView.formData.fields || [],
					m = "preChatForm" === f.formView.elementId,
					p = "offlineForm" === f.formView.elementId,
					q = "formcancelclick",
					r = "formsubmitclick";
				this.formView.formData.dynamicFields && (l = this.formView.formData.dynamicFields);
				m ? (d = b.viewHandler.chatContainer.getElementById("formCancel"), h = b.viewHandler.chatContainer.getElementById("formSubmit"), q = "formcancelclick-pc", r = "formsubmitclick-pc") : p && (h = b.viewHandler.chatContainer.getElementById("formSubmit"), a = b.viewHandler.chatContainer.getElementById("resendButton"), r = "formsubmitclick-ol");
				e = b.viewHandler.chatContainer.getElementById("newChat");
				d && b.eventHandler.listen(d, b.viewHandler.clickEvent,
					function (a) {
						if (m) return b.eventEmitter.emit(f.formView.formData.saveFunc, {}, function (a, b) {
							f.handleAfterSave(a, {
								serverData: b
							})
						});
						f.closeForm();
						b.eventHandler.cancelEvent(a)
					}, q);
				h && b.eventHandler.listen(h, b.viewHandler.clickEvent, function () {
					f.submitForm()
				}, r);
				k && b.eventHandler.listen(k, b.viewHandler.clickEvent, function (a) {
					g ? (g.container.hide(), b.viewHandler.isMaximized = !1, b.viewHandler.show()) : b.main.hideWidget();
					b.eventHandler.cancelEvent(a)
				}, "formcloseclick");
				a && b.eventHandler.listen(a, b.viewHandler.clickEvent,
					function () {
						p && (b.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display = "none", b.viewHandler.chatContainer.getElementById("formFieldsContainer").style.display = "block");
						b.viewHandler.chatContainer.getElementById("submitWrapper").className = b.viewHandler.chatContainer.getElementById("submitWrapper").className.replace("visible", "");
						b.viewHandler.chatContainer.getElementById("formContainer").className = b.viewHandler.chatContainer.getElementById("formContainer").className.replace("success",
							"")
					}, "resendButtonClick");
				e && b.eventHandler.listen(e, b.viewHandler.clickEvent, function (a) {
					g.chatStarted();
					b.chatHandler.startNewChat();
					b.eventHandler.cancelEvent(a)
				}, "newChat", "newChat");
				l.forEach(function (a) {
					if (!a.disabled) {
						var e = b.viewHandler.chatContainer.getElementById(a.fieldName + "Field"),
							c = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError"),
							d = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldErrorIcon");
						e && ("textarea" !== e.nodeName.toLowerCase() && b.eventHandler.listen(e,
							"keypress",
							function (a) {
								13 === a.keyCode && f.submitForm()
							}, "formkeypress" + a.fieldName), b.eventHandler.listen(e, "keydown", function (a) {
							13 !== a.keyCode && setTimeout(function () {
								"" !== c.innerHTML && (c.innerHTML = "", c.style.display = "none", d.style.display = "none", e.parentNode.className = e.parentNode.className.replace(" error", ""))
							}, 1)
						}, "formkeydown" + a.fieldName))
					}
				});
				if (c.otherEvent) {
					var s = c.otherEvent;
					(a = b.viewHandler.chatContainer.getElementById(s.elementName)) && b.eventHandler.listen(a, s.eventName, function () {
							s.executedFunc()
						},
						"formother")
				}
			};
			J.prototype.submitForm = function () {
				var a, e = this,
					f = b.viewHandler.chatContainer.getElementById("formSubmit"),
					c = b.viewHandler.chatContainer.getElementById("formCancel"),
					d = b.viewHandler.chatContainer.getElementById("formCloseChat"),
					g = b.viewHandler.chatContainer.getElementById("submitWrapper");
				a = this.validateForm();
				if (null === a) g.className = "";
				else {
					g.innerHTML = '<p id="submitWrapperMessage">' + b.languageParser.translate("form", "SubmittingProcess") + "</p>" + t.loader;
					g.className = "visible";
					f && f.setAttribute("disabled",
						"disabled");
					c && c.setAttribute("disabled", "disabled");
					d && d.setAttribute("disabled", "disabled");
					e.handleResizeofForm(!0);
					if (this.formView.formData.publish) return b.socketManager.sendToConnector(this.formView.formData.publish, a, function (b, f) {
						a.serverData = f;
						e.handleAfterSave(b, a)
					});
					if (this.formView.formData.saveFunc) try {
						b.eventEmitter.emit(this.formView.formData.saveFunc, a, function (b, f) {
							a.serverData = f;
							e.handleAfterSave(b, a)
						})
					} catch (h) {
						e.handleAfterSave(!0), q.handleError("Unable to emit form handler save func : " +
							this.formView.formData.saveFunc + " with data : " + JSON.stringify(a), h.fileName, h.lineNumber, h.stack)
					}
				}
			};
			J.prototype.handleAfterSave = function (a, e) {
				var f, c, d, g, h, k, l, m;
				if (b && b.formHandler.formView && b.formHandler.formView.formData) {
					f = b.formHandler.formView.formData.afterSave;
					c = b.viewHandler.chatContainer.getElementById("formSubmit");
					d = b.viewHandler.chatContainer.getElementById("formCancel");
					g = b.viewHandler.chatContainer.getElementById("formCloseChat");
					h = b.viewHandler.chatContainer.getElementById("submitWrapper");
					l = b.viewHandler.chatContainer.getElementById("transcriptEmailField");
					k = "emailTranscriptFormOnChatEnded" === this.currentForm;
					m = "offlineForm" === b.formHandler.formView.elementId;
					h.className = "";
					h.innerHTML = "";
					c && c.removeAttribute("disabled");
					d && d.removeAttribute("disabled");
					g && g.removeAttribute("disabled");
					if (a) return this.updateFormStatus(a);
					f && f(e);
					k ? l.value = "" : (m && (b.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display = "block", b.viewHandler.chatContainer.getElementById("formFieldsContainer").style.display =
						"none"), this.formView.formData.dontCloseForm ? this.updateFormStatus() : this.closeForm())
				}
			};
			J.prototype.updateFormStatus = function (a) {
				var e, f, c;
				b.viewHandler.chatContainer && (e = b.viewHandler.chatContainer.getElementById("formSavingStatus"), f = b.viewHandler.chatContainer.getElementById("savingStatus"), c = b.viewHandler.chatContainer.getElementById("submitWrapper"), e && f ? a ? (e.className = "errorMessage", f.innerHTML = b.languageParser.translate("form", "errorSaving"), a = l.getElementsByClassName(b.viewHandler.chatContainer.documentRef,
					"longFormContainer"), a.length && (a[0].scrollTop = 999999999999)) : (e.className = "", f.innerHTML = b.languageParser.translate("form", "saved")) : this.currentForm && "offlineForm" === this.currentForm ? a ? (c.className = "visible", c.innerHTML = "<p>" + b.languageParser.translate("form", "OfflineMessageNotSent") + "</p>", setTimeout(function () {
					c.className = ""
				}, 3E3)) : (c.className = "", this.clearForm()) : c.className = "")
			};
			J.prototype.validateForm = function () {
				var a, e, f = {},
					c = 0,
					d = this;
				if (this.formView) return a = this.formView.formData.fields || [], this.formView.formData.dynamicFields && (a = this.formView.formData.dynamicFields), a.forEach(function (a) {
					var g, h, k, m, p;
					if ("additionalQuestion" === a.fieldName && a.getValue && l.isArray(a.getValue())) f.additionalQuestion = {}, a.getValue().forEach(function (e, c) {
						(h = b.viewHandler.chatContainer.getElementById(a.fieldName + c)) && (f.additionalQuestion[c] = e === h.value ? null : l.trim(h.value))
					});
					else if ("choice" === a.fieldType || "option" === a.fieldType) p = b.viewHandler.chatContainer.documentRef.getElementsByName(a.fieldName +
							"group"), k = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError"), g = b.viewHandler.chatContainer.getElementById(a.fieldName + "Container"), formLabelEl = g.parentElement.parentElement.getElementsByClassName("form-field-label")[0], errorIconEl = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldErrorIcon"), p = "choice" === a.fieldType ? d.getSelectedCheckbox(p, a.isRequired) : d.getSelectedRadio(p, a.isRequired), k.innerHTML = "", k.style.display = "none", errorIconEl.style.display = "none", g.className =
						g.className.replace("error", ""), null === p ? (c++, m = !1, k.innerHTML = b.languageParser.translate("form", a.languageKey + "ErrorMessage"), k.style.display = "block", errorIconEl.style.display = "block", g.className += " error", formLabelEl.style.color = "#e52f48") : (formLabelEl.style.color = "#707070", f[a.fieldName] = p);
					else {
						h = b.viewHandler.chatContainer.getElementById(a.fieldName + "Field");
						k = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError");
						errorIconEl = b.viewHandler.chatContainer.getElementById(a.fieldName +
							"FieldErrorIcon");
						if (!h) return;
						g = a.placeholderText === h.value ? null : l.trim(h.value);
						m = d[a.validation](g, a.valueMaxLength, a.isRequired);
						k.innerHTML = "";
						k.style.display = "none";
						errorIconEl.style.display = "none";
						h.parentNode.className = h.parentNode.className.replace("error", "");
						m ? f[a.fieldName] = g : (c++, k.innerHTML = b.languageParser.translate("form", a.languageKey + "ErrorMessage"), k.style.display = "block", errorIconEl.style.display = "block", h.parentNode.className += " error")
					}
					e || m || (e = h)
				}), 0 < c ? (e && (a = b.viewHandler.chatContainer.getElementById("formContainer"),
					a.scrollTop = e.offsetTop), null) : f
			};
			J.prototype.isValidString = function (a, b, f) {
				return f || a ? !(!a || !l.isString(a) || b && !(b && a.length <= b)) : !0
			};
			J.prototype.isValidEmail = function (a, b, f) {
				return f || a ? !!(a && l.isEmail(a) && l.isString(a) && a.length <= b) : !0
			};
			J.prototype.isValidDepartment = function (a, b, f) {
				var c;
				b = r.departments;
				if (!(f || a && "0" !== a)) return !0;
				for (c in b)
					if (b[c].did === a) return !0;
				return !1
			};
			J.prototype.getSelectedCheckbox = function (a, b) {
				for (var f = [], c = 0, d = a.length; c < d; c++) a[c].checked && f.push(a[c].value);
				return !f.length &&
					b ? null : f
			};
			J.prototype.getSelectedRadio = function (a, b) {
				for (var f = "", c = 0, d = a.length; c < d; c++)
					if (a[c].checked) {
						f = a[c].value;
						break
					}
				return !f && b ? null : f
			};
			J.prototype.isValidPhone = function (a, b, f) {
				if (!f && !a) return !0;
				"+" === a.charAt(0) && (a = a.replace("+", ""));
				return !!(a.length && 7 <= a.length && a.match(/[0-9]/im))
			};
			J.prototype.handlePrechatForm = function (a) {
				a = l.getDepartmentStatus(a.department);
				a.isOnline || b.viewHandler.notifiyDepartmentIsNotOnline(a.name, a.status);
				b.formHandler.formView.formData.dontCloseForm = !1
			};
			J.prototype.handleChatEnded = function (a) {
				b.formHandler.formView.formData.dontCloseForm = !1;
				v.chatId = a.serverData.nextChatId;
				b.chatHandler.endChat(a.serverData.chatEndVersion);
				b.viewHandler.resetView()
			};
			J.prototype.clearForm = function () {
				var a = this.formView.formData.fields || [];
				this.formView.formData.dynamicFields && (a = this.formView.formData.dynamicFields);
				a.forEach(function (a, f) {
					var c;
					if ("name" !== a.fieldType && "email" !== a.fieldType && "department" !== a.fieldType)
						if ("choice" === a.fieldType || "option" === a.fieldType) {
							c =
								b.viewHandler.chatContainer.documentRef.getElementsByName(a.fieldName + "group");
							for (var d = 0, g = c.length; d < g; d++) c[d].checked = !1
						} else if (c = b.viewHandler.chatContainer.getElementById(a.fieldName + "Field")) c.value = "", "choice" === a.fieldType || "option" === a.fieldType || s.isPlaceholderSupported || (c.value = a.placeholderText)
				})
			};
			var K = TawkClass.extend({
				init: function () {
					var a = this,
						b = c.minimizedDimensions().width,
						f = c.minimizedDimensions().height;
					this.shown = this.inDocument = !1;
					this.indicatorWidth = this.indicatorHeight =
						21;
					this.frameHeight = f + "px";
					this.frameWidth = b + "px";
					this.offsetX = c.widgetOffsetX;
					this.offsetY = c.widgetOffsetY;
					this.messagePreviewHeight = null;
					this.messagePreviewOffset = 25;
					c.isDesktopRectangle() ? (this.container = new N(l.getRandomName(), l.getGenericStyle({
							zindex: "1000001",
							position: "fixed",
							bottom: this.offsetY,
							display: "none",
							height: this.frameHeight,
							width: this.frameWidth,
							maxheight: this.frameHeight,
							maxwidth: this.frameWidth,
							minheight: "40px",
							minwidth: "126px"
						}), Y, "iframe"), this.container.template = t["tawkchat-minified-iframe-element-rectangle"],
						this.chatIndicator = new N(l.getRandomName(), l.getGenericStyle({
							zindex: "1000003",
							margin: "0px",
							width: this.frameWidth,
							height: "37px",
							position: "fixed",
							display: "none",
							bottom: f + "px",
							left: "100%",
							maxheight: "37px",
							maxwidth: this.frameWidth,
							minheight: "37px",
							minwidth: this.frameWidth
						}), Y, "iframe")) : (this.frameWidth = this.frameHeight = "60px", this.container = new N(l.getRandomName(), l.getGenericStyle({
						zindex: "1000001",
						position: "fixed",
						bottom: this.offsetY,
						display: "none",
						height: this.frameHeight,
						width: this.frameWidth,
						maxheight: this.frameHeight,
						maxwidth: this.frameWidth,
						minheight: this.frameHeight,
						minwidth: this.frameWidth,
						borderRadius: "50%"
					}), Y, "iframe"), this.container.restyle("box-shadow", "rgba(0, 0, 0, 0.16) 0px 2px 10px 0px !important"), this.container.template = t["tawkchat-minified-iframe-element-round"], this.chatIndicator = new N(l.getRandomName(), l.getGenericStyle({
							zindex: "1000003",
							margin: "0px",
							width: "60px",
							height: "22px",
							position: "fixed",
							display: "none",
							bottom: "57px",
							left: "100%",
							maxheight: "22px",
							maxwidth: "60px",
							minheight: "22px",
							minwidth: "60px"
						}),
						Y, "iframe"));
					c.isCenterPositioned() ? this.messagePreviewHeight = 0.5 * Math.max(document.documentElement.clientHeight, d.innerHeight || 0) + 0.5 * c.minimizedDimensions().width + 20 - this.messagePreviewOffset + "px" : this.messagePreviewHeight = Math.max(document.documentElement.clientHeight, d.innerHeight || 0) - (c.minimizedDimensions().height + this.offsetY) - this.messagePreviewOffset + "px";
					this.messagePreview = new N(l.getRandomName(), l.getGenericStyle({
						zindex: "999999",
						width: "378px",
						height: this.messagePreviewHeight,
						position: "fixed",
						display: "none",
						bottom: c.minimizedDimensions().height + this.offsetY + 10 + "px",
						right: this.offsetX + "px"
					}), Y, "iframe");
					this.bubbleContainer = new N(l.getRandomName(), l.getGenericStyle({
						zindex: "1000000",
						width: "146px",
						height: "85px",
						position: "fixed",
						display: "none",
						bottom: f + 2 + "px",
						right: "20px",
						maxheight: "85px",
						maxwidth: "146px",
						minheight: "85px",
						minwidth: "146px"
					}), Y, "iframe");
					c.minimizedDimensions.subscribe(function (b) {
						a.frameHeight = b.height + "px";
						a.frameWidth = b.width + "px";
						a.widgetDimensionsUpdated()
					});
					r.pageStatus.subscribe(function (b) {
						a.updateGreetings(b);
						a.updateStatus(b)
					});
					r.chatBubbleClosed.subscribe(function (b) {
						b && a.bubbleContainer && a.bubbleContainer.clear()
					});
					c.chatBubble.subscribe(function () {
						a.bubbleSettingsChanged()
					});
					c.isRTL.subscribe(function () {
						a.bubbleSettingsChanged()
					});
					c.desktopWidget.subscribe(function () {
						b = c.minimizedDimensions().width;
						f = c.minimizedDimensions().height;
						a.offsetX = c.widgetOffsetX;
						a.offsetY = c.widgetOffsetY;
						c.isDesktopRectangle() ? (a.container.template = t["tawkchat-minified-iframe-element-rectangle"], a.chatIndicator.massRestyle(l.getGenericStyle({
							zindex: "1000003",
							margin: "0px",
							width: a.indicatorWidth + "px",
							height: a.indicatorHeight + "px",
							position: "fixed",
							display: "none",
							bottom: a.offsetY + "px",
							left: a.offsetY + "px",
							maxheight: a.indicatorHeight + "px",
							maxwidth: a.indicatorWidth + "px",
							minheight: a.indicatorHeight + "px",
							minwidth: a.indicatorWidth + "px"
						}))) : (a.container.template = t["tawkchat-minified-iframe-element-round"], a.chatIndicator.massRestyle(l.getGenericStyle({
							zindex: "1000003",
							margin: "0px",
							width: "60px",
							height: "22px",
							position: "fixed",
							display: "none",
							bottom: "57px",
							left: "100%",
							maxheight: "22px",
							maxwidth: "60px",
							minheight: "22px",
							minwidth: "60px"
						})));
						a.container.massRestyle(l.getGenericStyle({
							zindex: "1000001",
							position: "fixed",
							bottom: c.isDesktopRectangle() ? "0px" : a.offsetY,
							display: "none",
							height: a.frameHeight,
							width: a.frameWidth,
							maxheight: a.frameHeight,
							maxwidth: a.frameWidth,
							minheight: a.frameHeight,
							minwidth: a.frameWidth
						}));
						a.bubbleContainer && a.bubbleContainer.elementReferrer && a.bubbleContainer.clear();
						a.buildView();
						a.updateStatus()
					});
					c.showMessagePreview.subscribe(function () {
						c.showMessagePreview() ?
							a.initMessagePreviewContainer() : a.destroyMessagePreviewContainer()
					})
				},
				buildView: function () {
					var a;
					if (this.container && (b.MinifiedStyle = b.MinifiedStyle.replace(/#tawktoLink/g, "#" + b.viewHandler.tawktoLinkName), b.MinifiedStyle = b.MinifiedStyle.replace(/#bottomContainer/g, "#" + b.viewHandler.bottomContainerName), c.showMessagePreview() ? this.initMessagePreviewContainer() : this.destroyMessagePreviewContainer(), this.chatIndicator.buildIframe(b.MinifiedStyle + c.minStyle(), !0), a = l.getElementsByTagName(this.chatIndicator.documentRef,
							"body")[0], a.innerHTML = t["tawkchat-chat-indicator"], this.container.buildIframe(b.MinifiedStyle + c.minStyle()), this.bubbleContainer && (c.chatBubble() && this.bubbleContainer.elementReferrer ? this.bubbleContainer.buildIframe(b.MinifiedStyle + c.minStyle(), !0) : this.bubbleContainer.clear()), this.widgetDimensionsUpdated(), this.updateGreetings(), this.attachEvents(), this.inDocument = !0, c.isDesktopRectangle())) {
						a = this.container.getElementById("tawkchat-minified-container");
						var e = c.topCorner + "px ",
							f = c.bottomCorner +
							"px ";
						a.style.borderRadius = e + e + f + f
					}
				},
				attachEvents: function () {
					this.container && (this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						"max" === r.chatWindowState() ? (b.viewHandler.userAction = !0, b.sessionHandler.notifyWindowState("min")) : "max" === c.onClickAction ? (b.viewHandler.userAction = !0, b.sessionHandler.notifyWindowState("max")) : b.viewHandler.popoutWidget();
						b.eventHandler.cancelEvent(a)
					}, "tawkchat-minified-wrapper", "minifiedclick"), this.container.attachUserEventListener("mousedown",
						function (a) {
							b.viewHandler.lastFocusedElement = d.document.activeElement
						}, "tawkchat-minified-wrapper", "minifiedWidgetMouseDown"), this.attachBubbleEvents())
				},
				createCanvasChatBubble: function () {}
			});
			K.prototype.updateStatus = function (a) {
				var e;
				a || (a = r.pageStatus());
				if (this.container && a) {
					if (e = this.container.getElementById("tawkchat-status-icon")) e.className = a;
					if (e = this.container.getElementById("tawk-minified-mobile-text")) e.innerHTML = "online" === a || "away" === a ? b.languageParser.translate("chat", "chat_text") : b.languageParser.translate("chat",
						"mail_text");
					try {
						b.eventEmitter.emit("resizeIframeHeight")
					} catch (f) {
						q.handleError("Unable to emit resizeIframeHeight", f.fileName, f.lineNumber, f.stack)
					}
				}
			};
			K.prototype.attachBubbleEvents = function () {
				this.bubbleContainer && this.bubbleContainer.attachUserEventListener(b.viewHandler.clickEvent, b.sessionHandler.closeBubble, "tawkchat-chat-bubble-close", "bubblecloseclick")
			};
			K.prototype.hide = function () {
				this.container && (this.shown = !1, this.container.restyle("display", "none !important"), this.hideBubble())
			};
			K.prototype.show =
				function () {
					this.container && (this.shown = !0, this.container.restyle("display", "block !important"), this.showBubble())
				};
			K.prototype.widgetDimensionsUpdated = function () {
				this.container && (c.isDesktopRectangle() ? (minWidth = c.minimizedDimensions().width, minHeight = c.minimizedDimensions().height) : minHeight = minWidth = 60, this.container.massRestyle({
					height: minHeight + "px !important",
					"min-height": minHeight + "px !important",
					"max-height": minHeight + "px !important",
					width: minWidth + "px !important",
					"min-width": minWidth + "px !important",
					"max-width": minWidth + "px !important",
					"border-radius": c.isDesktopRectangle() ? "0 !important" : "50% !important"
				}), this.widgetPositonChanged(), this.bubbleSettingsChanged(), this.calculateIndicatorPositioning())
			};
			K.prototype.bubbleSettingsChanged = function () {
				var a = c.chatBubble();
				if (!a && this.bubbleContainer || c.hideWidgetOnLoad) return this.bubbleContainer.clear();
				b && (b.viewHandler && b.viewHandler.iframeContainer && b.viewHandler.iframeContainer.elementReferrer) && (a && (a.type && "default" !== a.type || this.bubbleContainer.elementReferrer &&
					this.bubbleContainer.insertCssFile(".bubble-text-color{color:" + (c.chatBubble() ? c.chatBubble().fgc : "#ffffff") + ";}", !0), a && (this.bubbleContainer || (this.bubbleContainer = new N(l.getRandomName(), l.getGenericStyle({
						zindex: "1000000",
						width: "146px",
						height: "85px",
						position: "fixed",
						display: "none",
						bottom: minHeight + 2 + "px",
						right: "20px",
						maxheight: "85px",
						maxwidth: "146px",
						minheight: "85px",
						minwidth: "146px"
					}), Y, "iframe")), this.bubbleContainer.elementReferrer || (b.viewHandler.iframeContainer.elementReferrer.appendChild(this.bubbleContainer.buildView(), !0), this.bubbleContainer.buildIframe(b.MinifiedStyle + c.minStyle(), !0)))), this.createBubble(), this.attachBubbleEvents())
			};
			K.prototype.updateGreetings = function (a) {
				var b;
				a || (a = r.pageStatus());
				this.container && a && (b = this.container.getElementById("short-message")) && (a = m.getShortMessage(a), null !== a && (b.innerHTML = a))
			};
			K.prototype.clear = function () {
				this.container.clear();
				this.container = null
			};
			K.prototype.widgetPositonChanged = function () {
				var a = {},
					b = this.offsetX,
					f = this.offsetY,
					d = b + "px";
				c.isCenterPositioned() ? (c.isDesktopRectangle() &&
					(d = 0.5 * c.minimizedDimensions().height - 0.5 * c.minimizedDimensions().width + "px"), c.isRightPositioned() ? (bodyClassName = "center right", a = c.isDesktopRectangle() ? l.getRotateStyling("-90", "49%") : l.getRotateStyling("0", "0"), a.right = d, a.left = "auto !important") : (bodyClassName = "center left", a = c.isDesktopRectangle() ? l.getRotateStyling("90", "49%") : l.getRotateStyling("0", "0"), a.left = d, a.right = "auto !important"), c.isDesktopRectangle() || (a.transform = "unset"), a.top = "calc(50% - " + 0.5 * c.minimizedDimensions().height +
					"px) !important", a.bottom = "auto !important") : (a = l.getRotateStyling("0", "0"), a.margin = "0px !important", c.isTopPositioned() ? (a.top = f + "px !important", a.bottom = "auto !important", bodyClassName = " top ") : (a.top = "auto !important", a.bottom = f + "px !important", bodyClassName = " bottom "), c.isRightPositioned() ? (bodyClassName += " right ", a.right = b + "px !important", a.left = "auto !important") : (bodyClassName += " left ", a.left = b + "px !important", a.right = "auto !important"));
				this.container.massRestyle(a)
			};
			K.prototype.createBubble =
				function () {
					var a;
					this.bubbleContainer && (this.bubbleContainer.elementReferrer && !c.hideWidget && c.chatBubble && !r.chatBubbleClosed()) && (c.chatBubble().type && "default" !== c.chatBubble().type ? this.createImageBubble() : this.createDefaultBubble(), a = this.bubbleContainer.getElementById("tawkchat-chat-bubble-close"), this.bubbleContainer.attachUserEventListener("mouseover", function () {
						a && (a.style.visibility = "visible")
					}, null, "bubbleHover"), this.bubbleContainer.attachUserEventListener("mouseout", function () {
						a && (a.style.visibility =
							"hidden")
					}, null, "bubbleOut"), this.bubbleContainer.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						"max" === c.onClickAction ? (b.viewHandler.userAction = !0, b.sessionHandler.notifyWindowState("max")) : b.viewHandler.popoutWidget();
						b.eventHandler.cancelEvent(a)
					}, "bubble-image", "bubbleContainerClick"), b.viewHandler.isMaximized || this.showBubble())
				};
			K.prototype.calculateBubblePositioning = function (a, b, f, d, g, h, k) {
				var m = c.minimizedDimensions().width,
					p = {};
				if (c.isCenterPositioned()) {
					var q, r;
					q = -0.5 * b;
					r = d;
					0 === h ? (m = "gallery" === c.chatBubble().type ? 0 : 0.5 * (m - b), f += "px !important") : "gallery" === c.chatBubble().type ? (r = m = 0, f = -1 * (0.5 * (a - b) - d) + "px !important") : (m = 0.5 * (m - a), f = -1 * (0.5 * (a - b) - f) + "px !important");
					p = l.getRotateStyling(h, "49%");
					c.isRightPositioned() ? (p.right = f, p.left = "auto !important") : (p.left = f, p.right = "auto !important");
					p.top = "50% !important";
					p.bottom = "auto !important";
					h = q - m + r
				} else p = l.getRotateStyling("0", "0"), h = "0", c.isTopPositioned() ? (p.top = d + "px !important", p.bottom = "auto !important", k +=
					" top ") : (p.bottom = d + "px !important", p.top = "auto !important", k += " bottom "), c.isRightPositioned() ? (p.right = f + "px !important", p.left = "auto !important", k += " right ") : (p.left = f + "px !important", p.right = "auto !important", k += " left ");
				p.width = a + "px !important";
				p["max-width"] = a + "px !important";
				p["min-width"] = a + "px !important";
				p.height = b + "px !important";
				p["max-height"] = b + "px !important";
				p["min-height"] = b + "px !important";
				p["z-index"] = (0 === g ? "1000000" : "1000002") + " !important";
				p.margin = h + "px 0 0 0 !important";
				this.bubbleContainer.massRestyle(p);
				this.bubbleContainer.documentRef.body.className += k
			};
			K.prototype.createDefaultBubble = function () {
				var a, b, f, d = 0;
				a = 0;
				a = !!document.createElement("canvas").getContext;
				var g = " default ";
				b = s.isIE && 9 > s.version;
				if (a || b) b = l.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0], b.innerHTML = t["tawkchat-chat-bubble-canvas"], a && this.createCanvasChatBubble(), a = this.bubbleContainer.getElementById("tawkchat-chat-bubble-text"), a.innerHTML = c.chatBubble().txt, a.style.color =
					c.chatBubble().fgc, c.isCenterPositioned() ? (c.isRightPositioned() ? (f = -90, d -= 10, c.isRTL() && (d = c.minimizedDimensions().width - 146)) : (f = 90, d = c.isDesktopRectangle() ? c.minimizedDimensions().width - 146 + 10 : 10, c.isRTL() && (d = 0)), a = c.minimizedDimensions().height + this.offsetX + 2) : (d = c.minimizedDimensions().height + this.offsetY + 2, a = !c.isRightPositioned() && !c.isRTL() || c.isRightPositioned() && c.isRTL() ? c.isDesktopRectangle() ? c.minimizedDimensions().width - 146 + 16 : 10 : 0), c.isRTL() && (g += " rtl-direction"), this.calculateBubblePositioning(146,
						85, a, d, 0, f, g)
			};
			K.prototype.createImageBubble = function () {
				var a, b, f, d;
				f = l.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0];
				var g = c.chatBubble(),
					h = g.height + 16,
					k = 0;
				"gallery" === g.type ? (b = parseInt(g.name, 10), d = 22 === b, c.isDesktopRectangle() || (b += "-r"), c.isCenterPositioned() ? (b += c.isRightPositioned() ? "-cr" : "-cl", c.isDesktopRectangle()) : b = c.isTopPositioned() ? b + (c.isRightPositioned() ? "-tr" : "-tl") : b + (c.isRightPositioned() ? "-br" : "-bl"), a = " gallery ", b = "https://static-v.tawk.to/a-v3/images/bubbles/" +
					b + (d ? ".png" : ".svg"), c.isCenterPositioned() && 0 === g.rotate && (a += " center-right"), f.innerHTML = l.escapeTemplateReplacement(t["tawkchat-chat-bubble-gallery"], [{
						placeholder: "__IMAGE_SRC__",
						textReplace: b
					}, {
						placeholder: "__IMAGE_SIZE__",
						textReplace: "width:" + g.width + "px; height:" + g.height + "px;"
					}])) : (a = " upload ", b = "https://tawk.link/" + c.chatBubble().name, f.innerHTML = l.escapeTemplateReplacement(t["tawkchat-chat-bubble-upload"], [{
					placeholder: "__IMAGE_SRC__",
					textReplace: b
				}]));
				c.isTopPositioned() || c.isCenterPositioned() ?
					(k += g.topOffset, c.isCenterPositioned() && 0 === g.rotate && (k -= 16)) : k += g.bottomOffset;
				f = c.isRightPositioned() ? g.rightOffset : g.leftOffset;
				c.isCenterPositioned() && 0 !== g.rotate && (f = "gallery" === g.type ? f - 3 : f + 2);
				this.calculateBubblePositioning(g.width, h, f, k, g.zIndex, g.rotate, a)
			};
			K.prototype.toggleBubble = function () {
				c.chatBubble && (this.bubbleContainer && this.bubbleContainer.elementReferrer) && (this.shown && "offline" !== r.pageStatus() ? this.bubbleContainer.restyle("display", "block !important") : this.bubbleContainer.restyle("display",
					"none !important"))
			};
			K.prototype.agentBarChanged = function (a) {
				var b, f, d, g, h, k, l, m = {};
				c.hideWidget || (this.container.massRestyle({
						height: a + "px !important",
						"min-height": a + "px !important",
						"max-height": a + "px !important"
					}), k = s.isIE && 10 > s.version, closeIconWidth = 16, minWidth = c.minimizedDimensions().width, minHeight = c.minimizedDimensions().height, b = c.chatBubble(), f = a - minHeight, l = b.rotate, b.type && "default" !== b.type ? (d = b.topOffset, g = b.bottomOffset, bubbleWidth = b.width, bubbleContainerHeight = b.height + closeIconWidth,
						h = c.isRightPositioned() ? b.rightOffset : b.leftOffset) : (bubbleWidth = 146, bubbleContainerHeight = 85, c.isCenterPositioned() ? (h = minHeight + 2, l = c.isRightPositioned() ? -90 : 90) : (d = minHeight + 2, g = minHeight + 2, h = c.isRightPositioned() ? 0 : minWidth - bubbleWidth + closeIconWidth)), c.isCenterPositioned() ? (d = -0.5 * minWidth + 0.5 * a + "px !important", h += f, f = 0 === l ? h + "px !important" : -1 * (0.5 * (bubbleWidth - bubbleContainerHeight) - h) + "px !important", c.isRightPositioned() ? (this.container.restyle("right", d), m.right = f, k && (this.container.restyle("right",
						a - minWidth + "px !important"), 0 !== l && (m.right = h - (bubbleWidth - bubbleContainerHeight) + "px !important"))) : c.isCenterPositioned() || (this.container.restyle("left", d), m.left = f, k && (this.container.restyle("left", "0px !important"), 0 !== b.rotate && (m.left = h + "px !important"))), k ? this.container.restyle("margin", -0.5 * minWidth + "px 0 0 0 !important") : this.container.restyle("margin", -0.5 * a + "px 0 0 0 !important")) : c.isCenterPositioned() || (c.isTopPositioned() ? m.top = d + f + "px !important" : m.bottom = g + f + "px !important"), this.bubbleContainer &&
					(this.bubbleContainer.elementReferrer && c.chatBubble && !r.chatBubbleClosed()) && this.bubbleContainer.massRestyle(m))
			};
			K.prototype.calculateIndicatorPositioning = function () {
				var a = {},
					b = this.indicatorWidth,
					f = this.indicatorHeight,
					g = c.minimizedDimensions().width,
					h = c.minimizedDimensions().height,
					k = "";
				Math.max(document.documentElement.clientHeight, d.innerHeight || 0);
				var l = this.offsetX,
					m = this.offsetY,
					p;
				c.isCenterPositioned() ? (c.isRightPositioned() ? (a.right = m + h - f + 5 + "px !important", a.top = "calc(50% - " + 0.5 * g + "px) !important",
					a.left = "auto !important", p = "right", a.bottom = "auto !important", c.isDesktopRectangle() ? (a.right = m + h - f + 5 + "px !important", c.isRTL() && (a.bottom = "calc(50% - " + (0.5 * g + 5) + "px) !important", a.top = "auto !important")) : (c.isRTL() ? a.right = h + "px !important" : a.right = l - 5 + "px !important", a.left = "auto !important")) : (a.right = "auto !important", p = "left", a.bottom = "auto !important", c.isDesktopRectangle() ? (a.top = "calc(50% - " + (0.5 * g + 5) + "px) !important", a.left = m + h - f + 5 + "px !important", c.isRTL() || (a.top = "calc(50% + " + (0.5 * g -
					0.5 * f) + "px) !important")) : (a.top = "calc(50% - " + 0.5 * g + "px) !important", c.isRTL() ? a.left = l - 5 + "px !important" : a.left = l + g - b + 5 + "px !important", a.right = "auto !important")), k += " bottom " + p) : (c.isTopPositioned() ? (k += " top ", a.top = m + "px !important", a.bottom = "auto !important") : (k += " bottom ", a.top = "auto !important", c.isDesktopRectangle() ? a.bottom = h - l - 5 + "px !important" : a.bottom = h + m - c.widgetOffsetY + "px !important"), c.isRightPositioned() ? (k += " right ", c.isRTL() ? c.isDesktopRectangle() ? a.right = g - 5 + "px !important" :
					a.right = g + "px !important" : c.isDesktopRectangle() ? a.right = "1px !important" : a.right = l - 5 + "px !important", a.left = "auto !important") : (k += " left ", c.isRTL() ? a.left = l - 5 + "px !important" : a.left = l + g - b + 5 + "px !important", a.right = "auto !important"));
				a.width = b + "px !important";
				a["max-width"] = b + "px !important";
				a["min-width"] = b + "px !important";
				a.height = f + "px !important";
				a["max-height"] = f + "px !important";
				a["min-height"] = f + "px !important";
				this.chatIndicator.documentRef.body.className += " " + k + " round";
				this.chatIndicator.massRestyle(a)
			};
			K.prototype.showBubble = function () {
				this.bubbleContainer && ("offline" !== r.pageStatus() && (!b.viewHandler.messagePreview || b.viewHandler.messagePreview && 1 > b.viewHandler.messagePreview.messagePreviewCount)) && this.bubbleContainer.show()
			};
			K.prototype.hideBubble = function () {
				this.bubbleContainer && this.bubbleContainer.hide()
			};
			K.prototype.initMessagePreviewContainer = function () {
				var a, e;
				a = b.viewHandler.iframeContainer;
				this.messagePreview = new N(l.getRandomName(), l.getGenericStyle({
					zindex: "999999",
					width: "378px",
					height: this.messagePreviewHeight,
					position: "fixed",
					display: "none",
					bottom: c.minimizedDimensions().height + this.offsetY + 10 + "px",
					right: this.offsetX + "px"
				}), Y, "iframe");
				b.viewHandler.messagePreview = new E(this.messagePreview);
				this.messagePreview.elementReferrer || a.elementReferrer.appendChild(this.messagePreview.buildView(a.documentRef));
				this.messagePreview.buildIframe(b.MinifiedStyle + c.minStyle());
				a = l.getElementsByTagName(this.messagePreview.documentRef, "body")[0];
				e = t["tawkchat-message-preview"];
				e = e.replace(/__TAWK_TO_LINK__/gm, b.viewHandler.tawktoLinkName);
				e = e.replace(/__BOTTOM_CONTAINER__/gm, b.viewHandler.bottomContainerName);
				a.innerHTML = e;
				b.viewHandler.messagePreview.init()
			};
			K.prototype.destroyMessagePreviewContainer = function () {
				this.messagePreview && (this.messagePreview.documentRef && this.messagePreview.documentRef.parentNode) && this.messagePreview.documentRef.parentNode.removeChild(this.messagePreview.documentRef);
				this.messagePreview = null;
				b.viewHandler.messagePreview = null
			};
			var Aa = K.extend({
				init: function () {
					var a = this;
					this._super(this);
					b.eventEmitter.on("localeChanged",
						function () {
							a.setLinkTitle()
						});
					c.isRTL.subscribe(function () {
						a.addClassName()
					})
				},
				buildView: function () {
					this._super(this);
					this.addClassName();
					this.setLinkTitle()
				},
				attachEvents: function () {
					this.container && this._super()
				},
				createCanvasChatBubble: function () {
					var a, b, f, d, g, h, k, l, m, p, q, r, s, t, v, w, u, x = 5,
						y = c.chatBubble().bgc;
					if (a = this.bubbleContainer.getElementById("tawkchat-chat-bubble-canvas")) c.chatPosition(), a.width = "146", a.height = "85", g = a.getContext("2d"), g.clearRect(0, 0, 134, 63), g.fillStyle = y, c.isTopPositioned() ?
						(x = 16, h = 68, s = x + 3, r = 81, t = 6, v = !1, a = 1.1, b = 1.9, f = 1.6, d = 0.85) : (h = x = 6, s = x + 63 - 3, r = 55, t = 79, v = !0, a = 0.9, b = 0.1, f = 0.4, d = 1.15), c.isRTL() ? (u = 10, closeContainerStart = u - 4, k = u + 2, l = u + 5, m = u - 2, p = u - 2, q = u + 5, r = 81, c.isTopPositioned() ? (w = v, f = 0.2, d = 1.45) : (w = !v, f = 0.6, d = 1.85)) : (u = 2, closeContainerStart = u + 134 + 4, k = u + 134 - 2, l = u + 134 - 5, m = u + 134 + 2, p = u + 134 + 2, q = u + 134 - 5, w = v), g.beginPath(), g.moveTo(u + 8, x), g.lineTo(68, x), g.lineTo(u + 134 - 8, x), g.quadraticCurveTo(u + 134, x, u + 134, x + 8), g.lineTo(u + 134, x + 63 - 8), g.quadraticCurveTo(u + 134, x + 63, u + 134 - 8,
							x + 63), g.lineTo(u + 8, x + 63), g.quadraticCurveTo(u, x + 63, u, x + 63 - 8), g.lineTo(u, x + 8), g.quadraticCurveTo(u, x, u + 8, x), g.strokeStyle = "#e3e0e7", g.lineWidth = 2, g.stroke(), g.closePath(), g.fill(), g.beginPath(), g.arc(68, s, 10, Math.PI * a, Math.PI * b, v), g.strokeStyle = "#e3e0e7", g.lineWidth = 2, g.stroke(), g.fill(), c.isDesktopRectangle() || (c.isTopPositioned() && c.isLeftPositioned() ? r -= 30 : c.isBottomPositioned() && c.isRightPositioned() ? r += 30 : c.isCenterPositioned() && c.isRightPositioned() && (r += 30)), g.beginPath(), g.arc(r, t, 5, 0, 2 * Math.PI, !1), g.strokeStyle = "#e3e0e7", g.lineWidth = 2, g.stroke(), g.closePath(), g.fill(), g.beginPath(), g.arc(k, h + 5, 10, Math.PI * f, Math.PI * d, w), g.strokeStyle = "#e3e0e7", g.lineWidth = 2, g.stroke(), g.closePath(), g.fillStyle = y, g.fill(), g.beginPath(), g.moveTo(l, h + 1.5), g.lineTo(m, h + 8), g.closePath(), g.lineWidth = 2, g.strokeStyle = c.chatBubble().fgc, g.stroke(), g.beginPath(), g.moveTo(p, h + 1.5), g.lineTo(q, h + 8), g.closePath(), g.lineWidth = 2, g.strokeStyle = c.chatBubble().fgc, g.stroke()
				}
			});
			Aa.prototype.setLinkTitle = function () {
				var a = this.container.getElementById("minimizeChatMinifiedBtn"),
					e = this.container.getElementById("maximizeChat");
				this.container && (e && e.setAttribute("title", b.languageParser.translate("rollover", "maximize")), a && a.setAttribute("title", b.languageParser.translate("rollover", "minimize")))
			};
			Aa.prototype.chatEnded = function () {
				var a = this.container.getElementById("tawkchat-minified-agent-container"),
					b = this.container.getElementById("tawkchat-status-text-container"),
					f = this.container.getElementById("tawkchat-minified-link-container");
				a && b && (a.innerHTML = "", a.style.display = "none",
					b.style.display = "block", f.style.marginTop = "0px")
			};
			Aa.prototype.addClassName = function () {
				var a;
				a = c.isRTL() ? " rtl-direction" : " ltr-direction";
				this.container && this.container.elementReferrer && (this.container.getElementById("tawkchat-minified-wrapper").className = l.getContrast(c.headerTxtColor) + a);
				this.chatIndicator && this.chatIndicator.elementReferrer && (this.chatIndicator.getElementById("tawkchat-chat-indicator").className = a)
			};
			var S = TawkClass.extend({
				init: function (a, e) {
					var f = this;
					this.inDocument = !1;
					this.maxNumberFileUpload =
						5;
					this.maxSizeFileUpload = 52428800;
					this.frameWidth = s.mobileBrowserName ? "100%" : c.maximizedDimensions().width + "px";
					this.frameHeight = s.mobileBrowserName ? "100%" : c.maximizedDimensions().height + "px";
					this.isActionsContainerNotifShown = this.isChatMenuOpen = !1;
					this.resizeThrottle = 0;
					this.container = c.isPopup ? new D(l.getRandomName(), "display: none;") : new N(l.getRandomName(), l.getGenericStyle({
						zindex: "999999",
						position: "static",
						display: "none",
						height: this.frameHeight,
						width: this.frameWidth
					}), Y, "iframe");
					this.wrapper =
						new D("tawkchat-maximized-wrapper");
					b.MaximizedStyle = b.MaximizedStyle.replace(/#tawktoLink/g, "#" + a);
					b.MaximizedStyle = b.MaximizedStyle.replace(/#bottomContainer/g, "#" + e);
					this.wrapper.template = this.wrapper.template.replace(/__TAWK_TO_LINK__/gm, a);
					this.wrapper.template = this.wrapper.template.replace(/__BOTTOM_CONTAINER__/gm, e);
					this.wrapper.template = this.wrapper.template.replace("__TOO_LONG_MESSAGE__", b.languageParser.translate("chat", "message_too_long"));
					c.isDesktopRectangle() || this.wrapper.addClass("roundWidget");
					this.chatTextarea = new D("chatTextarea", null, null, "textarea");
					this.container.addChildViews([this.wrapper]);
					c.maximizedDimensions.subscribe(function (a) {
						c.isEmbedded || (c.isPopup || s.mobileBrowserName) || (f.frameHeight = a.height + "px", f.frameWidth = a.width + "px", f.container.restyle("height", f.frameHeight + " !important"), f.container.restyle("width", f.frameWidth + " !important"))
					});
					r.pageStatus.subscribe(function (a) {
						f.updateGreetings(a)
					});
					c.soundOn.subscribe(function () {
						f.toggleSound()
					});
					b.eventEmitter.on("localeChanged",
						function () {
							f.container && f.updateGreetings()
						});
					c.isRTL.subscribe(function () {
						f.addClassName()
					});
					z.name.subscribe(function () {
						if (!l.isGeneratedName(z.name()))
							for (var a = l.getElementsByClassName(f.container.documentRef, "messageOwnerName visitor"), b = 0; b < a.length; b++) a[b].style.display = "none"
					});
					c.webRTCSettings.subscribe(function () {
						f.toggleWebRTCActions()
					});
					c.desktopWidget.subscribe(function () {
						c.isDesktopRectangle() ? (f.wrapper.removeClass("roundWidget"), f.container.documentRef.getElementById("minimizeChat").className =
							"headerBoxLink", "br" === c.chatPosition() ? f.container.documentRef.body.className = "right" : f.container.documentRef.body.className = "left") : (f.wrapper.addClass("roundWidget"), f.container.documentRef.getElementById("minimizeChat").className = "notShown")
					});
					c.showEmoji.subscribe(function () {
						f.toggleEmojiAction()
					});
					c.showUploads.subscribe(function () {
						f.toggleUploadsAction()
					});
					c.showRating.subscribe(function () {
						f.toggleRatingAction()
					})
				},
				buildView: function () {
					c.isPopup || this.container.buildIframe(b.MaximizedStyle +
						c.maxStyle());
					this.container.documentRef.getElementById("textareaContainer").appendChild(this.chatTextarea.buildView(this.container.documentRef));
					c.isEmbedded || c.isPopup || s.mobileBrowserName ? this.restyleEmbed() : "br" == c.chatPosition() ? (l.removeClass(this.container.documentRef.body, "left"), l.addClass(this.container.documentRef.body, "right")) : (l.removeClass(this.container.documentRef.body, "right"), l.addClass(this.container.documentRef.body, "left"));
					this.addClassName();
					this.updateGreetings();
					this.toggleSound();
					this.attachEvents();
					this.toggleUploadsAction();
					this.toggleRatingAction();
					this.toggleEmojiAction();
					"undefined" === typeof G && Qa(this.container.documentRef);
					l.redraw(this.container.elementReferrer);
					this.inDocument = !0;
					this.toggleWebRTCActions();
					var a = this.container.documentRef.getElementById("minimizeChat");
					c.isEmbedded || !c.isDesktopRectangle() || c.isPopup ? a.className = "notShown" : a.className = "headerBoxLink"
				},
				toggleUploadsAction: function () {
					var a = this,
						e = this.container.getElementById("uploadFileOption");
					e &&
						(c.showUploads() ? (e.style.display = "block", this.container.attachUserEventListener("change", function (e) {
							b.eventHandler.cancelEvent(e);
							a.closeMenu();
							e = b.eventHandler.getTargetElement(e).files;
							var c = [],
								d = [];
							if (e && e.length) {
								for (var g = 0; g < e.length; g++) e[g].size > a.maxSizeFileUpload ? c.push(e[g]) : g >= a.maxNumberFileUpload ? d.push(e[g]) : b.viewHandler.startUpload(e[g]);
								b.viewHandler.checkUploadFileWarning(c, d)
							}
						}, "fileInput", "fileInputChanged"), this.container.attachUserEventListener("dragover", function (b) {
							b.preventDefault();
							b.stopPropagation && b.stopPropagation();
							a.wrapper.addClass("drag-over")
						}, "innerWrapper", "textareaContainerDragOver"), e = function (b) {
							var e = a.container.getElementById("tawkchat-maximized-wrapper").getBoundingClientRect();
							if (b.clientY < e.top || b.clientY >= e.bottom || b.clientX < e.left || b.clientX >= e.right) b.preventDefault(), b.stopPropagation && b.stopPropagation(), a.wrapper.removeClass("drag-over")
						}, this.container.attachUserEventListener("dragleave", e, "innerWrapper", "textareaContainerDragLeave"), this.container.attachUserEventListener("dragend",
							e, "innerWrapper", "textareaContainerDragEnd"), this.container.attachUserEventListener("drop", function (e) {
							e.preventDefault();
							e.stopPropagation && e.stopPropagation();
							a.wrapper.removeClass("drag-over");
							e = e.target.files || e.dataTransfer.files;
							var c = [],
								d = [];
							if (e && 0 !== e.length) {
								for (var g = 0; g < e.length; g++) e[g].size > a.maxSizeFileUpload ? c.push(e[g]) : g >= a.maxNumberFileUpload ? d.push(e[g]) : b.viewHandler.startUpload(e[g]);
								b.viewHandler.checkUploadFileWarning(c, d)
							}
						}, "innerWrapper", "textareaContainerDrop"), this.container.attachUserEventListener("paste",
							function (a) {
								var e, c;
								if ((e = (a.originalEvent || a).clipboardData) && (e = e.items) && e.length) {
									for (var d = 0; d < e.length; d++)
										if (-1 !== e[d].type.indexOf("image")) {
											var g = e[d].getAsFile();
											if (null !== g) {
												c = g;
												c.name = b.languageParser.translate("chat", "pasted_image_title", {
													dateTime: l.parseChatTime(new Date)
												});
												break
											}
										}
									c && (b.viewHandler.startUpload(c), a.preventDefault())
								}
							}, "chatTextarea", "chatTextareaPaste")) : e.style.display = "none")
				},
				toggleRatingAction: function () {
					var a = this.container.getElementById("rateMainWrapper"),
						e = this.container.getElementById("rateContainer");
					a && e && (c.showRating() ? (a.style.display = "block", this.container.attachUserEventListener("mouseover", function () {
						e.style.display = "block"
					}, "rateMainWrapper", "rateMainWrapperOver"), this.container.attachUserEventListener("mouseout", function () {
						e.style.display = "none"
					}, "rateMainWrapper", "rateMainWrapperOut"), this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						b.chatHandler.changeRating(1);
						b.eventHandler.cancelEvent(a)
					}, "ratePositive", "ratepveclick"), this.container.attachUserEventListener(b.viewHandler.clickEvent,
						function (a) {
							b.chatHandler.changeRating(-1);
							b.eventHandler.cancelEvent(a)
						}, "rateNegative", "ratenveclick")) : a.style.display = "none")
				},
				toggleEmojiAction: function () {
					var a = this,
						e = this.container.getElementById("textareaContainer"),
						f = this.container.getElementById("viewEmoji"),
						d = this.container.documentRef.getElementById("emoji-selection-container");
					c.showEmoji() ? (d.innerHTML = t.loader, f.style.display = "block", l.addClass(e, "with-emoji"), "undefined" === typeof G && Qa(this.container.documentRef), this.container.attachUserEventListener(b.viewHandler.clickEvent,
						function (e) {
							e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
							"active" === a.container.getElementById("viewEmoji").className ? a.closeEmojiSelection() : (a.container.getElementById("viewEmoji").className = "active", Oa(d), b.viewHandler.adjustEmojiContainerHeight())
						}, "viewEmoji", "viewEmojiClick"), this.wrapper.attachUserEventListener(b.viewHandler.clickEvent, function (e) {
							e = b.eventHandler.getTargetElement(e);
							d && ("function" === typeof d.contains ? d.contains(e) || a.closeEmojiSelection() : l.isDescendent(d, e) && a.closeEmojiSelection())
						},
						null, "maxWidgetClick")) : (f.style.display = "none", l.removeClass(e, "with-emoji"))
				},
				attachEvents: function () {
					var a = this,
						e = this.container.documentRef.getElementById("tooLongMsgNotification"),
						f = l.hasWebRTC() ? null : "Browser not supported.";
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (e) {
						c.isPopup ? d.close() : (b.eventHandler.cancelEvent(e), b.sessionHandler.notifyWindowState("min"), a.closeMenu())
					}, "minimizeChat", "minlinkclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent,
						function () {
							b.viewHandler.popoutWidget();
							a.closeMenu()
						}, "popoutChat", "poplinkclick");
					if (s.mobileBrowserName) {
						var g = this.container.getElementById("chatTextarea");
						g && (Za.initElement(g, function (f, c) {
							5E3 >= c.length ? (e.className = "", a.isActionsContainerNotifShown = !1) : (e.className = "visible", a.isActionsContainerNotifShown = !0);
							a.toggleMobileSubmitButton(c);
							b.chatHandler.sendTextPreview(f)
						}), this.container.attachUserEventListener(b.viewHandler.clickEvent, function (e) {
							b.eventHandler.cancelEvent(e);
							b.chatHandler.sendMessage(g.value);
							g.value = "";
							a.toggleMobileSubmitButton("");
							a.resizeTextArea()
						}, "textareaSubmitButton", "submitclick"))
					} else this.chatTextarea.attachUserEventListener("keyup", function (f) {
						5E3 >= this.value.length ? (e.className = "", a.isActionsContainerNotifShown = !1) : (e.className = "visible", a.isActionsContainerNotifShown = !0);
						c.isEmbedded && b.browserData.getMobileBrowser() && a.toggleMobileSubmitButton(this.value);
						a.resizeTextArea()
					}, null, "chatinputkeyup"), this.chatTextarea.attachUserEventListener("keydown", function (f) {
						var c, d =
							a.container.getElementById("hidableActionsWrapper"),
							g = a.container.getElementById("textareaContainer");
						a.resizeTextArea();
						if (13 === f.keyCode) {
							if (5E3 < this.value.length) {
								f.preventDefault();
								return
							}
							e.className = "";
							a.isActionsContainerNotifShown = !1;
							b.viewHandler.scrollToBottom()
						}
						c = b.eventHandler.getTargetElement(f);
						setTimeout(function () {
							c.value ? (d.style.display = "none", g.className = g.className.replace("additionalPadding", ""), l.removeClass(g, "additionalPadding")) : (d.style.display = "block", g.className += " additionalPadding ",
								l.addClass(g, "additionalPadding"))
						}, 0);
						b.chatHandler.sendTextPreview(f)
					}, null, "chatinputkeydown"), this.chatTextarea.attachUserEventListener("blur", function (e) {
						e = b.eventHandler.getTargetElement(e);
						var f = a.container.getElementById("hidableActionsWrapper");
						e.value || (f.style.display = "block", l.addClass(a.container.getElementById("textareaContainer"), "additionalPadding"))
					}, null, "chatinputblur"), c.isEmbedded && b.browserData.getMobileBrowser() && this.chatTextarea.attachUserEventListener(b.viewHandler.clickEvent,
						function (e) {
							b.eventHandler.cancelEvent(e);
							b.chatHandler.sendMessage(a.chatTextarea.elementReferrer.value);
							a.chatTextarea.elementReferrer.value = "";
							a.toggleMobileSubmitButton("");
							a.resizeTextArea();
							b.viewHandler.scrollToBottom()
						}, "textareaSubmitButton", "submitclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						var e = b.eventHandler.getTargetElement(a); - 1 !== e.className.indexOf("messageOwnerName") && -1 !== e.className.indexOf("visitor") && (b.formHandler.openForm("nameForm"),
							b.eventHandler.cancelEvent(a))
					}, "chatWrapper", "chatWrapperclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (e) {
						b.formHandler.openForm("nameForm");
						a.closeMenu();
						b.eventHandler.cancelEvent(e)
					}, "changeName", "changenameclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (e) {
						b.formHandler.openForm("emailTranscriptForm");
						a.closeMenu();
						b.eventHandler.cancelEvent(e)
					}, "emailTranscriptOption", "emailclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent,
						function (a) {
							b.eventHandler.cancelEvent(a);
							b.chatHandler.toggleSound()
						}, "soundOn", "soundonclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						b.eventHandler.cancelEvent(a);
						b.chatHandler.toggleSound()
					}, "soundOff", "soundoffclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						b.eventHandler.cancelEvent(a);
						b.viewHandler.expandAgentList(a)
					}, "expandableIcon", "expandclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
						var a =
							b.languageParser.translate("chat", "video_call_error");
						l.getWebRTCToken(!0, !1, function (e) {
							e && b.viewHandler.appendMessage({
								senderType: "s",
								message: f || a,
								time: new Date,
								type: "n",
								isRtcError: !0,
								rtcType: "video"
							})
						})
					}, "videoCall", "videoCallClick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
						var a = b.languageParser.translate("chat", "voice_call_error");
						l.getWebRTCToken(!1, !1, function (e) {
							e && b.viewHandler.appendMessage({
								senderType: "s",
								message: f || a,
								time: new Date,
								type: "n",
								isRtcError: !0,
								rtcType: "voice"
							})
						})
					}, "voiceCall", "voiceCallClick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
						var b = a.container.getElementById("chatMenu"),
							e = a.container.getElementById("chatMenuControls");
						a.chatMenuOpen ? (a.chatMenuOpen = !1, b.className = "", e.style.display = "none") : (a.chatMenuOpen = !0, b.className = "active", e.style.display = "block")
					}, "chatMenu", "chatMenuClick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
						a.container.getElementById("chatMenu").className =
							"";
						a.closeMenu()
					}, "chatMenuControlsOverlay", "chatMenuControlsOverlayClick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
						var a = b.languageParser.translate("chat", "screen_share_error");
						l.getWebRTCToken(!1, !0, function (e) {
							e && b.viewHandler.appendMessage({
								senderType: "s",
								message: f || a,
								time: new Date,
								type: "n",
								isRtcError: !0,
								rtcType: "screen"
							})
						})
					}, "screenShare", "screenShareClick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
							a.container.getElementById("maxFileNotificationContainer").classList.add("hidden")
						},
						"closeNumberNotification", "closeNumberNotification");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
						a.container.getElementById("maxSizeNotificationContainer").classList.add("hidden")
					}, "closeSizeNotification", "closeSizeNotification");
					this.container.attachUserEventListener("mousedown", function () {
						var a = d.document.activeElement;
						!a || "input" !== a.tagName.toLowerCase() && "textarea" !== a.tagName.toLowerCase() || (b.viewHandler.lastFocusedElement = a)
					}, "innerWrapper", "maximizedWidgetMouseDown");
					this.container.attachUserEventListener("click", function (b) {
						b.preventDefault();
						a.chatTextarea && a.chatTextarea.elementReferrer && a.chatTextarea.elementReferrer.focus()
					}, "textareaContainer", "textareaContainerClick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						b.formHandler.openForm("nameForm");
						b.eventHandler.cancelEvent(a)
					}, "changeNameOption", "changenameclick");
					this.wrapper.attachUserEventListener("keydown", function (b) {
						27 === b.keyCode && a.closeEmojiSelection()
					}, null, "maxWidgetKeydown");
					var h = function (e) {
						"cut" !== e.type && "paste" !== e.type || b.chatHandler.sendTextPreview(e);
						a.resizeTextArea()
					};
					this.chatTextarea.attachUserEventListener("keydown", h, null, "chatinputkeyupresize");
					this.chatTextarea.attachUserEventListener("change", h, null, "chatinputchangeresize");
					this.chatTextarea.attachUserEventListener("input", h, null, "chatinputinputresize");
					this.chatTextarea.attachUserEventListener("paste", h, null, "chatinputpasteresize");
					this.chatTextarea.attachUserEventListener("cut", h, null, "chatinputcutresize");
					var k, m, p, q, r = this.container.getElementById("greetingsMainContainer"),
						h = /Firefox/i.test(x.userAgent) ? "DOMMouseScroll" : "mousewheel",
						t = this.container.getElementById("chatContainer");
					s.mobileBrowserName && (h = "touchstart touchmove touchend");
					s.mobileBrowserName && this.container.attachUserEventListener("scroll", a.chatViewScroll.bind(a), "chatContainer", "chatContainerScroll");
					this.container.attachUserEventListener(h, function (e) {
						k = e.originalEvent ? e.originalEvent : e;
						q = k.detail ? -40 * k.detail : k.wheelDelta;
						var f =
							0 < q;
						"touchmove" === e.type ? p = e.changedTouches[0].clientY : "touchstart" === e.type ? m = e.touches[0].clientY : "touchend" === e.type ? f = m < p : s.mobileBrowserName || a.chatViewScroll(e);
						if (0 === t.scrollTop && -1 !== r.className.indexOf("minimize")) {
							if (0 > q || m > p) return
						} else if (-1 === t.className.indexOf("minimize") && (m < p || 0 < q)) return;
						b.viewHandler.toggleGreetingsView(f)
					}, "chatPanel", "chatPanelScroll")
				},
				toggleSound: function () {
					var a = this.container.getElementById("soundOn"),
						b = this.container.getElementById("soundOff");
					a && b && (c.soundOn() ?
						(a.style.display = "block", b.style.display = "none") : (a.style.display = "none", b.style.display = "block"))
				}
			});
			S.prototype.chatViewScroll = function () {
				this.isScrolling && clearTimeout(this.isScrolling);
				this.isScrolling = setTimeout(function () {
					"max" === r.chatWindowState() && b.viewHandler.checkSeenMessageViewport()
				}, 1E3 / 66)
			};
			S.prototype.hide = function () {
				this.container.restyle("display", "none !important")
			};
			S.prototype.show = function () {
				this.container.restyle("display", "block !important");
				b.viewHandler.checkSeenMessageViewport();
				"consentForm" === b.formHandler.currentForm && this.wrapper.addClass("noMenu");
				b.formHandler.handleResizeofForm()
			};
			S.prototype.restyleEmbed = function () {
				var a = document.getElementById(k.embedded);
				this.wrapper.addClass("embedded");
				if (c.isPopup || c.isEmbedded) this.container.getElementById("popoutChat").outerHTML = "";
				if (c.isEmbedded) return a ? b.viewHandler.onEmbeddedWindowResize() : void 0;
				c.isPopup && (this.wrapper.addClass("popout"), l.updateFontStylesheet(document));
				this.container.restyle("width", "100% !important");
				this.container.restyle("height", "100% !important")
			};
			S.prototype.updateGreetings = function (a) {
				var e;
				if (this.container.elementReferrer) {
					if (e = this.container.getElementById("file-upload-drop-label")) e.innerHTML = b.languageParser.translate("chat", "dragDropText");
					if (a = a || r.pageStatus()) e = this.container.getElementById("shortMessage"), this.setChatGreetings(), e && this.chatTextarea && (a = m.getShortMessage(a), null !== a && (e.innerHTML = a, c.onlineGreeting && (a = l.rawDecode(c.onlineGreeting.actionMessage), s.isPlaceholderSupported ?
						this.chatTextarea.elementReferrer.placeholder = a : (this.chatTextarea.elementReferrer.value = a, l.togglePlaceholderText(this.chatTextarea.elementReferrer, a, "chatTextarea")))))
				}
			};
			S.prototype.addClassName = function () {
				this.wrapper && this.wrapper.elementReferrer && (c.isRTL() ? (this.wrapper.addClass("rtl-direction"), this.wrapper.removeClass("ltr-direction")) : (this.wrapper.addClass("ltr-direction"), this.wrapper.removeClass("rtl-direction")))
			};
			S.prototype.toggleEndChatOption = function (a) {
				var b = this.container.getElementById("endChatOption");
				b && (endChatEl = this.container.getElementById("endChat"), chatMenuEl = this.container.getElementById("chatMenuControls"), c.isEmbedded ? a ? (b.style.width = "220px", b.style.marginLeft = "-220px", chatMenuEl.style.right = "34px", endChatEl.style.display = "inline-block") : (b.style.width = "194px", b.style.marginLeft = "-194px", chatMenuEl.style.right = "10px", endChatEl.style.display = "none") : b.style.display = a ? "block" : "none")
			};
			S.prototype.addEmojiToInput = function (a) {
				s.isPlaceholderSupported || this.chatTextarea.elementReferrer.value !==
					l.rawDecode(c.onlineGreeting.actionMessage) || (this.chatTextarea.elementReferrer.value = "");
				this.chatTextarea.elementReferrer.value += a;
				this.chatTextarea.elementReferrer.focus();
				this.closeEmojiSelection()
			};
			S.prototype.closeEmojiSelection = function () {
				this.container.getElementById("viewEmoji").className = "";
				l.removeClass(this.container.getElementById("emoji-selection-container"), "showWithFade")
			};
			S.prototype.resizeTextArea = function () {
				var a = this;
				clearTimeout(this.resizeThrottle);
				this.resizeThrottle = setTimeout(function () {
					var e =
						a.chatTextarea.elementReferrer.value,
						f = a.container.documentRef.getElementById("textareaContainer"),
						c = a.container.documentRef.getElementById("actionsContainer"),
						d = a.container.documentRef.getElementById("emoji-selection-container"),
						g = b.viewHandler.ifScrollbarDown(),
						h = s.mobileBrowserName ? 18 : 20,
						k = a.container.documentRef.getElementById(b.viewHandler.bottomContainerName),
						l = e.split(/\r\n|\r|\n/).length || 1,
						m = l * h;
					1 === l && a.chatTextarea.elementReferrer.scrollHeight > a.chatTextarea.elementReferrer.clientHeight &&
						(m = a.chatTextarea.elementReferrer.scrollHeight);
					e && m >= h ? (m = 150 < m ? 150 : m, this.isActionsContainerNotifShown && (m += 42, f.style.paddingBottom = "42px"), c.style.height = 46 + (m - h) + "px", g && b.viewHandler.scrollToBottom()) : c.style.height = "46px";
					d && (d.style.bottom = c.clientHeight + 2 + "px");
					k && (k.style.bottom = c.clientHeight + 2 + "px");
					clearTimeout(a.resizeThrottle)
				}, 100)
			};
			S.prototype.clearTextareaResize = function () {
				var a = this.container.documentRef.getElementById("actionsContainer"),
					e = this.container.documentRef.getElementById("emoji-selection-container"),
					f = this.container.documentRef.getElementById(b.viewHandler.bottomContainerName);
				a && (a.style.height = "46px");
				e && (e.style.bottom = "48px");
				f && (f.style.bottom = "")
			};
			S.prototype.toggleWebRTCActions = function () {
				if (this.inDocument) {
					var a = "none",
						b = "none",
						f = "none";
					c.webRTCSettings() && c.webRTCSettings().en && (a = c.webRTCSettings().v ? "inline-block" : "none", b = "inline-block", f = c.webRTCSettings().s ? "inline-block" : "none");
					this.container.documentRef.getElementById("videoCall").style.display = a;
					this.container.documentRef.getElementById("voiceCall").style.display =
						b;
					this.container.documentRef.getElementById("screenShare").style.display = f
				}
			};
			S.prototype.setChatGreetings = function (a) {
				var e, f = this.container.getElementById("greetingsText"),
					c = this.container.getElementById("greetingsContent");
				(e = r.pageStatus()) && (c && f) && (e = m.getLongMessage(e), a && !e ? (c.className += " no-content", c.style.display = "none") : (f.innerHTML = e.replace(l.regLineBreaks, l.br), 1 > b.agents.agentsCount && (c.style.display = "block"), a || (c.className = c.className.replace(" minimize", ""))))
			};
			S.prototype.toggleMobileSubmitButton =
				function (a) {
					var b = this.container.getElementById("actionsContainer");
					a && "mobile-typing" !== b.className ? b.className = "mobile-typing" : a || "mobile-typing" !== b.className || (b.className = "")
				};
			var ja = S.extend({
				init: function () {
					var a = this;
					this._super.apply(this, arguments);
					b.eventEmitter.on("formClosed", function () {
						var e = a.container.getElementById("chatPanel");
						if (e)
							if (c.showPreChatForm && !r.prechatFormSubmitted()) b.formHandler.openForm("preChatForm");
							else if (a.setChatGreetings(!0), e.style.display = "block", a.wrapper.removeClass("noMenu"),
							b.viewHandler.checkSeenMessageViewport(), !s.mobileBrowserName && a.container.getElementById("chatTextarea") && "max" === r.chatWindowState() && b.viewHandler.userAction) {
							var f = l.getDocument(l.getDocument(d).getElementById(a.container.elementId));
							if (f && f.getElementById("chatTextarea")) try {
								setTimeout(function () {
									f.getElementById("chatTextarea").focus()
								}, 0)
							} catch (g) {}
						}
					});
					b.eventEmitter.on("formOpened", function () {
						a.container && a.container.getElementById("chatPanel") && ("preChatForm" !== b.formHandler.currentForm &&
							"offlineForm" !== b.formHandler.currentForm && "consentForm" !== b.formHandler.currentForm || a.wrapper.addClass("noMenu"), a.container.getElementById("chatPanel").style.display = "none")
					});
					b.eventEmitter.on("localeChanged", function () {
						a.insertText();
						a.setLinkTitle();
						a.toggleSound()
					})
				},
				buildView: function () {
					this._super(this);
					this.setLinkTitle();
					this.insertText();
					this.wrapper && this.wrapper.addClass(l.getContrast(c.headerTxtColor));
					this.attachEvents()
				},
				insertText: function () {
					var a;
					if (this.container) {
						this.container.getElementById("tawkContent").innerHTML =
							b.languageParser.translate("overlay", "tawkContent");
						this.container.getElementById("cancelTawkRedirect").innerHTML = b.languageParser.translate("form", "CancelButton");
						this.container.getElementById("tawkRedirect").innerHTML = b.languageParser.translate("form", "visitButton");
						this.container.getElementById("maxFileNotificationMessage").innerHTML = b.languageParser.translate("notifications", "maximum_file_upload_warning", {
							strongStart: "<strong>",
							strongEnd: "</strong>",
							limitFileNumber: "5"
						});
						this.container.getElementById("maxSizeNotificationMessage").innerHTML =
							b.languageParser.translate("notifications", "maximum_size_upload_warning", {
								strongStart: "<strong>",
								strongEnd: "</strong>",
								limitFileSize: "50mb"
							});
						this.container.getElementById("emailTranscriptOption").innerHTML = b.languageParser.translate("menu", "email_transcript");
						this.container.getElementById("changeName").innerHTML = b.languageParser.translate("menu", "change_name");
						this.container.getElementById("soundOn").innerHTML = b.languageParser.translate("menu", "sound_on");
						this.container.getElementById("soundOff").innerHTML =
							b.languageParser.translate("menu", "sound_off");
						this.container.getElementById("maxSizeNotifLabel").innerHTML = b.languageParser.translate("chat", "Warning");
						this.container.getElementById("maxFileNotifLabel").innerHTML = b.languageParser.translate("chat", "Warning");
						this.container.getElementById("endChat").innerHTML = b.languageParser.translate("menu", "end_chat_session");
						c.isEmbedded || c.isPopup || (this.container.getElementById("popoutChat").innerHTML = b.languageParser.translate("menu", "popout_widget"));
						a = l.getElementsByClassName(this.container.getElementById("chatContainer"),
							"closeNotification");
						for (var e = 0; e < a.length; e++) a[e].innerHTML = b.languageParser.translate("form", "CloseButton");
						(a = this.container.getElementById("uploadFileOption")) && (l.isFileInputSupported ? a.setAttribute("title", b.languageParser.translate("rollover", "uploadFile")) : a.parentNode.removeChild(a))
					}
				},
				attachEvents: function () {
					var a = this,
						e = a.container.getElementById("tawkToContent");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						c.whiteLabel() || (c.brandingRedirect() ? d.open("https://ref.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" +
							L.pageId) : e.style.display = "block")
					}, b.viewHandler.tawktoLinkName, "tawktoclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						e.style.display = "none"
					}, "cancelTawkRedirect", "cancelTawkRedirectclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						e.style.display = "none";
						d.open("https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + L.pageId)
					}, "tawkRedirect", "tawkRedirectClicn");
					this.container.attachUserEventListener(b.viewHandler.clickEvent,
						function (a) {
							b.formHandler.openForm("emailTranscriptForm");
							b.eventHandler.cancelEvent(a)
						}, "emailTranscriptOption", "emailclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (e) {
						"preChatForm" !== b.formHandler.currentForm && "offlineForm" !== b.formHandler.currentForm && "consentForm" !== b.formHandler.currentForm && b.chatHandler.isVisitorEngaged() ? (b.formHandler.openForm("endChatForm"), b.eventHandler.cancelEvent(e)) : (b.eventHandler.cancelEvent(e), b.sessionHandler.notifyWindowState("min"));
						a.closeMenu()
					}, "endChat", "endChatclick");
					this._super(this)
				}
			});
			ja.prototype.closeMenu = function () {
				this.chatMenuOpen && (this.chatMenuOpen = !1, this.container.getElementById("chatMenuControls").style.display = "none", this.container.getElementById("chatMenu").className = "")
			};
			ja.prototype.setLinkTitle = function () {
				this.container && (this.container.getElementById("ratePositive").setAttribute("title", b.languageParser.translate("rollover", "positiveRating")), this.container.getElementById("rateNegative").setAttribute("title",
					b.languageParser.translate("rollover", "negativeRating")), this.container.getElementById("screenShare").setAttribute("title", b.languageParser.translate("rollover", "screenShare")), this.container.getElementById("voiceCall").setAttribute("title", b.languageParser.translate("rollover", "voiceCall")), this.container.getElementById("videoCall").setAttribute("title", b.languageParser.translate("rollover", "videoCall")), this.container.getElementById("chatMenu").setAttribute("title", b.languageParser.translate("rollover",
					"chatMenu")), this.container.getElementById("viewEmoji").setAttribute("title", b.languageParser.translate("chat", "insert_emoji")), c.isEmbedded || this.container.getElementById("minimizeChat").setAttribute("title", b.languageParser.translate("form", "CloseButton")))
			};
			ja.prototype.chatEnded = function () {
				b.formHandler.openForm("restartChatForm")
			};
			ja.prototype.chatStarted = function () {
				var a = this.container.getElementById("chatEnded"),
					b = this.container.getElementById("chatContainerWrapper"),
					f = this.container.getElementById("agentList"),
					c = this.container.getElementById("options");
				a && a.parentNode.removeChild(a);
				f && (f.innerHTML = "");
				b && (b.className = b.className.replace("chat-ended", ""));
				c && (c.style.display = "block")
			};
			var F = y.extend({
				init: function () {
					var a = this;
					this._super(this);
					this.startY = this.startX = 0;
					this.iframeXOffsetPosition = c.widgetOffsetX;
					this.iframeYOffsetPosition = c.widgetOffsetY;
					this.isMaximized = this.isWidgetAnimating = this.userAction = this.isWidgetPositionsUpdated = !1;
					this.overlayElement = new D(null, l.getGenericStyle({
						left: "0px",
						top: "0px",
						zindex: "1000001",
						cursor: "move",
						width: "100%",
						height: "100%",
						display: "none",
						"float": "left"
					}));
					this.iframeContainerName = l.getRandomName();
					this.iframeContainer = new D(this.iframeContainerName);
					this.resizeFromLeft = new D(l.getRandomName(), l.getGenericStyle({
						height: "100%",
						left: "0px",
						top: "0px",
						zindex: "999998",
						cursor: "w-resize",
						width: "6px"
					}));
					this.resizeFromRight = new D(l.getRandomName(), l.getGenericStyle({
						height: "100%",
						width: "6px",
						right: "0px",
						top: "0px",
						zindex: "999998",
						cursor: "e-resize"
					}));
					this.resizeFromTop =
						new D(l.getRandomName(), l.getGenericStyle({
							height: "6px",
							width: "100%",
							right: "0px",
							top: "0px",
							zindex: "999998",
							cursor: "n-resize"
						}));
					this.resizeFromBottom = new D(l.getRandomName(), l.getGenericStyle({
						height: "6px",
						width: "100%",
						right: "0px",
						bottom: "0px",
						zindex: "999998",
						cursor: "s-resize"
					}));
					this.resizeTopLeft = new D(l.getRandomName(), l.getGenericStyle({
						height: "12px",
						width: "12px",
						left: "0px",
						top: "0px",
						zindex: "999998",
						cursor: "nw-resize"
					}));
					this.resizeTopRight = new D(l.getRandomName(), l.getGenericStyle({
						height: "12px",
						width: "12px",
						right: "0px",
						top: "0px",
						zindex: "999998",
						cursor: "ne-resize"
					}));
					this.resizeBottomLeft = new D(l.getRandomName(), l.getGenericStyle({
						height: "12px",
						width: "12px",
						bottom: "0px",
						left: "0px",
						zindex: "999998",
						cursor: "sw-resize"
					}));
					this.resizeBottomRight = new D(l.getRandomName(), l.getGenericStyle({
						height: "12px",
						width: "12px",
						bottom: "0px",
						right: "0px",
						zindex: "999999",
						cursor: "se-resize"
					}));
					g = new ja(this.tawktoLinkName, this.bottomContainerName);
					this.iframeContainer.addChildViews([g.container]);
					if (!c.isPopup &&
						!c.isEmbedded) {
						p = new Aa;
						var e = [p.container, p.chatIndicator, p.bubbleContainer, this.overlayElement],
							f;
						c.isDesktopRectangle() ? f = [this.resizeFromLeft, this.resizeFromRight, this.resizeFromTop, this.resizeFromBottom, this.resizeTopLeft, this.resizeTopRight, this.resizeBottomLeft, this.resizeBottomRight] : (f = [], c.isRightPositioned() ? f.push(this.resizeFromLeft) : f.push(this.resizeFromRight), c.isCenterPositioned() ? (f = f.concat([this.resizeFromBottom, this.resizeFromTop]), f = c.isRightPositioned() ? f.concat([this.resizeTopLeft,
							this.resizeBottomLeft
						]) : f.concat([this.resizeTopRight, this.resizeBottomRight])) : c.isTopPositioned() ? (f.push(this.resizeFromBottom), c.isRightPositioned() ? f.push(this.resizeBottomLeft) : f.push(this.resizeBottomRight)) : (f.push(this.resizeFromTop), c.isRightPositioned() ? f.push(this.resizeTopLeft) : f.push(this.resizeTopRight)));
						this.iframeContainer.addChildViews(e.concat(f))
					}
					this.indicator = new ia(p ? p.chatIndicator : null);
					this.chatContainer = g.container;
					this.iframeContainer.buildView();
					this.insertFrameStyle();
					r.pageStatus.subscribe(function (b) {
						a.updateViewByStatus(b)
					});
					v.rating.subscribe(function (b) {
						a.changeRating(b)
					});
					c.isPopup || c.isEmbedded || r.chatWindowState.subscribe(function (b) {
						"max" === b ? a.maximizeWidget() : a.minimizeWidget()
					});
					c.minStyle.subscribe(function () {
						p && p.container.elementReferrer && (p.container.insertCssFile(c.minStyle(), !0), p.container.documentRef.getElementById("tawkchat-minified-wrapper").className = l.getContrast(c.headerTxtColor))
					});
					c.maxStyle.subscribe(function () {
						g && g.container.elementReferrer &&
							(g.container.insertCssFile(c.maxStyle(), !0), g.wrapper.removeClass("black"), g.wrapper.removeClass("white"), g.wrapper.addClass(l.getContrast(c.headerTxtColor)))
					});
					c.minimizedDimensions.subscribe(function () {
						var b = a.calculateWidgetPosition();
						a.iframeContainer.restyle("top", b.top);
						a.iframeContainer.restyle("bottom", b.bottom);
						a.iframeContainer.restyle("right", b.right);
						a.iframeContainer.restyle("left", b.left)
					});
					this.initialDocumentClick = b.eventHandler.listen(document, "click", function () {
						b.audioPlayer.initAudioPlayer();
						b.eventHandler.removeEventHandler(document, "click", a.initialDocumentClick)
					}, "documentinitialclick")
				},
				insertFrameStyle: function () {
					var a, b, f, d = "";
					f = this.calculateWidgetPosition();
					f = l.getGenericStyle({
						display: "none",
						bottom: f.bottom,
						top: f.top,
						right: f.right,
						left: f.left,
						minwidth: "0",
						minheight: "0",
						zindex: s.isIE && 9 > s.version ? "none" : "2000000000",
						position: "fixed"
					});
					c.isTopPositioned() ? (a = "transform:translate(0, -30px);", b = "transform:translate(0, 0px);") : c.isCenterPositioned() ? (a = c.isRightPositioned() ? "transform:translate(30px,0);" :
						"transform:translate(-30px,0);", b = "transform:translate(0px,0);") : (a = "transform:translate(0, 30px);", b = "transform:translate(0, 0px);");
					a = "{0%{opacity:0;" + a + ";}to{opacity:1;" + b + "}}";
					d = d + ("@keyframes tawkMaxOpen" + a) + ("@-moz-keyframes tawkMaxOpen" + a);
					d += "@-webkit-keyframes tawkMaxOpen" + a;
					d += "#" + this.iframeContainerName + "{" + f + "}";
					d += "#" + g.container.elementId + ".open{animation : tawkMaxOpen .25s ease!important;}";
					this.iframeContainer.insertCssFile(d, !0)
				},
				show: function () {
					g.hide();
					c.isEmbedded || c.isPopup ?
						(this.iframeContainer.restyle("position", "static"), this.iframeContainer.restyle("right", ""), this.iframeContainer.restyle("left", ""), this.iframeContainer.restyle("width", "100%"), this.iframeContainer.restyle("height", "100%"), g.show()) : (this.isWidgetPositionsUpdated = !0, this.indicator.initIndicator(), b.main.maximize ? this.maximizeWidget() : this.minimizeWidget());
					this.updateViewByStatus(r.pageStatus());
					this._super()
				}
			});
			F.prototype.calculateWidgetPosition = function () {
				var a, b, f = Math.max((document.documentElement.clientHeight,
						d.innerHeight || 0) / 2) - c.maximizedDimensions().height / 2,
					g = {};
				c.isDesktopRectangle() ? (a = 0, b = c.widgetOffsetX) : (b = 10, a = c.minimizedDimensions().height + c.widgetOffsetX + 10, b = c.isCenterPositioned() ? c.minimizedDimensions().width + c.widgetOffsetX + b : b);
				c.isTopPositioned() ? (g.bottom = "auto", g.top = a + "px") : (c.isCenterPositioned() ? g.bottom = c.isDesktopRectangle() ? "0px" : f + "px" : g.bottom = a + "px", g.top = "auto");
				c.isRightPositioned() ? (g.right = b + "px", g.left = "auto") : (g.right = "auto", g.left = b + "px");
				return g
			};
			F.prototype.maximizeWidget =
				function () {
					var a = null,
						e = null;
					p && (a = p.container.getElementById("minimizeChatMinifiedBtn"), e = p.container.getElementById("maximizeChat"));
					this.messagePreview && this.messagePreview.hide();
					if ("max" !== c.onClickAction) return this.popoutWidget();
					c.hideWidgetOnOffline && "offline" === r.pageStatus() && b.formHandler.openForm(c.showConsentForm ? "consentForm" : "offlineForm");
					(c.hideWidgetOnLoad || c.hideWidgetOnOffline) && this.showWidget();
					g.show();
					p && p.container && (c.isDesktopRectangle() ? p.hide() : (p.shown || p.show(), a &&
						e && (l.removeClass(e, "appear"), l.addClass(e, "hide"), l.removeClass(a, "hide"), l.addClass(a, "appear")), p.hideBubble(), l.addClass(p.container.getElementById("tawkchat-minified-box"), "open")));
					this.isMaximized = !0;
					k.triggerApiHandlers("onChatMaximized");
					b.viewHandler.scrollToFirstUnseen();
					if (!s.mobileBrowserName && this.chatContainer.getElementById("chatTextarea") && "max" === r.chatWindowState() && !b.formHandler.currentForm && b.viewHandler.userAction) {
						var f = l.getDocument(l.getDocument(d).getElementById(g.container.elementId));
						if (f && f.getElementById("chatTextarea")) try {
							setTimeout(function () {
								f.getElementById("chatTextarea").focus();
								b.viewHandler.userAction = !1
							}, 0)
						} catch (n) {}
					}
					g.container.addClass("open")
				};
			F.prototype.minimizeWidget = function () {
				var a, b = null,
					f = null;
				if (!c.isPopup && !c.isEmbedded) {
					g.hide();
					this.isMaximized = !1;
					if (c.hideWidgetOnLoad) return this.hideWidget();
					p && (b = p.container.getElementById("minimizeChatMinifiedBtn"), f = p.container.getElementById("maximizeChat"), a = p.container.getElementById("tawkchat-minified-box"));
					b && f && (l.removeClass(f, "hide"), l.addClass(f, "appear"), l.removeClass(b, "appear"), l.addClass(b, "hide"), l.removeClass(a, "open"));
					p.show();
					k.triggerApiHandlers("onChatMinimized");
					this.indicator.initIndicator()
				}
			};
			F.prototype.popoutWidget = function () {
				var a = "https://tawk.to/chat/" + L.pageId + "/";
				this.indicator.hide();
				r.chatWindowState("min");
				this.popoutWin && !this.popoutWin.closed && this.popoutWin.focus ? this.popoutWin.focus() : (c.whiteLabel() && c.whiteLabel().chatUrl && (a = c.whiteLabel().chatUrl + "/chat/"), this.popoutWin =
					d.open(a + $_Tawk_WidgetId + "?$_tawk_sk=" + r.sessionKey + "&$_tawk_tk=" + r.transferKey + "&v=" + r.serverVersion, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no"))
			};
			F.prototype.toggleWidget = function () {
				var a = r.chatWindowState();
				r.chatWindowState("min" === a ? "max" : "min")
			};
			F.prototype.removeBubble = function () {
				try {
					b.eventEmitter.emit("notifyBubbleClosed")
				} catch (a) {
					q.handleError("Unable to emit notifyBubbleClosed", a.fileName, a.lineNumber, a.stack)
				}
			};
			F.prototype.insertPopupStyle =
				function () {
					var a = document.getElementsByTagName("head")[0],
						e = document.createDocumentFragment(),
						f = l.createElement(document, "style", {
							type: "text/css"
						}),
						d;
					d = document.createTextNode(b.ResetStyle + "" + b.MaximizedStyle + c.maxStyle());
					f.styleSheet ? f.styleSheet.cssText = d.nodeValue : f.appendChild(d);
					e.appendChild(f);
					a.appendChild(e);
					document.body.className = "popup"
				};
			F.prototype.begin = function () {
				var a = this,
					e = document.getElementById(k.embedded),
					f;
				b.main.started || (this.iframeContainer && (f = document.getElementById(this.iframeContainer.elementId)),
					f && f.parentNode.removeChild(f), c.isEmbedded && e ? (e.appendChild(this.iframeContainer.elementReferrer), b.eventHandler.listen(d, "resize", function () {
						a.onEmbeddedWindowResize()
					}, "windowresize")) : (document.body.appendChild(this.iframeContainer.elementReferrer), c.isPopup ? this.insertPopupStyle() : (p.buildView(), this.resizeFromLeft.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, "left")
					}, null, "resizeLeftfocus"), this.resizeFromRight.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b,
							"right")
					}, null, "resizeRightfocus"), this.resizeFromTop.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, null, "top")
					}, null, "resizeTopfocus"), this.resizeFromBottom.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, null, "bottom")
					}, null, "resizeBottomfocus"), this.resizeTopLeft.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, "left", "top")
					}, null, "resizeTopLeftfocus"), this.resizeTopRight.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b,
							"right", "top")
					}, null, "resizeTopRightfocus"), this.resizeBottomLeft.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, "left", "bottom")
					}, null, "resizeBottomLeftfocus"), this.resizeBottomRight.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, "right", "bottom")
					}, null, "resizeBottomRightfocus"), b.eventHandler.listen(d, "resize", function () {
						a.onWindowResize()
					}, "windowresize"))), g.buildView())
			};
			F.prototype.hideWidget = function () {
				this.iframeContainer.hide();
				k.triggerApiHandlers("onChatHidden")
			};
			F.prototype.adjustEmojiContainerHeight = function () {
				var a = this.chatContainer.documentRef.getElementById("emoji-selection-container"),
					b = this.chatContainer.documentRef.getElementById("innerWrapper"),
					f = this.chatContainer.documentRef.getElementById("textareaWrapper"),
					c = this.chatContainer.documentRef.getElementById("headerBoxWrapper"),
					b = b.clientHeight - f.clientHeight - c.clientHeight;
				185 > b && (a.style.height = b + "px")
			};
			F.prototype.showWidget = function () {
				this.iframeContainer.isVisible || this.iframeContainer.show()
			};
			F.prototype.toggleVisibility = function () {
				this.iframeContainer.toggle()
			};
			F.prototype.isWidgetHidden = function () {
				return !this.iframeContainer.isVisible
			};
			F.prototype.onHeaderMouseUp = function () {
				this.overlayElement.restyle("display", "none !important");
				this.resetFrameDimensions();
				this.isResized && (this.isResized = !1, b.socketManager.sendToConnector("notifyWidgetResized"));
				b.eventHandler.removeEventHandler(document, "mousemove", this.mouseMovehandler);
				b.eventHandler.removeEventHandler(document, "mouseup", this.mouseUpHandler)
			};
			F.prototype.onHeaderMouseDown = function (a, e, f) {
				var c = this,
					h = b.eventHandler.getTargetElement(a);
				h.id !== this.resizeFromLeft.elementId && h.id !== this.resizeFromRight.elementId && h.id !== this.resizeFromTop.elementId && h.id !== this.resizeFromBottom.elementId && h.id !== this.resizeTopLeft.elementId && h.id !== this.resizeBottomLeft.elementId && h.id !== this.resizeTopRight.elementId && h.id !== this.resizeBottomRight.elementId || (1 === a.button && !d.event && !g.documentRef.event || 1 < a.button) || (b.eventHandler.cancelEvent(a), this.overlayElement.restyle("display",
					"block !important"), a = this.getActualViewportDimensions(), this.actualViewPortWidth = a.width, this.actualViewPortHeight = a.height, this.startOffsetY = this.startOffsetX = 0, this.mouseMovehandler = b.eventHandler.listen(document, "mousemove", function (a) {
					c.setResizedDimensions(a, e, f);
					c.isResized = !0;
					c.redrawIE()
				}, "dragmove"), this.mouseUpHandler = b.eventHandler.listen(document, "mouseup", function (a) {
					c.onHeaderMouseUp(a)
				}, "dragleave"))
			};
			F.prototype.redrawIE = function () {
				"explorer" === s.vendor && (this.iframeContainer.restyle("visibility",
					"hidden !important"), this.iframeContainer.restyle("visibility", "visible !important"))
			};
			F.prototype.setResizedDimensions = function (a, e, f) {
				var d, g = this.iframeContainer.elementReferrer,
					h = this.ifScrollbarDown();
				this.isRight && "undefined" !== typeof this.isRight || (this.isRight = c.isRightPositioned());
				this.startX = a.clientX;
				this.startY = a.clientY;
				if (e) {
					d = this.isRight ? "right" : "left";
					var k = parseInt(l.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
						m = parseInt(l.computedStyle(g, d).replace("px",
							""), 10),
						p = this.isRight ? this.actualViewPortWidth - a.clientX : a.clientX,
						p = 0 > p ? 0 : p;
					this.isRight && "right" === e || !this.isRight && "left" === e ? (e = k - (p - m), 280 > e ? e = 280 : (p > this.actualViewPortWidth - e - 1 && (p = this.actualViewPortWidth - e - 1), g.style.cssText += ";" + d + ":" + p + "px !important", this.startOffsetX = e)) : this.startOffsetX = e = this.isRight ? this.actualViewPortWidth - a.clientX - m : a.clientX - m;
					280 <= e && 0 < this.actualViewPortWidth - (e + parseInt(l.computedStyle(g, d).replace("px", ""), 10)) && this.setWidth(e)
				}
				f && ("bottom" === f ? (f = parseInt(g.style.bottom.replace("px",
						"")), a = this.actualViewPortHeight - a.clientY, 0 > a && (a = 0), f = parseInt(l.computedStyle(this.chatContainer.elementReferrer, "height").replace("px", ""), 10) - (a - f), 330 > f ? f = 330 : (a > this.actualViewPortHeight - f - 1 && (a = this.actualViewPortHeight - f - 1), g.style.cssText += ";bottom:" + a + "px !important", this.startOffsetY = f)) : (startOffsetY = parseInt(l.computedStyle(g, "bottom").replace("px", ""), 10), f = this.actualViewPortHeight - a.clientY - startOffsetY, this.startOffsetY = this.startY - startOffsetY), 330 <= f && 0 < this.actualViewPortHeight -
					(f + parseInt(l.computedStyle(g, "bottom").replace("px", ""), 10)) && this.setHeight(f), b.viewHandler.adjustEmojiContainerHeight());
				h && this.scrollToBottom();
				b && b.formHandler && b.formHandler.resize()
			};
			F.prototype.setChatWindowXPosition = function (a) {
				var b, f, d = parseInt(g.frameWidth.replace("px", ""), 10);
				"undefined" === typeof this.isRight && (this.isRight = c.isRightPositioned());
				this.isRight ? (b = "right", f = parseInt(this.iframeContainer.elementReferrer.style.right, 10)) : (b = "left", f = -parseInt(this.iframeContainer.elementReferrer.style.left,
					10));
				this.startOffsetX || (this.startOffsetX = a + f);
				a = this.isRight ? this.startOffsetX - a : a - this.startOffsetX;
				20 > a ? a = 0 : 20 > this.actualViewPortWidth - (a + d) && (a = this.actualViewPortWidth - d);
				this.iframeContainer.restyle(b, a + "px !important")
			};
			F.prototype.setChatWindowYPosition = function (a) {
				var b, f, c = parseInt(g.frameHeight.replace("px", ""), 10);
				"auto" === this.iframeContainer.elementReferrer.style.bottom ? (styleKey = "top", b = -parseInt(this.iframeContainer.elementReferrer.style.top, 10), f = !1) : (styleKey = "bottom", b = parseInt(this.iframeContainer.elementReferrer.style.bottom,
					10), f = !0);
				this.startOffsetY || (this.startOffsetY = a + b);
				a = f ? this.startOffsetY - a : a - this.startOffsetY;
				20 > a ? a = 0 : 20 > this.actualViewPortHeight - (a + c) && (a = this.actualViewPortHeight - c);
				this.iframeContainer.restyle(styleKey, a + "px !important")
			};
			F.prototype.onWindowResize = function () {
				var a = this;
				clearTimeout(this.resizeTimeout);
				this.wasScrollbarDown = this.ifScrollbarDown();
				this.resizeTimeout = setTimeout(function () {
					a.onWindowResizeTimeout()
				}, 100)
			};
			F.prototype.onWindowResizeTimeout = function () {
				var a = this.getActualViewportDimensions(),
					b = a.width,
					a = a.height,
					f = this.iframeContainer.elementReferrer,
					c = this.isBottom ? parseInt(f.style.bottom.replace("px", ""), 10) : parseInt(f.style.top.replace("px", ""), 10),
					d = this.isRight ? parseInt(f.style.right.replace("px", ""), 10) : parseInt(f.style.left.replace("px", ""), 10),
					h = parseInt(g.frameWidth.replace("px", ""), 10),
					k = parseInt(g.frameHeight.replace("px", ""), 10);
				h + d > b && (d = b - h, 0 > d && (h += d, d = 0, this.setWidth(h)), this.isRight ? f.style.right = d + "px" : f.style.left = d + "px");
				k + c > a && (c = a - k, 0 > c && (k += c, c = 0, this.setHeight(k)),
					this.isBottom ? f.style.bottom = c + "px" : f.style.top = c + "px");
				this.wasScrollbarDown && this.scrollToBottom();
				this.resetFrameDimensions()
			};
			F.prototype.setWidth = function (a) {
				if (!a || 300 > a) a = 300;
				this.chatContainer.restyle("width", a + "px !important")
			};
			F.prototype.setHeight = function (a) {
				if (!a || 350 > a) a = 350;
				this.chatContainer.restyle("height", a + "px !important")
			};
			F.prototype.onEmbeddedWindowResize = function () {
				null === this.isWidgetElementDimensionsNull && this.setWidgetElementDimensions();
				this.isWidgetElementDimensionsNull ?
					(this.setWidth(c.maximizedDimensions().width), this.setHeight(c.maximizedDimensions().height)) : (this.chatContainer.restyle("width", "100%"), this.chatContainer.restyle("height", "100%"))
			};
			F.prototype.setWidgetElementDimensions = function () {
				var a = document.getElementById(k.embedded);
				this.isWidgetElementDimensionsNull = 280 > a.clientWidth || 330 > a.clientHeight ? !0 : !1
			};
			F.prototype.resetFrameDimensions = function () {
				var a = parseInt(l.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
					b = parseInt(l.computedStyle(this.chatContainer.elementReferrer,
						"height").replace("px", ""), 10);
				g.frameWidth = a + "px";
				g.frameHeight = b + "px"
			};
			F.prototype.isWidgetElementDimensionsNull = null;
			F.prototype.styleAgentBar = function () {
				var a, e = this.chatContainer;
				if (e) {
					a = e.getElementById("agentWrapper");
					try {
						0 < b.agents.agentsCount ? (e.getElementById("headerAccountStateContainer").style.display = "none", a.style.display = "block") : (e.getElementById("headerAccountStateContainer").style.display = "block", a.style.display = "none")
					} catch (f) {
						q.handleError("headerAccountStateContainer is null",
							f.fileName, f.lineNumber, f.stack)
					}
				}
			};
			F.prototype.expandAgentList = function (a) {
				var b, f;
				if (f = this.chatContainer) b = f.getElementById("agentBar"), f = f.getElementById("expandableLink"), 1 === a.button && !d.event || 1 < a.button || (-1 === b.className.indexOf("expanded") ? (b.className += " expanded", f.className = "expanded") : (b.className = b.className.replace("expanded", ""), f.className = ""), this.styleAgentBar())
			};
			F.prototype.resetView = function () {
				var a, b, f, c, d;
				if (c = this.chatContainer) a = c.getElementById("chatWrapper"), f = c.getElementById("agentList"),
					d = c.getElementById("agentBar"), c = c.getElementById("expandableLink"), a && (b = a.lastChild, a.innerHTML = "", a.appendChild(b)), f && (f.innerHTML = ""), d && (a = d.parentNode.childNodes[0], d.className = "", a && -1 !== a.className.indexOf("agentWrapper") && a.parentNode.removeChild(a)), c && (c.style.visibility = "hidden", c.className = ""), this.show()
			};
			F.prototype.handleIndicatorToggle = function () {
				var a;
				p && (p.container && p.chatIndicator) && (a = p.chatIndicator.getElementById("tawkchat-chat-indicator"), a.style.visibility = "visible")
			};
			var cb =
				F.extend({
					init: function () {
						this._super(this)
					},
					changeDragElementSize: function (a) {
						this.dragElement.restyle(c.isRTL() ? "right" : "left", a + "px !important")
					},
					handleEndChat: function () {
						p && p.container && p.chatEnded();
						b.viewHandler.clearAgentHeader();
						c.isEmbedded || (c.isPopup ? (b.socketManager.sendToConnector("popupOnFocus", !1), setTimeout(function () {
							1 < d.history.length ? d.history.back() : d.close()
						}, 200)) : (b.sessionHandler.notifyWindowState("min"), g.chatEnded()))
					},
					handleRestartChat: function () {
						b.formHandler.closeForm();
						g.chatStarted()
					}
				}),
				ca = function () {
					var a = this,
						e = {
							width: a.minifiedBoxWidth + "px",
							height: a.minifiedBoxHeight + "px",
							minwidth: a.minifiedBoxWidth + "px",
							minheight: a.minifiedBoxHeight + "px",
							maxwidth: a.minifiedBoxWidth + "px",
							maxheight: a.minifiedBoxHeight + "px",
							zindex: "1000000",
							display: "none"
						};
					this.setDimensions();
					this.clickToPopout = this.setPopoutHref = this.isMoving = !1;
					this.offsetY = c.widgetOffsetY;
					this.clickEvent = "touchend";
					c.isCenterPositioned() && "rectangle" === c.mobileWidget() && (c.isRightPositioned() ? (e.transform =
						"rotate(-90deg)", e.right = "0px") : (e.left = "0px", e.transform = "rotate(90deg)"));
					this.container = new N(l.getRandomName(), l.getGenericStyle(e), Y, "iframe");
					r.pageStatus.subscribe(function (b) {
						a.updateStatus(b)
					});
					c.chatPosition.subscribe(function () {
						a.updateWidgetPosition()
					});
					c.mobMinStyle.subscribe(function () {
						a.container && a.container.elementReferrer && a.container.insertCssFile(c.mobMinStyle(), !0)
					});
					c.showMessagePreview.subscribe(function () {
						c.showMessagePreview() ? a.initMessagePreviewContainer() : a.destroyMessagePreviewContainer()
					});
					b.eventEmitter.on("localeChanged", function () {
						a.updateStatus()
					})
				};
			ca.prototype.setDimensions = function () {
				"rectangle" === c.mobileWidget() ? (this.minifiedBoxWidth = 110, this.minifiedBoxHeight = 68) : this.minifiedBoxHeight = this.minifiedBoxWidth = 60
			};
			ca.prototype.buildView = function () {
				this.container.buildIframe(b.MinifiedMobileStyle + c.mobMinStyle());
				b.MinifiedMobileStyle = b.MinifiedMobileStyle.replace(/#tawktoLink/g, "#" + b.viewHandler.tawktoLinkName);
				b.MinifiedMobileStyle = b.MinifiedMobileStyle.replace(/#bottomContainer/g,
					"#" + b.viewHandler.bottomContainerName);
				c.showMessagePreview() ? this.initMessagePreviewContainer() : this.destroyMessagePreviewContainer();
				c.isRTL() && (this.container.getElementById("tawkchat-minified-box").className += " rtl-direction ");
				this.updateStatus();
				this.attachEvents();
				this.updateWidgetPosition()
			};
			ca.prototype.updateStatus = function (a) {
				var e;
				a || (a = r.pageStatus());
				if (this.container && a) {
					if (e = this.container.getElementById("tawkchat-status-icon")) e.className = a;
					if (e = this.container.getElementById("tawk-minified-mobile-text")) e.innerHTML =
						"online" === a || "away" === a ? b.languageParser.translate("chat", "chat_text") : b.languageParser.translate("form", "message");
					try {
						b.eventEmitter.emit("resizeIframeHeight")
					} catch (f) {
						q.handleError("Unable to emit resizeIframeHeight", f.fileName, f.lineNumber, f.stack)
					}
				}
			};
			ca.prototype.attachEvents = function () {
				var a = this;
				this.container.attachUserEventListener(b.viewHandler.clickEvent, function (e) {
					b.eventHandler.cancelEvent(e);
					a.isMoving || (b.sessionHandler.notifyWindowState("max"), b.viewHandler.checkSeenMessageViewport());
					a.isMoving = !1
				}, "tawkchat-minified-box", "mobpclick");
				this.container.attachUserEventListener("touchmove", function () {
					a.isMoving = !0
				}, "tawkchat-minified-box", "mobpmove")
			};
			ca.prototype.show = function () {
				this.container.restyle("display", "block")
			};
			ca.prototype.updateWidgetPosition = function () {
				var a = "";
				this.container && this.container.elementReferrer && (a = c.isCenterPositioned() ? a + " center " : c.isTopPositioned() ? a + " top " : a + " bottom ", a = c.isRightPositioned() ? a + " right " : a + " left ", a += " " + c.mobileWidget() + " ", this.container.documentRef.body.className =
					a)
			};
			ca.prototype.initMessagePreviewContainer = function () {
				var a, e;
				a = b.viewHandler.iframeContainer;
				this.messagePreview = new N(l.getRandomName(), l.getGenericStyle({
					zindex: "999999",
					width: "100%",
					height: "0px",
					minwidth: "auto",
					maxwidth: "378px",
					minheight: "auto",
					left: "auto",
					right: "auto",
					position: "fixed",
					display: "none",
					top: "auto",
					bottom: "auto"
				}), Y, "iframe");
				b.viewHandler.messagePreview = new E(this.messagePreview);
				this.messagePreview.elementReferrer || a.elementReferrer.appendChild(this.messagePreview.buildView(a.documentRef));
				this.messagePreview.buildIframe(b.MinifiedStyle + c.minStyle());
				a = l.getElementsByTagName(this.messagePreview.documentRef, "body")[0];
				e = t["tawkchat-message-preview"];
				e = e.replace(/__TAWK_TO_LINK__/gm, b.viewHandler.tawktoLinkName);
				e = e.replace(/__BOTTOM_CONTAINER__/gm, b.viewHandler.bottomContainerName);
				a.innerHTML = e
			};
			ca.prototype.destroyMessagePreviewContainer = function () {
				this.messagePreview && (this.messagePreview.documentRef && this.messagePreview.documentRef.parentNode) && this.messagePreview.documentRef.parentNode.removeChild(this.messagePreview.documentRef);
				this.messagePreview = null;
				b.viewHandler.messagePreview = null
			};
			var C = function (a) {
				var e = this;
				arguments.length && (this.browser = a, this.metaContent = this.getMetaContent(), this.landscape = !1, this.zoom = 1, this.resizeTimeout = this.hasKeyboard = this.minAndMaxScalesAreEqual = this.hasViewportHeightWidth = this.hasInitialScale = !1, this.removeAgentNotification = !0, this.clickEvent = "touchend", this.hasChatStarted = this.isMaximized = this.isBottomWidget = !1, this.originalDocumentStyle = null, this.isTherePreChat = c.showPreChatForm, this.noZoomMetaTag =
					null, this.isIndicatorOn = !1, this.scrollTop = this.scrollLeft = 0, this.mainAgent = null, this.shapeChanged(), this.minifiedWidget = new ca, g = new ja(this.tawktoLinkName, this.bottomContainerName), g.wrapper.addClass("mobile"), this.iframeContainer = new D(l.getRandomName(), "border: 0 none !important; padding: 0 !important; margin: 0 !important; z-index: 999999999 !important; overflow : visible !important; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important; width : auto !important; height : auto !important;"),
					this.indicator = new ia(this.minifiedWidget.container), this.iframeContainer.addChildViews([this.minifiedWidget.container, g.container]), "#max-widget" === d.location.hash && (d.history ? d.history.replaceState({}, document.title, ".") : d.location.hash = ""), this.iframeContainer.buildView(), this.chatContainer = g.container, b.eventEmitter.on("resizeIframeHeight", function () {
						e.resizeIframeHeight()
					}), b.eventEmitter.on("visitorPopupFocus", function (a) {
						e.isPopupFocused = a
					}), b.eventHandler.listen(d, "popstate", function (a) {
						!c.isPopup &&
							(e.isMaximized && "#max-widget" !== d.location.hash) && r.chatWindowState("min")
					}, "popstateFn"), r.chatWindowState.subscribe(function (a) {
						c.isPopup || (e.hideWidget(), "max" === a ? (k.disableMobileBackHistory || d.location.hash && "#max-widget" !== d.location.hash || (d.history.pushState ? d.history.pushState(null, null, d.location.href + "#max-widget") : d.location.hash = "max-widget"), e.maximize()) : (k.disableMobileBackHistory || "#max-widget" === d.location.hash && d.history.back(), e.isMaximized = !1, e.show()))
					}), r.pageStatus.subscribe(function (a) {
						e.updateViewByStatus(a)
					}),
					c.mobileWidget.subscribe(function () {
						e.renderBottomWidget();
						e.minifiedWidget.buildView()
					}), c.chatPosition.subscribe(function () {
						e.updateWidgetPosition()
					}), v.rating.subscribe(function (a) {
						e.changeRating(a)
					}), c.maxStyle.subscribe(function () {
						e.chatContainer && e.chatContainer.elementReferrer && e.chatContainer.insertCssFile(c.maxStyle(), !0)
					}), c.mobileWidget.subscribe(function (a) {
						e.shapeChanged();
						e.minifiedWidget.container.massRestyle({
							width: e.minifiedBoxWidth + "px !important",
							height: e.minifiedBoxHeight + "px !important",
							"min-width": e.minifiedBoxWidth + "px !important",
							"min-height": e.minifiedBoxHeight + "px !important",
							"max-width": e.minifiedBoxWidth + "px !important",
							"max-height": e.minifiedBoxHeight + "px !important"
						})
					}), b.chatHandler.hasChatStarted.subscribe(function (a) {
						g.toggleEndChatOption(a)
					}))
			};
			C.prototype = new y;
			C.prototype.constructor = C;
			C.prototype.parent = y.prototype;
			C.prototype.begin = function () {
				document.body.appendChild(this.iframeContainer.elementReferrer);
				if ("symbian" === this.browser || "ie" === this.browser || "opera" ===
					this.browser || "android2.3" === this.browser) this.clickEvent = "click";
				this.minifiedWidget.buildView();
				g.buildView();
				this.chatContainer = g.container;
				this.noZoomMetaTag = document.createElement("meta");
				this.noZoomMetaTag.name = "viewport";
				this.parent.begin.call(this);
				if (l.isTouchDevice() && ("android" === s.mobileBrowserName || "android2" === s.mobileBrowserName || "android2.3" === s.mobileBrowserName)) {
					var a = this.chatContainer.getElementById("chatContainer"),
						e = this.chatContainer.getElementById("menuScrollable");
					this.addOverflowScroll(a);
					this.addOverflowScroll(e);
					a.style.overflow = "hidden";
					e.style.overflow = "hidden"
				}
				b.audioPlayer.initAudioPlayer()
			};
			C.prototype.shapeChanged = function () {
				(this.isMinifiedRound = "round" === c.mobileWidget() ? !0 : !1) ? this.minifiedBoxHeight = this.minifiedBoxWidth = this.defaultHeight = this.defaultWidth = 60: (this.defaultWidth = 110, this.defaultHeight = 68, this.minifiedBoxWidth = 110, this.minifiedBoxHeight = 68)
			};
			C.prototype.handleEndChat = function () {
				g.chatEnded();
				this.chatContainer.hide();
				this.isMaximized = !1;
				this.iframeContainer.restyle("right",
					"0px");
				this.show()
			};
			C.prototype.show = function () {
				var a = document.querySelector("meta[name=viewport]") || document.querySelector("meta[name=VIEWPORT]");
				this.isMaximized ? (this.iframeContainer.massRestyle({
					left: "0px",
					top: "0px",
					right: "0px",
					bottom: "0px"
				}), this.isMobileOptimizedWebsite() || null === this.noZoomMetaTag || (this.metaContent || "" !== this.noZoomMetaTag.content ? this.metaContent && !this.hasNoScale && a && a.setAttribute("content", this.metaContent + ", user-scalable=no") : (this.noZoomMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
					this.noZoomMetaTag.parentNode || document.getElementsByTagName("head")[0].appendChild(this.noZoomMetaTag))), this.isVisibilityToggled || (this.iframeContainer.show(), this.chatContainer.show()), this.minifiedWidget.container.hide(), "max" !== r.chatWindowState() && b.sessionHandler.notifyWindowState("max"), b.viewHandler.newMessageNotSeen && setTimeout(function () {
					b.viewHandler.checkUnseenMessages()
				}, 0)) : (this.isMobileOptimizedWebsite() ? (this.getZoom(), this.renderMinifiedBox()) : this.metaContent && !this.hasNoScale ?
					a && a.setAttribute("content", this.metaContent) : this.noZoomMetaTag.parentNode && (this.noZoomMetaTag.content = "", document.getElementsByTagName("head")[0].removeChild(this.noZoomMetaTag)), l.blurElements(g.container.documentRef.body.getElementsByTagName("input")), l.blurElements(g.container.documentRef.body.getElementsByTagName("textarea")), this.isVisibilityToggled || (this.minifiedWidget.container.show(), this.showWidget()), this.resetOriginalStyle(), this.indicator.initIndicator(), "min" !== r.chatWindowState() &&
					b.sessionHandler.notifyWindowState("min"), this.resizeHandler(), k.triggerApiHandlers("onChatMinimized"));
				this.isVisibilityToggled || (this.updateViewByStatus(r.pageStatus()), this.parent.show.call(this))
			};
			C.prototype.hideWidget = function () {
				this.isMaximized ? (this.isPopupFocused && b.socketManager.sendToConnector("popupOnFocus", !1), this.chatContainer.hide()) : (null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle), this.minifiedWidget.container.hide());
				this.iframeContainer.hide();
				k.triggerApiHandlers("onChatHidden")
			};
			C.prototype.showWidget = function () {
				this.iframeContainer.show();
				null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle, this.originalDocumentStyle = null, d.scrollTo(this.scrollLeft, this.scrollTop));
				if (this.isMaximized) {
					this.scrollLeft = void 0 !== d.pageXOffset ? d.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
					this.scrollTop = void 0 !== d.pageYOffset ?
						d.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
					this.scrollToBottom();
					this.originalDocumentStyle = this.iframeContainer.documentRef.body.style.cssText;
					for (var a = "height min-height max-height width min-width max-width".split(" "), b = 0; b < a.length; b++) this.iframeContainer.documentRef.body.style.setProperty(a[b], "100%", "important");
					this.iframeContainer.documentRef.body.style.setProperty("overflow", "hidden", "important");
					this.iframeContainer.documentRef.body.style.setProperty("position",
						"fixed", "important");
					g.container.show()
				} else {
					if (c.hideWidgetOnLoad) {
						this.hideWidget();
						return
					}
					this.minifiedWidget.container.show();
					this.resizeIframeHeight()
				}
				this.iframeContainer.show()
			};
			C.prototype.init = function () {
				this.checkMetaContent();
				this.addResizeEvents();
				this.resizeHandler()
			};
			C.prototype.getZoom = function () {
				this.zoom = screen.width / d.innerWidth
			};
			C.prototype.addResizeEvents = function (a) {
				var e, f = this;
				e = function (a) {
					f.resizeHandler()
				};
				b.eventHandler.listen(d, "resize", e, "mobileresize");
				b.eventHandler.listen(d,
					"scroll", e, "mobilescroll");
				a && b.eventHandler.listen(d, "touchmove", e)
			};
			C.prototype.checkMetaContent = function () {
				var a, b = {},
					f = this.metaContent;
				if (f) {
					for (var f = f.replace(/ /g, ""), f = f.split(","), c = 0, d = f.length; c < d; c++) a = f[c].split("="), b[a[0]] = a[1];
					this.hasInitialScale = "1.0" === b["initial-scale"];
					this.hasViewportHeightWidth = !(!b.width && !b.height);
					this.minAndMaxScalesAreEqual = b["minimum-scale"] && b["maximum-scale"] && b["minimum-scale"] === b["maximum-scale"];
					this.initialAndMaxScalesAreEqual = b["initial-scale"] &&
						b["maximum-scale"] && b["initial-scale"] === b["maximum-scale"];
					this.hasNoScale = "no" === b["user-scalable"] || "0" === b["user-scalable"]
				}
			};
			C.prototype.ifScrollbarDown = function () {
				if (this.isMaximized) return this.parent.ifScrollbarDown.call(this);
				var a, b, f;
				if (!document) return !1;
				if (a = document.body) return b = document.documentElement.clientHeight + 10, f = a.scrollTop || document.documentElement.scrollTop, 80 > a.scrollHeight - (f + b)
			};
			C.prototype.resizeHandler = function () {
				var a = this;
				"offline" === r.pageStatus() && c.hideWidgetOnOffline ||
					this.isMaximized || (clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
						var b = a.isLandscape(),
							f = a.ifScrollbarDown();
						"offline" === r.pageStatus() && c.hideWidgetOnOffline || (a.landscape !== b && f && setTimeout(function () {
							a.scrollToBottom()
						}, 200), a.landscape = b, a.isMobileOptimizedWebsite() && "opera" !== s.mobileBrowserName && "android2.3" !== s.mobileBrowserName || (a.getZoom(), a.renderMinifiedBox()))
					}, 100))
			};
			C.prototype.getMetaContent = function () {
				var a, b, f = document.getElementsByTagName("meta"),
					c = "";
				a = 0;
				for (b = f.length; a < b; a++) f[a].getAttribute("name") && "viewport" === f[a].getAttribute("name").toLowerCase() && (c = f[a].getAttribute("content"));
				return c
			};
			C.prototype.isLandscape = function () {
				return screen.height < screen.width || d.innerHeight < d.innerWidth
			};
			C.prototype.isMobileOptimizedWebsite = function () {
				this.checkMetaContent();
				return this.minAndMaxScalesAreEqual && (this.hasViewportHeightWidth || this.hasNoScale) || this.initialAndMaxScalesAreEqual
			};
			C.prototype.resizeMobileRectangleWidget = function () {
				var a = this.minifiedWidget.container.getElementById("tawk-minified-mobile-text"),
					b = this.minifiedWidget.container.getElementById("tawkchat-chat-indicator"),
					f = this.minifiedWidget.container.getElementById("tawkchat-minified-wrapper"),
					d = "safari" !== s.mobileBrowserName ? screen.width : screen.height;
				"rectangle" === c.mobileWidget() && (a.style.width = "", this.minifiedBoxWidth = a.offsetWidth + 41, 110 > this.minifiedBoxWidth ? this.minifiedBoxWidth = 110 : !this.isLandscape() && this.minifiedBoxWidth > screen.width ? (this.minifiedBoxWidth = screen.width - 41, a.style.width = "calc(100% - 41px)") : this.isLandscape() &&
					this.minifiedBoxWidth > d && (this.minifiedBoxWidth = d - 41, a.style.width = "calc(100% - 41px)"), !this.isLandscape() && this.minifiedBoxWidth > screen.width - 41 ? this.minifiedBoxWidth = screen.width - 41 : this.isLandscape() && this.minifiedBoxWidth > d - 41 && (this.minifiedBoxWidth = d - 41 - 10), f.style.width = this.minifiedBoxWidth + "px", c.isRTL() ? b.style.right = this.minifiedBoxWidth - 17 + "px" : b.style.left = this.minifiedBoxWidth - 17 + "px")
			};
			C.prototype.scaleContent = function (a) {
				if (!this.isMaximized) {
					var b = c.isRTL() ? "right" : "left";
					this.resizeMobileRectangleWidget();
					var f = this.minifiedBoxHeight,
						d = this.minifiedBoxWidth,
						g = this.minifiedWidget.container.getElementById("tawkchat-minified-box"),
						h = "scale(" + a + ")",
						h = "-moz-transform : " + h + "; -webkit-transform : " + h + "; -o-transform : " + h + "; -ms-transform : " + h + "; transform : " + h + ";",
						b = "-moz-transform-origin : bottom " + b + "; -webkit-transform-origin : bottom " + b + "; -o-transform-origin : bottom " + b + "; -ms-transform-origin : bottom " + b + "; transform-origin : bottom" + b;
					a && g && (f = Math.ceil(f * a) + 15 * a, d = Math.ceil(d * a) + 15 * a, this.minifiedWidget.container.massRestyle({
						height: f +
							"px !important",
						width: d + "px !important",
						"min-height": f + "px !important",
						"min-width": d + "px !important",
						"max-height": f + "px !important",
						"max-width": d + "px !important"
					}), g.style.cssText += h + b, c.isRTL() && !g.classList.contains("rtl-direction") ? g.classList.add("rtl-direction") : !c.isRTL() && g.classList.contains("rtl-direction") && g.classList.remove("rtl-direction"));
					this.updateWidgetPosition(f)
				}
			};
			C.prototype.popup = function () {
				var a = "https://tawk.to/chat/" + L.pageId + "/";
				this.indicator.hide();
				this.chatContainer.hide();
				this.isMaximized = !1;
				this.show();
				g.closeMenu();
				if (this.myWin && !this.myWin.closed) return this.myWin.focus();
				c.whiteLabel() && c.whiteLabel().chatUrl && (a = c.whiteLabel().chatUrl + "/chat/");
				this.myWin = "nokia" === s.mobileBrowserName ? d.open(a + $_Tawk_WidgetId + "?$_tawk_sk=" + r.sessionKey + "&$_tawk_tk=" + r.transferKey + "&v=" + r.serverVersion, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no") : d.open(a + $_Tawk_WidgetId + "?$_tawk_sk=" + r.sessionKey + "&$_tawk_tk=" + r.transferKey +
					"&v=" + r.serverVersion)
			};
			C.prototype.maximize = function () {
				"firefox" === s.mobileBrowserName && !this.isMobileOptimizedWebsite() || "pop" === c.onClickAction ? this.popup() : (this.messagePreview && this.messagePreview.hide(), this.hasChatStarted || (c.showPreChatForm = this.isTherePreChat), this.indicator.hide(), this.minifiedWidget.container.hide(), this.originalIframeContainerStyle || (this.originalIframeContainerStyle = this.iframeContainer.elementReferrer.style.cssText), this.iframeContainer.restyle("margin", "0px !important"),
					this.isMaximized = !0, this.show())
			};
			C.prototype.resetOriginalStyle = function () {
				this.originalIframeContainerStyle && (this.iframeContainer.elementReferrer.style.cssText = this.originalIframeContainerStyle)
			};
			C.prototype.resizeIframeHeight = function () {
				var a;
				!this.isMaximized && (this.iframeContainer && this.minifiedWidget.container.elementReferrer && this.isIEWidget) && (a = this.minifiedWidget.container.getElementById("tawkchat-status-text-container").offsetHeight, this.minifiedWidget.container.restyle("height", a + "px"),
					this.iframeContainer.restyle("marginTop", "-" + a / 2 + "px"), this.iframeContainer.restyle("height", a + "px"))
			};
			C.prototype.renderBottomWidget = function () {
				this.isMaximized || (this.isBottomWidget = !0, this.minifiedWidget.container.template = t["mobile-bottom-" + c.mobileWidget()], this.iframeContainer.restyle("position", "fixed"), this.updateWidgetPosition())
			};
			C.prototype.handleIndicatorToggle = function (a) {
				var b = this.minifiedWidget.container.getElementById("tawkchat-chat-indicator"),
					f = this.minifiedWidget.container.getElementById("tawkchat-minified-wrapper");
				this.isIndicatorOn = a;
				f.className = a ? f.className + " indicator-on " : f.className.replace("indicator-on", "");
				this.isMobileOptimizedWebsite() ? this.scaleContent(1) : this.renderMinifiedBox();
				b.style.visibility = "visible"
			};
			C.prototype.updateViewByStatus = function (a, b) {
				this.isMaximized ? this.parent.updateViewByStatus.call(this, a) : this.iframeContainer.elementReferrer && ("offline" === a && c.hideWidgetOnOffline ? this.hideWidget() : this.showWidget(), this.resizeHandler())
			};
			C.prototype.updateWidgetPosition = function (a) {
				var b = {},
					f = {};
				a = a || this.minifiedBoxHeight;
				this.iframeContainer && (c.isCenterPositioned() ? (b.top = "50% !important", b.bottom = "auto !important", b.margin = this.isMinifiedRound ? -0.5 * a + "px 0 0 0 !important" : -0.5 * a - (this.defaultHeight - 37) / 2 + "px 0 0 0 !important", f.bottom = "auto !important") : (b.margin = "0 !important", c.isTopPositioned() ? (b.top = "0px !important", b.bottom = "auto !important", f.top = this.isMinifiedRound ? "5px !important" : "-26px !important") : (b.bottom = "0px !important", b.top = "auto !important", f.bottom = this.isMinifiedRound ?
					"14px !important" : "0px !important")), c.isRightPositioned() ? (b.right = "0px !important", b.left = "auto !important", f.right = this.isMinifiedRound ? "5px !important" : "0px !important") : (b.left = "0px !important", b.right = "auto !important", f.left = this.isMinifiedRound ? "20px !important" : "15px !important"), this.iframeContainer.massRestyle(b), this.minifiedWidget.container.massRestyle(f))
			};
			C.prototype.addOverflowScroll = function (a) {
				var e = 0,
					f = this;
				b.eventHandler.listen(a, "touchstart", function (b) {
						e = a.scrollTop + b.touches[0].pageY
					},
					"mobiletouchstart" + a.id);
				b.eventHandler.listen(a, "touchmove", function (c) {
					b.eventHandler.cancelEvent(c);
					20 >= c.touches[0].pageY || 0 > e - c.touches[0].pageY || (a.scrollTop = e - c.touches[0].pageY, g.isScrollbarDown = f.ifScrollbarDown())
				}, "mobiletouchmove" + a.id)
			};
			C.prototype.resetView = function () {
				var a, b;
				if (a = this.chatContainer) {
					if (a = a.getElementById("chatWrapper")) b = a.lastChild, a.innerHTML = "", a.appendChild(b);
					this.show()
				}
			};
			C.prototype.renderAgentMinimizedWidget = function (a) {
				var b = this.minifiedWidget.container.getElementById("agent-profile-image"),
					f = this.minifiedWidget.container.getElementById("tawkchat-status-text-container"),
					d = this.minifiedWidget.container.getElementById("tawkchat-status-agent-container");
				if (a) {
					if (a = v.agentProfiles[a], a = a.pi ? r.agentImgUrl + "/" + a.pi : "") "round" === c.mobileWidget() && (f.style.display = "none"), b.style.backgroundImage = "url('" + a + "')", d.style.display = "block"
				} else f.style.display = "inherit", b.style.backgroundImage = null, d.style.display = "none"
			};
			C.prototype.handleRestartChat = function () {
				b.formHandler.closeForm();
				g.chatStarted()
			};
			C.prototype.toggleWidget = function () {
				b.sessionHandler.notifyWindowState(this.isMaximized ? "min" : "max")
			};
			C.prototype.toggleVisibility = function () {
				this.scrollToBottom();
				(this.isVisibilityToggled = !this.isVisibilityToggled) ? this.hideWidget(): this.showWidget()
			};
			C.prototype.isWidgetHidden = function () {
				return !this.iframeContainer.isVisible
			};
			var Ba = function (a) {
				C.call(this, a)
			};
			Ba.prototype = new C;
			Ba.prototype.init = function () {
				this.renderBottomWidget();
				this.addResizeEvents();
				this.resizeHandler()
			};
			Ba.prototype.renderMinifiedBox =
				function () {
					var a = (1 / this.zoom.toFixed(2)).toFixed(2);
					this.scaleContent(0.2 > a ? 0.2 : a)
				};
			var pa = function (a) {
				C.call(this, a)
			};
			pa.prototype = new C;
			pa.prototype.init = function () {
				this.renderBottomWidget();
				this.addResizeEvents();
				this.resizeHandler()
			};
			pa.prototype.isLandscape = function () {
				return 0 !== d.orientation
			};
			pa.prototype.getZoom = function () {
				this.zoom = (this.isLandscape() ? screen.height : screen.width) / d.innerWidth
			};
			pa.prototype.renderMinifiedBox = function () {
				var a = (1 / this.zoom.toFixed(2)).toFixed(2);
				this.scaleContent(a, !1)
			};
			var Ca = function (a) {
				C.call(this, a)
			};
			Ca.prototype = new C;
			Ca.prototype.init = function () {
				this.renderBottomWidget();
				this.addResizeEvents();
				this.resizeHandler()
			};
			Ca.prototype.renderMinifiedBox = function () {
				var a = (1 / this.zoom.toFixed(2)).toFixed(2);
				this.scaleContent(a, !0)
			};
			var ka = function (a) {
				C.call(this, a);
				this.screenWidth = 0
			};
			ka.prototype = new C;
			ka.prototype.init = function () {
				this.renderBottomWidget();
				this.addResizeEvents(!0);
				this.resizeHandler()
			};
			ka.prototype.isLandscape = function () {
				return 0 !== d.orientation
			};
			ka.prototype.getZoom = function () {
				this.isLandscape() ? this.screenWidth = screen.height : this.screenWidth = screen.width;
				this.zoom = this.screenWidth / d.innerWidth
			};
			ka.prototype.renderMinifiedBox = function () {
				var a;
				a = this.isMobileOptimizedWebsite() ? (0.2 * this.screenWidth / this.minifiedBoxWidth).toFixed(2) : (1 / this.zoom.toFixed(2)).toFixed(2);
				this.scaleContent(a, !0)
			};
			var Da = function (a) {
				C.call(this, a)
			};
			Da.prototype = new C;
			Da.prototype.init = function () {
				this.renderBottomWidget();
				this.addResizeEvents();
				this.resizeHandler()
			};
			Da.prototype.renderMinifiedBox = function () {
				this.scaleContent()
			};
			var Ea = function (a) {
				C.call(this, a)
			};
			Ea.prototype = new C;
			Ea.prototype.init = function () {
				this.renderBottomWidget();
				this.checkMetaContent();
				this.addResizeEvents();
				this.resizeHandler()
			};
			Ea.prototype.renderMinifiedBox = function () {
				var a = (1 / this.zoom.toFixed(2)).toFixed(2);
				this.scaleContent(a, !0)
			};
			var la = function (a) {
				C.call(this, a)
			};
			la.prototype = new C;
			la.prototype.init = function () {
				var a;
				"ie" === this.browser && (a = document.createElement("meta"), a.httpEquiv =
					"X-UA-Compatible", a.setAttribute("content", "IE=edge"), document.getElementsByTagName("head")[0].appendChild(a));
				this.renderBottomWidget();
				this.addResizeEvents();
				this.resizeHandler()
			};
			la.prototype.renderMinifiedBox = function () {
				var a = (1 / this.zoom.toFixed(2)).toFixed(2);
				this.scaleContent(0.2 > a ? 0.2 : a)
			};
			var Fa = function (a) {
				C.call(this, a)
			};
			Fa.prototype = new C;
			Fa.prototype.init = function () {
				this.renderBottomWidget();
				this.addResizeEvents();
				this.resizeHandler()
			};
			Fa.prototype.renderMinifiedBox = function () {
				var a = (1 /
					this.zoom.toFixed(2)).toFixed(2);
				this.scaleContent(0.2 > a ? 0.2 : a)
			};
			var fa = y.extend({
				init: function () {
					var a, e, f, d, h = this;
					this._super(this);
					this.clickEvent = "touchend";
					this.iframeContainer = new D(l.getRandomName(), "border: 0 none; padding: 0; margin: 0; z-index: 9999999; width: 100%; height: 100%; display: none; position : fixed; top :0; bottom : 0; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important;");
					g = new ja(this.tawktoLinkName, this.bottomContainerName);
					this.indicator = new ia;
					this.iframeContainer.addChildViews([g.container]);
					this.iframeContainer.buildView();
					a = document.getElementsByTagName("head")[0];
					e = document.createDocumentFragment();
					f = l.createElement(document, "style", {
						type: "text/css"
					});
					d = document.createTextNode(b.ResetStyle + "" + b.MaximizedStyle + c.maxStyle());
					f.styleSheet ? f.styleSheet.cssText = d.nodeValue : f.appendChild(d);
					e.appendChild(f);
					a.appendChild(e);
					this.chatContainer = g.container;
					g.wrapper.addClass("mobile");
					v.rating.subscribe(function (a) {
						h.changeRating(a)
					});
					r.pageStatus.subscribe(function (a) {
						h.updateViewByStatus(a)
					});
					c.maxStyle.subscribe(function () {
						g && g.container.elementReferrer && g.container.insertCssFile(c.maxStyle(), !0)
					});
					b.chatHandler.hasChatStarted.subscribe(function (a) {
						g.toggleEndChatOption(a)
					})
				},
				show: function () {
					g.show();
					this.updateViewByStatus(r.pageStatus());
					this._super();
					b.socketManager.sendToConnector("popupOnFocus", !0)
				},
				updateViewByStatus: function (a) {
					this._super(a);
					g && ("preChatForm" !== b.formHandler.currentForm && "offlineForm" !== b.formHandler.currentForm) &&
						c.isPopup && (a = m.getShortMessage(a), document.title = a ? L.pageName() + " - " + l.rawDecode(a) : L.pageName())
				},
				handleEndChat: function () {
					g.chatEnded();
					this.hideWidget()
				},
				handleRestartChat: function () {
					g.chatStarted()
				}
			});
			fa.prototype.begin = function () {
				var a = s.mobileBrowserName;
				document.body.appendChild(this.iframeContainer.elementReferrer);
				if ("symbian" === a || "ie" === a || "opera" === a || "android2.3" === a) this.clickEvent = "click";
				g.buildView();
				if (l.isTouchDevice() && ("android" === s.mobileBrowserName || "android2" === s.mobileBrowserName ||
						"android2.3" === s.mobileBrowserName)) {
					var a = this.chatContainer.getElementById("chatContainer"),
						e = this.chatContainer.getElementById("menuScrollable");
					this.addOverflowScroll(a);
					this.addOverflowScroll(e);
					a.style.overflow = "hidden";
					e.style.overflow = "hidden"
				}
				b.audioPlayer.initAudioPlayer()
			};
			fa.prototype.hideWidget = function () {
				b.socketManager.sendToConnector("popupOnFocus", !1);
				setTimeout(function () {
					1 < d.history.length ? d.history.back() : d.close()
				}, 200)
			};
			fa.prototype.showWidget = function () {
				this.scrollToBottom();
				this.iframeContainer.show()
			};
			fa.prototype.resetView = function () {
				var a, b;
				if (a = this.chatContainer) {
					if (a = a.getElementById("chatWrapper")) b = a.lastChild, a.innerHTML = "", a.appendChild(b);
					this.show()
				}
			};
			fa.prototype.addOverflowScroll = function (a) {
				var e = 0,
					f = this;
				b.eventHandler.listen(a, "touchstart", function (b) {
					e = a.scrollTop + b.touches[0].pageY
				}, "mobiletouchstart" + a.id);
				b.eventHandler.listen(a, "touchmove", function (c) {
					b.eventHandler.cancelEvent(c);
					20 >= c.touches[0].pageY || 0 > e - c.touches[0].pageY || (a.scrollTop = e - c.touches[0].pageY,
						g.isScrollbarDown = f.ifScrollbarDown())
				}, "mobiletouchmove" + a.id)
			};
			fa.prototype.addEmojiToInput = function (a) {
				g.addEmojiToInput(a)
			};
			fa.prototype.closeEmojiSelection = function () {
				g.closeEmojiSelection()
			};
			var sa = function () {
				var a = this,
					e = !1;
				this.onActivityHandler = function () {
					b && (a.away && u.connected && b.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), a.active = !0, a.away = !1)
				};
				this.popupOnFocusHandler = function () {
					b && (!u.connected && b.socketManager.isForcedDisconnect() ? b.main.criticalRefresh(r.serverVersion, !1, !0) : (a.hasFocus || (a.active = !0, a.hasFocus = !0, u.connected && b.socketManager.sendToConnector("popupOnFocus", !0)), a.away && u.connected && b.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), a.away = !1))
				};
				this.popupOnBlurHandler = function () {
					b && (a.hasFocus = !1, u.connected && b.socketManager.sendToConnector("popupOnFocus", !1))
				};
				this.reconnectOnActivity = function () {
					b && !e && (e = !0, b.main.criticalRefresh(r.serverVersion))
				};
				this.away = this.active = this.hasFocus = !1;
				this.interval = this.awayTimeout = this.inactivityTimeout =
					null;
				this.initActivityReset = function () {
					a.resetTimeout();
					a.setupListeners();
					a.interval = setInterval(function () {
						a.active && (a.resetTimeout(), a.active = !1)
					}, 1E4)
				}
			};
			sa.prototype.resetTimeout = function () {
				var a = this;
				clearTimeout(this.inactivityTimeout);
				clearTimeout(this.awayTimeout);
				this.awayTimeout = setTimeout(function () {
					!a.away && b && (a.away = !0, b && (b.socketManager && u.connected) && b.socketManager.sendToConnector("notifySocketStatusUpdate", "away"))
				}, 6E5);
				b && !b.socketManager.isForcedDisconnect() && (this.inactivityTimeout =
					setTimeout(function () {
						a.inactivityTimeoutHandler()
					}, 12E5))
			};
			sa.prototype.inactivityTimeoutHandler = function () {
				b && (b.socketManager.disconnectConnector(), c.isEmbedded ? b.formHandler.openForm("inactivityOverlay") : r.chatWindowState("min"), s.mobileBrowserName ? (b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, "touchmove", this.reconnectOnActivity, "acitmmousemove"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, b.viewHandler.clickEvent, this.reconnectOnActivity, "acitmclick"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef,
					"keydown", this.reconnectOnActivity, "acitmkeydown"), b.eventHandler.listen(document, "touchmove", this.reconnectOnActivity, "acitmousemove"), b.eventHandler.listen(document, b.viewHandler.clickEvent, this.reconnectOnActivity, "acitclick"), b.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown")) : (b.eventHandler.listen(document, "mousemove", this.reconnectOnActivity, "acitmousemove"), b.eventHandler.listen(document, "click", this.reconnectOnActivity, "acitclick"), b.eventHandler.listen(document,
					"keydown", this.reconnectOnActivity, "acitkeydown"), document.onfocusin ? b.eventHandler.listen(document, "focusin", this.reconnectOnActivity, "acitfocus") : b.eventHandler.listen(d, "focus", this.reconnectOnActivity, "acitfocus")), b.viewHandler.indicator.pageTitleNotification.off())
			};
			sa.prototype.cleanUp = function () {
				clearInterval(this.interval);
				clearTimeout(this.inactivityTimeout);
				clearTimeout(this.awayTimeout)
			};
			sa.prototype.setupListeners = function () {
				s.mobileBrowserName ? (b.eventHandler.listen(b.viewHandler.chatContainer.documentRef,
					"touchmove", this.onActivityHandler, "acmmousemove"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, b.viewHandler.clickEvent, this.onActivityHandler, "acmclick"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, "keydown", this.onActivityHandler, "acmkeydown"), b.eventHandler.listen(document, "touchmove", this.onActivityHandler, "acmousemove"), b.eventHandler.listen(document, b.viewHandler.clickEvent, this.onActivityHandler, "acclick"), b.eventHandler.listen(document, "keydown", this.onActivityHandler,
					"ackeydown")) : c.isPopup ? (document.onfocusin ? (b.eventHandler.listen(document, "focusin", this.popupOnFocusHandler, "acfocus"), b.eventHandler.listen(document, "focusout", this.popupOnBlurHandler, "acblur")) : (b.eventHandler.listen(d, "focus", this.popupOnFocusHandler, "acfocus"), b.eventHandler.listen(d, "blur", this.popupOnBlurHandler, "acblur")), b.eventHandler.listen(document, "click", this.popupOnFocusHandler, "acphclick"), b.eventHandler.listen(document, "keydown", this.popupOnFocusHandler, "acphkeydown")) : (b.eventHandler.listen(document,
					"mousemove", this.onActivityHandler, "acmousemove"), b.eventHandler.listen(document, "click", this.onActivityHandler, "acclick"), b.eventHandler.listen(document, "keydown", this.onActivityHandler, "ackeydown"))
			};
			var ga = function () {
				var a = this;
				this.originalPageStatus = this.agentCountSubscription = this.setupTimeout = null;
				this.utcOffset = 0;
				b.eventEmitter.on("scheduleUpdate", function (b) {
					c.widgetId === b.wdgt && (c.schedule = b.ws ? a.convertOldScheduleFormat(b.ws.sch) : null, c.scheduleTimezone = null === b.wstz ? {} : {
						utc: b.wstz.utc,
						tzo: b.wstz.offset
					}, a.setup())
				})
			};
			ga.prototype.setup = function () {
				this.clear();
				null === this.originalPageStatus && (this.originalPageStatus = r.pageStatus());
				c.schedule ? (this.utcOffset = -1 * ((new Date).getTime() - c.scheduleTimezone.utc), this.calculate()) : r.pageStatus(this.originalPageStatus)
			};
			ga.prototype.calculate = function () {
				var a, b, f, d, g, h = this;
				this.clear();
				if (c.schedule)
					if (0 === c.schedule.length) this.goOffline();
					else {
						a = new Date;
						b = -6E4 * a.getTimezoneOffset();
						b = c.scheduleTimezone.tzo - b;
						f = new Date(a.getTime() +
							this.utcOffset + b);
						a = f.getDay();
						b = 60 * f.getHours() + f.getMinutes();
						f = 60 * b + f.getSeconds();
						for (var k = 0; k < c.schedule.length; k++) {
							var l = c.schedule[k];
							if (l.day === a) {
								if (b >= l.start && b < l.end) {
									d = l;
									break
								}
								if (b < l.start) {
									g = l;
									break
								}
							}
						}
						void 0 !== d ? (this.goOnline(), d = 60 * d.end - f) : (this.goOffline(), d = void 0 !== g ? 60 * g.start - f : 86400 - f + 1);
						void 0 !== d && (this.setupTimeout = setTimeout(function () {
							h.calculate()
						}, 1E3 * d))
					}
			};
			ga.prototype.goOnline = function () {
				null !== this.agentCountSubscription && (b.agents.totalAgents.unsubscribe(this.agentCountSubscription),
					this.agentCountSubscription = null);
				"offline" !== this.originalPageStatus && r.pageStatus(this.originalPageStatus)
			};
			ga.prototype.goOffline = function () {
				0 !== b.agents.totalAgents() ? (null !== this.agentCountSubscription && b.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = b.agents.totalAgents.subscribe(function (a) {
					0 === a && r.pageStatus("offline")
				})) : r.pageStatus("offline")
			};
			ga.prototype.clear = function () {
				clearTimeout(this.setupTimeout);
				this.setupTimeout = null;
				null !== this.agentCountSubscription &&
					(b.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = null)
			};
			ga.prototype.cleanUp = function () {
				this.clear();
				this.originalPageStatus = null
			};
			ga.prototype.convertOldScheduleFormat = function (a) {
				var b = [];
				if (!a || Array.isArray(a)) return a;
				Object.keys(a).forEach(function (f) {
					var c = a[f];
					0 === c.start && 0 === c.end || b.push({
						day: parseInt(f, 10),
						start: Math.floor(c.start / 6E4),
						end: Math.floor(c.end / 6E4)
					})
				});
				return b
			};
			var V = function () {
				this.registerTime = 0;
				this.registerStart = null;
				this.maxRetrycount =
					3;
				this.retryCount = 0;
				this.registerData = this.registerDelayTimeout = this.connectionCookieInterval = this.requestCancelTimeout = this.previousRegisterCall = null;
				this.registerStarted = !1;
				this.retryDelay = null;
				this.retryInitialDelay = 30;
				this.retryMultiplier = 1.5;
				this.minRandom = 0.5;
				this.maxRandom = 1.5;
				this.maxDelay = 120;
				this.retryRegisterTimeout = null
			};
			V.prototype.register = function () {
				this.registerStarted = !0;
				this.clearTimers();
				this.prepareData()
			};
			V.prototype.prepareData = function () {
				var a, e, f, d = "",
					g = "";
				if (b) {
					a = aa.getSessionInformation();
					e = r.sessionKey || void 0;
					a.length && (g = a[0]);
					f = (new Date).getTimezoneOffset();
					if (-900 > f || 900 < f) f = 0;
					this.registerData ? (this.registerData.k = e, this.registerData.d = g) : (d = b.browserData.getReferredSearchEngine(), this.registerData = {
						a: L.pageId || "",
						k: e,
						w: c.widgetId,
						d: g,
						mb: s.mobileBrowserName ? 1 : 0,
						m: f,
						s: d,
						q: "",
						r: document.referrer,
						wlh: l.h(t["default-branding"]),
						p: document.location.href
					});
					this.registerData.cf = 3 === a.length && "cf" === a[2] ? 1 : 0;
					b.main.maximize && (this.registerData.h = "max");
					this.registerData.wv = c.widgetVersion;
					c.isPopup && (r.transferKey && r.sessionKey) && (this.registerData.tk = r.transferKey);
					b.main.previousSessionKey = this.registerData.k;
					this.getUUID()
				}
			};
			V.prototype.getUUID = function () {
				var a, e, f, c = !1,
					g = Infinity,
					h = b.punycode.toASCII(d.location.hostname);
				"www." === h.substring(0, 4) && (h = h.replace("www.", ""));
				a = aa.getStoredUUID();
				for (var k = 0, l = a.length; k < l; k++) {
					var m, p, q, r;
					r = aa.parseSessionInformation(a[k]);
					if (4 === r.length)
						if (m = r[0], p = r[1], q = r[2], r = r[3], "e" === m) {
							if (h === p) {
								e = q;
								f = r;
								break
							}
						} else "p" === m && (m = h.match(p)) &&
							(h.substr(m.index) === p && m.index < g) && (g = m.index, e = q, f = r, c = !0)
				}
				this.registerData && (this.registerData.u = e, this.registerData.uv = f, c && (this.registerData.uw = !0));
				this.startRegister()
			};
			V.prototype.abort = function () {
				null !== this.previousRegisterCall && (Ha.abort(this.previousRegisterCall), this.previousRegisterCall = null)
			};
			V.prototype.setupRegisterTimeout = function () {
				var a = this;
				clearTimeout(this.requestCancelTimeout);
				this.requestCancelTimeout = setTimeout(function () {
					a.abort();
					a.retryRegister()
				}, 9E4)
			};
			V.prototype.startRegister =
				function () {
					var a = aa.getHTTPCookie("TawkConnectionTime"),
						a = parseInt(a.length ? a[0] : null, 10);
					!a || 1E3 < (new Date).getTime() - (new Date(a)).getTime() ? (aa.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0), this.connectionCookieInterval = setInterval(function () {
						aa.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0)
					}, 100), this.doRegister()) : this.delayRegister()
				};
			V.prototype.delayRegister = function () {
				var a = this;
				clearTimeout(this.registerDelayTimeout);
				this.registerDelayTimeout = setTimeout(function () {
						a.register()
					},
					1E3)
			};
			V.prototype.doRegister = function () {
				var a = r.visitorAppServer + "/register/",
					e = this;
				this.registerStart = (new Date).getTime();
				this.setupRegisterTimeout();
				a += this.registerStart;
				this.previousRegisterCall = Ha.xhrRequest(a, this.registerData, function (a, c) {
					if (!a && !c) return e.clearTimers(), e.retryRegister();
					b && b.main.begin(JSON.parse(l.trim(c)))
				})
			};
			V.prototype.retryRegister = function () {
				var a, e = this;
				null === this.retryRegisterTimeout && (this.retryCount >= this.maxRetrycount ? (this.clearTimers(), b && b.main.hideWidget()) :
					(this.retryCount++, a = this.getRetryWaitDelay(), this.retryRegisterTimeout = setTimeout(function () {
						e.register()
					}, a)))
			};
			V.prototype.resetRetryCount = function () {
				this.retryCount = 0;
				this.retryDelay = 10
			};
			V.prototype.getRetryWaitDelay = function () {
				var a, b = Math.random() * (this.maxRandom - this.minRandom) + this.minRandom;
				null === this.retryDelay ? this.retryDelay = this.retryInitialDelay : (a = this.retryDelay * this.retryMultiplier, this.retryDelay = this.retryDelay > this.maxDelay || a > this.maxDelay ? this.maxDelay : a);
				return 1E3 * Math.round(this.retryDelay *
					b)
			};
			V.prototype.clearTimers = function () {
				this.abort();
				clearTimeout(this.requestCancelTimeout);
				clearTimeout(this.registerDelayTimeout);
				clearTimeout(this.retryRegisterTimeout);
				clearInterval(this.connectionCookieInterval);
				aa.setHTTPCookie("TawkConnectionTime", 0, !0);
				this.connectionCookieInterval = this.requestCancelTimeout = this.registerDelayTimeout = this.retryRegisterTimeout = null
			};
			var ha = function () {};
			ha.prototype.processSettings = function (a) {
				var e, f, d, g = 14,
					h = "",
					k = "",
					m = "";
				f = e = 60;
				if (!(a.wv < c.widgetVersion)) {
					Tawk_API.embedded &&
						(c.isEmbedded = !0);
					c.isHeaderCompact = !1;
					c.isLegacyLayout = a.isLegacyLayout || !0;
					c.widgetVersion = a.wv;
					c.onClickAction = a.woc;
					c.hideWidgetOnLoad = a.hwol;
					c.hideWidgetOnOffline = a.hwof;
					c.hideWidget = !!a.dsw;
					c.showAgentBar = !a.hab;
					c.showWaitTime = !a.hwt;
					c.locale = a.lc;
					c.onlineGreeting = a.onlineGreeting;
					c.awayGreeting = a.awayGreeting;
					c.schedule = b.scheduler.convertOldScheduleFormat(a.ws);
					c.soundOn(!a.dws);
					c.showAgentTyping = a.atyping;
					c.showUploads(a.uploads);
					c.showRating(a.rating);
					c.showVisitorTyping(a.vtyping);
					c.showEmoji(a.emoji);
					c.showMessagePreview(a.mprvw);
					c.showUnreadInTab(a.tbi);
					c.isRTL(0 <= l.rtlLangTab.indexOf(c.locale));
					c.chatPosition(a.pos);
					"page" !== $_Tawk_WidgetId || s.mobileBrowserName || (a.dw = "min");
					"full" === a.dw ? (c.widgetOffsetX = 10, c.widgetOffsetY = 0) : (c.widgetOffsetX = 20, c.widgetOffsetY = 20);
					s.mobileBrowserName ? c.mobileWidget(a.mw || "round") : c.desktopWidget(a.dw || "min");
					c.maximizedDimensions({
						width: parseInt(a.w, 10) || 350,
						height: parseInt(a.h, 10) || 520
					});
					c.isDesktopRectangle() && (e = parseInt(a.minw, 10) || 320, f = parseInt(a.minh,
						10) || 40);
					c.chatBubble(a.bbl);
					c.headerBgColor = a.thm.hbg || "#03a84e";
					c.headerTxtColor = a.thm.htx || "#ffffff";
					c.agentTextBgColor = a.thm.aBblBg || l.shadeColor(c.headerBgColor, -0.1);
					c.agentTextColor = a.thm.aBblTx || "#ffffff";
					c.visitorTextBgColor = a.thm.vBblBg || "#e5e5e5";
					c.visitorTextColor = a.thm.vBblTx || "#33333";
					c.minimizedDimensions({
						width: e,
						height: f,
						position: a.pos
					});
					c.topCorner = "undefined" !== typeof a.thm.topc ? a.thm.topc : c.isTopPositioned() ? 0 : 8;
					c.bottomCorner = "undefined" !== typeof a.thm.btmc ? a.thm.btmc : c.isTopPositioned() ?
						8 : 0;
					if (c.isEmbedded || c.isPopup) c.topCorner = 0, c.bottomCorner = 0;
					this.processPrechatForm(a);
					this.processOfflineForm(a, a.grt);
					b && (e = ".theme-background-color{background-color: " + c.headerBgColor + ";}", f = ".theme-text-color{color: " + c.headerTxtColor + ";}", c.showEmoji() && (g += 30), c.showRating() && (g += 30), c.showUploads() && (g += 30), b.MinifiedStyle && (d = c.topCorner + "px " + c.topCorner + "px " + c.bottomCorner + "px " + c.bottomCorner + "px !important;", messagePreviewRadius = c.topCorner + "px " + c.topCorner + "px " + c.topCorner + "px " +
						c.topCorner + "px !important;", bottomBorderRadius = ".bottom-border-corner{border-bottom-left-radius:" + c.bottomCorner + "px !important; border-bottom-right-radius:" + c.bottomCorner + "px !important;}", topBorderRadius = ".top-border-corner{border-top-left-radius:" + c.topCorner + "px !important; border-top-right-radius:" + c.topCorner + "px !important;}", k = k + e + f, k += ".border-corner{border-radius : " + d + "-moz-border-radius : " + d + "-webkit-border-radius : " + d + "}", k += topBorderRadius, k += bottomBorderRadius, k += "#tooLongMsgNotification {background-color: " +
						c.headerBgColor + "; color : " + c.headerTxtColor + "}", k += "#file-upload-drop-icon {color:" + c.headerBgColor + ";}", k += "#tawkchat-status-container{left: 10px;}", k += "#short-message, #maximizeChat, #minimizeChatMinifiedBtn{line-height: " + c.minimizedDimensions().height + "px;}", k += ".bubble-text-color{color:" + (c.chatBubble() ? c.chatBubble().fgc : "#ffffff") + ";}", k += "#tawkchat-message-preview-messages-container .messageBody {background-color: #fff !important; color : #333 !important;}", k += "#textareaContainer.additionalPadding{padding-right: " +
						g + "px;}", k += ".rtl-direction #textareaContainer.additionalPadding{padding-left: " + g + "px;padding-right: 14px;}", k += "#chat-icon-svg { fill:" + c.headerTxtColor + "};", c.minStyle(k), b.MinifiedStyle += " " + b.CommonStyle), b.MaximizedStyle && (e = ".theme-background-color{background-color: " + c.headerBgColor + ";}", f = ".theme-text-color{color: " + c.headerTxtColor + ";}", h = h + e + f, h += "#tooLongMsgNotification {background-color: " + c.headerBgColor + "; color : " + c.headerTxtColor + "}", h += "#file-upload-drop-icon {color:" + c.headerBgColor +
						";}", h += "#chatMenuControls li:hover {background-color: " + c.headerBgColor + ";color: " + c.headerTxtColor + "}", h += "#formContainer>#emailTranscriptForm .form-header-icon, #changeNameForm .form-header-icon, #chatEndedForm .form-header-icon, #preChatForm .longFormContainer .form-header-icon {background-color:" + c.headerBgColor + ";}", h += "#formContainer>#emailTranscriptForm::before, #changeNameForm::before, #chatEndedForm::before, #endChatForm::before {background-color:" + c.headerBgColor + "; border-color: " + c.headerBgColor +
						";}", h += "#formSubmit, #formSubmit-pc {background-color:" + c.headerBgColor + ";}", h = c.isDesktopRectangle() ? h + ("#textareaWrapper, #actionsContainer{border-radius : 0px 0px " + c.bottomCorner + "px " + c.bottomCorner + "px !important ;}") : h + "#textareaWrapper, #actionsContainer{border-radius : 0px 0px 5px 5px !important ;}", h += "button.theme-background-color:hover{background-color: " + l.shadeColor(c.headerBgColor, -0.3) + "!important;}", h += ".agentChatContainer .message{background-color: " + c.agentTextBgColor + " !important; color : " +
						c.agentTextColor + " !important;}", h += ".agentTypingIndicator .dot{background-color: " + c.agentTextColor + " !important;}", h += ".visitorChatContainer .message, .visitorChatContainer .messageWrapper.error .message {background-color: " + c.visitorTextBgColor + " !important; color : " + c.visitorTextColor + " !important;}", h += ".upload-data {background-color: " + c.visitorTextBgColor + " !important; color : " + c.visitorTextColor + " !important;}", h += ".headerBoxLink .headerBoxIcon{color:" + c.headerTxtColor + ";}", h += ".message.agentTypingIndicator::before,.message.agentTypingIndicator::after {border-color: transparent " +
						c.agentTextBgColor + " transparent transparent;}", h += ".visitorChatContainer .messageWrapper .message::after {border-color: transparent transparent transparent " + c.visitorTextBgColor + ";}", h += ".agentChatContainer .messageWrapper .message::before,.agentChatContainer .messageWrapper .message::after {border-color: transparent " + c.agentTextBgColor + " transparent transparent;}", h += ".upload-data::before, .upload-data::after {border-color: transparent transparent transparent " + c.visitorTextBgColor + ";}", h += ".agentNameCentered{color:" +
						c.headerTxtColor + ";}", h += "#textareaContainer.additionalPadding{padding-right: " + g + "px;}", h += ".rtl-direction #textareaContainer.additionalPadding{padding-left: " + g + "px;padding-right: 14px;}", h += "#actionsContainer.mobile-typing #textareaContainer{padding-right: " + (g + 27) + "px;}", h += ".rtl-direction #actionsContainer.mobile-typing #textareaContainer{padding-left: " + (g + 27) + "px;}", c.maxStyle(h), b.MaximizedStyle += " " + b.CommonStyle), b.MinifiedMobileStyle && (m = m + e + f, bottomBorderRadius = ".bottom-border-corner{border-bottom-left-radius:" +
						c.bottomCorner + "px !important; border-bottom-right-radius:" + c.bottomCorner + "px !important;}", topBorderRadius = ".top-border-corner{border-top-left-radius:" + c.topCorner + "px !important; border-top-right-radius:" + c.topCorner + "px !important;}", m += topBorderRadius, m += bottomBorderRadius, m += "#chat-icon-svg { fill:" + c.headerTxtColor + "};", c.mobMinStyle(m), b.MinifiedMobileStyle += " " + b.CommonStyle));
					a.cf && (c.consentOption = {
						text: a.cf.msg,
						buttons: [{
								textReplace: a.cf.btnAccpt,
								placeholder: "__CUSTOM_SUBMIT_BUTTON__"
							},
							{
								textReplace: a.cf.btnRjct,
								placeholder: "__CUSTOM_CLOSE_BUTTON__"
							}
						]
					}, a.cf.plcyUrl && (c.consentOption.text += "\n[" + (a.cf.plcyUrlTxt || a.cf.plcyUrlTxt) + "](" + a.cf.plcyUrl + ")"));
					l.updateFonts()
				}
			};
			ha.prototype.processPrechatForm = function (a) {
				c.showPreChatForm = "undefined" !== typeof a.prechatForm && null !== a.prechatForm;
				c.showPreChatForm && (c.prechatOptions = a.prechatForm)
			};
			ha.prototype.processOfflineForm = function (a) {
				a = a.offlineForm ? a.offlineForm : {
					text: b.languageParser.translate("form", "OfflineFormMessage"),
					shortMessage: b.languageParser.translate("form",
						"SendMessage"),
					fields: [{
						label: b.languageParser.translate("form", "name"),
						isRequired: !0,
						type: "name"
					}, {
						label: b.languageParser.translate("form", "email"),
						isRequired: !0,
						type: "email"
					}, {
						label: b.languageParser.translate("form", "message"),
						isRequired: !0,
						type: "message"
					}]
				};
				c.offlineOptions = a
			};
			ha.prototype.getPrechatFields = function () {
				return c.prechatOptions.fields
			};
			ha.prototype.getOfflineFields = function () {
				return c.offlineOptions.fields
			};
			ha.prototype.getShortMessage = function (a) {
				var b = null;
				"online" === a && c.onlineGreeting ?
					b = c.onlineGreeting.shortMessage : "away" === a && c.awayGreeting ? b = c.awayGreeting.shortMessage : "offline" === a && c.offlineOptions && (b = c.offlineOptions.shortMessage);
				return b
			};
			ha.prototype.getLongMessage = function (a) {
				var b = null;
				"online" === a && c.onlineGreeting ? b = c.onlineGreeting.longMessage : "away" === a && c.awayGreeting ? b = c.awayGreeting.longMessage : c.offlineOptions && (b = c.offlineOptions.text);
				return l.transformGreetings(b)
			};
			m = new ha;
			var $ = function () {
				var a = this;
				this.referrer = null;
				z.name.subscribe(function (a) {
					z.displayName(l.parseVisitorName(a))
				});
				b.eventEmitter.on("localeChanged", function () {
					z.displayName(l.parseVisitorName(z.name()))
				});
				b.eventEmitter.on("visitorDataUpdate", function (b) {
					a.updateVisitorInformation(b)
				});
				b.eventEmitter.on("requestEmailTranscript", function (a, f) {
					a.chatEndVersion = v.chatEndVersion;
					b.chatHandler.hasChatEnded ? b.socketManager.sendToConnector("notifyEndChatTranscript", a, f) : b.socketManager.sendToConnector("notifyEmailTranscript", a, f)
				})
			};
			$.prototype.updateVisitorUUID = function (a) {
				var b = JSON.parse(a.uuids);
				z.uuid = a.uuid;
				z.uuidVer =
					a.uver || 0;
				b && (Object.keys(b.e).forEach(function (a) {
					z.uuids.push({
						isExact: !0,
						domain: a,
						uuid: b.e[a]
					})
				}), Object.keys(b.p).forEach(function (a) {
					z.uuids.push({
						isExact: !1,
						domain: a,
						uuid: b.p[a]
					})
				}));
				aa.storeUUID()
			};
			$.prototype.updateVisitorInformation = function (a) {
				a.n && l.isString(a.n) && z.name(a.n);
				a.te && l.isString(a.te) && (z.transcriptEmail = a.te);
				a.e && l.isString(a.e) && z.email(a.e);
				a.vid && (z.visitorId = a.vid);
				a.dpt && l.isString(a.dpt) && (v.chatDepartment = a.dpt);
				a.pcfs && r.prechatFormSubmitted(!0)
			};
			$.prototype.setNameFromForm =
				function (a) {
					b.visitorHandler.setNameValue(a);
					k.triggerApiHandlers("onVisitorNameChanged", a.name)
				};
			$.prototype.getNameValue = function () {
				return z.name() === z.displayName() ? z.name() : ""
			};
			$.prototype.setNameValue = function (a) {
				z.name(l.rawEncode(a.name))
			};
			$.prototype.getTranscriptEmailValue = function () {
				return z.transcriptEmail
			};
			$.prototype.getEmailValue = function () {
				return z.email() || z.transcriptEmail
			};
			$.prototype.setEmailValue = function (a) {
				z.email(a.email)
			};
			$.prototype.setTranscriptValue = function (a) {
				a.name &&
					z.name(l.rawEncode(a.name));
				z.transcriptEmail = a.transcriptEmail
			};
			$.prototype.sendNavigationEvent = function () {
				var a = this;
				setTimeout(function () {
					var e = {
						u: d.location.href,
						t: document.title
					};
					b && (b.viewHandler && (b.viewHandler.indicator && 0 < b.viewHandler.indicator.unansweredMessages) && (e.t = b.viewHandler.indicator.originalPageTitle), document.referrer && a.referrer !== document.referrer && (a.referrer = document.referrer, e.r = document.referrer), b.socketManager.sendToConnector("nav", e))
				}, 500)
			};
			var Q = function () {
				var a = this;
				b.eventEmitter.on("chatBubbleClosed", function () {
					r.chatBubbleClosed(!0)
				});
				b.eventEmitter.on("windowStateUpdated", function (a) {
					r.chatWindowState(a.cw)
				});
				b.eventEmitter.on("pageStatusUpdated", function (a) {
					var c;
					a && (c = a.ast) && (l.isString(c) && l.isArray(a.dptst)) && a.asver > r.pageStatusVersion && (b.scheduler.originalPageStatus = a.ast, r.pageStatusVersion = a.asver, r.departments = a.dptst, r.pageStatus(a.ast), b.scheduler.calculate())
				});
				b.eventEmitter.on("submitPrechatForm", function (b, c) {
					a.formatPrechatData(b, c)
				});
				b.eventEmitter.on("submitOfflineForm",
					function (b, c) {
						a.formatOfflineData(b, c)
					});
				r.pageStatus.subscribe(function (a) {
					k.triggerApiHandlers("onStatusChange", a)
				});
				b.eventEmitter.on("visitorTagsUpdate", function (a) {
					k.triggerApiHandlers("onTagsUpdated", a)
				})
			};
			Q.prototype.closeBubble = function () {
				r.chatBubbleClosed(!0);
				b.socketManager.sendToConnector("notifyChatBubbleClosed")
			};
			Q.prototype.getDeparmentOptions = function () {
				var a, e, c, d = [],
					g = r.departments;
				g.sort(function (a, b) {
					var e = l.rawDecode(a.n).toLowerCase(),
						c = l.rawDecode(b.n).toLowerCase();
					return e <
						c ? -1 : e > c ? 1 : 0
				});
				a = 0;
				for (e = g.length; a < e; a++) c = g[a], d.push({
					text: c.n + " (" + b.languageParser.translate("status", c.st) + ")",
					value: c.did,
					selected: v.chatDepartment === c.did
				});
				return d
			};
			Q.prototype.getDeparmentName = function (a) {
				var b, c, d = r.departments;
				b = 0;
				for (c = d.length; b < c; b++)
					if (d[b].did === a) return l.rawDecode(d[b].n);
				return a
			};
			Q.prototype.formatFormData = function (a, b) {
				var c, d, g, h = {
					questions: []
				};
				c = 0;
				for (d = b.length; c < d; c++) {
					g = b[c];
					"name" === g.type && (h.name = a[g.id]);
					"email" === g.type && (h.email = a[g.id]);
					if ("department" ===
						g.type) {
						if (!a[g.id] || "0" == a[g.id]) continue;
						h.department = a[g.id];
						a[g.id] = this.getDeparmentName(a[g.id])
					}
					a[g.id] && 0 !== a[g.id].length && (l.isArray(a[g.id]) ? h.questions.push({
						label: l.rawDecode(g.label),
						answer: a[g.id].join(", ")
					}) : h.questions.push({
						label: l.rawDecode(g.label),
						answer: a[g.id]
					}))
				}
				return h
			};
			Q.prototype.formatPrechatData = function (a, e) {
				var c = this,
					d = this.formatFormData(a, m.getPrechatFields());
				b.socketManager.sendToConnector("notifyPrechat", d, function (a) {
					if (a) return e(a, d);
					k.triggerApiHandlers("onPrechatSubmit",
						d.questions);
					b.viewHandler.indicator.pageTitleNotification.off();
					c.handlePrechatSave(d, e)
				})
			};
			Q.prototype.handlePrechatSave = function (a, e) {
				var c, d, g = "";
				a.name && b.visitorHandler.setNameValue(a);
				a.email && b.visitorHandler.setEmailValue(a);
				r.prechatFormSubmitted(!0);
				if (0 === a.questions.length) return e(null, a);
				if (0 < a.questions.length)
					for (c = 0, d = a.questions.length; c < d; c++) g += l.rawDecode(a.questions[c].label) + " : " + a.questions[c].answer, c !== d - 1 && (g += "\r\n");
				b.chatHandler.sendMessageToServer(g, null, function (c) {
					c.error ||
						(b.chatHandler.prepareMessage({
							ut: "v",
							t: "c",
							m: l.rawEncode(g),
							co: new Date,
							uid: z.visitorId
						}, !1, !1, !0), b.viewHandler.addWaitTime());
					e(c.error, a)
				})
			};
			Q.prototype.formatOfflineData = function (a, e) {
				var c = this.formatFormData(a, m.getOfflineFields());
				c.questions.unshift({
					label: b.languageParser.translate("form", "SubmittedFrom"),
					answer: d.location.href
				});
				b.socketManager.sendToConnector("notifyOfflineMessage", c, function (a) {
					if (a) return e(a, c);
					k.triggerApiHandlers("onOfflineSubmit", c);
					e(null, c)
				})
			};
			Q.prototype.visitorChatDismiss =
				function (a) {
					var e;
					b.chatHandler.messages && (e = Object.keys(b.chatHandler.messages), e = e[e.length - 1], (e = b.chatHandler.messages[e]) && e.co && (e = (new Date(e.co)).getTime(), b.socketManager.sendToConnector("visitorChatDismiss", {
						timestamp: e
					}, function (b) {
						if (b) return a(b);
						a(null)
					})))
				};
			Q.prototype.notifyWindowState = function (a) {
				r.chatWindowState(a);
				b.socketManager.sendToConnector("notifyWindowState", a)
			};
			Q.prototype.addEvent = function (a, e, c) {
				var d;
				"function" === typeof e && (c = e, e = null);
				c = c || function () {};
				d = this.secureWrapper({});
				d.name = a;
				d.data = e;
				b.socketManager.sendToConnector("addEvent", d, c)
			};
			Q.prototype.setAttributes = function (a, c, f) {
				f = f || function () {};
				c ? (k.visitor = k.visitor || {}, a.name && (k.visitor.name = a.name), a.email && (k.visitor.email = a.email), a.hash && (k.visitor.hash = a.hash)) : a = this.secureWrapper(a);
				b.socketManager.sendToConnector("setAttributes", a, function (c) {
					c || (a.name && b.visitorHandler.setNameValue(a), a.email && b.visitorHandler.setEmailValue(a));
					f(c)
				})
			};
			Q.prototype.addTags = function (a, c) {
				var f;
				c = c || function () {};
				f = this.secureWrapper({});
				f.tags = a;
				b.socketManager.sendToConnector("addTags", f, c)
			};
			Q.prototype.removeTags = function (a, c) {
				var f;
				c = c || function () {};
				f = this.secureWrapper({});
				f.tags = a;
				b.socketManager.sendToConnector("removeTags", f, c)
			};
			Q.prototype.secureWrapper = function (a) {
				"undefined" === a && (a = {});
				k && k.visitor && (k.visitor.email && (a.email = k.visitor.email), k.visitor.hash && (a.hash = k.visitor.hash));
				return a
			};
			Q.prototype.setVisitorAttributes = function () {
				var a = {};
				k && k.visitor && (k.visitor.name && (a.name = k.visitor.name), k.visitor.email && (a.email =
					k.visitor.email), this.setAttributes(a, !1))
			};
			var I = function () {
				var a = this;
				this.agentHasMessaged = this.visitorHasMessaged = !1;
				this.messageBuffer = [];
				this.messages = {};
				this.agentsTyping = [];
				this.agentProfilesTyping = [];
				this.previousTextTime = this.previousText = this.lastMessageOwner = null;
				this.hasChatEnded = !1;
				this.hasChatStarted = w.observable(!1);
				this.hasWebRTCall = !1;
				b.eventEmitter.on("syncConversation", function (b) {
					a.conversationUpdate(b)
				});
				b.eventEmitter.on("incomingMessage", function (b) {
					a.handleMessageFromServer(b)
				});
				b.eventEmitter.on("agentIsTyping", function (b) {
					c.showAgentTyping && a.handleAgentTyping(b.rsc)
				});
				b.eventEmitter.on("agentStopedTyping", function (b) {
					a.handleAgentStoppedTyping(b.rsc)
				});
				b.eventEmitter.on("newChatRating", function (b) {
					a.changeRating(b.rsc, !0)
				});
				b.eventEmitter.on("webrtcCallStatus", function (a) {
					b.viewHandler.subscribeCallUpdate(a.clid)
				});
				b.eventEmitter.on("visitorChatDismiss", function (a) {
					b.viewHandler.closeMessagePreview(a)
				});
				b.eventEmitter.on("visitorChatSeen", function (a) {
					r.lastMessageTimestamp =
						a.lmst;
					b.viewHandler.clearUnseenNotification()
				})
			};
			I.prototype.parseHistory = function (a) {
				var e, f, d, g;
				(new Date).getTime();
				var h = d = 0;
				this.noRedraw = !0;
				v.chatEndVersion = 1;
				e = 0;
				for (f = v.chatHistory.length; e < f; e++) "CHAT_ENDED" === v.chatHistory[e].m && (d = e + 1, v.chatEndVersion++);
				g = 0 < v.chatOrder ? this.messages[v.chatOrder] : null;
				e = d;
				for (f = v.chatHistory.length; e < f; e++) d = v.chatHistory[e], d.md && (!d.md || d.md.ao) || a && g && g.timeStamp > (new Date(d.co)).getTime() || ("v" !== d.ut || (this.visitorHasMessaged || "c" !== d.t) || (h = (new Date).getTime() -
					l.getMilliseconds(d.co)), "WEBRTC_CALL" === d.m && d.md && d.md.webrtc ? (this.hasWebRTCall = !0, b.viewHandler.subscribeCallUpdate(d.md.clid, !0)) : this.prepareMessage(d, !0, !1, !1));
				this.noRedraw = !1;
				this.visitorHasMessaged && (!this.agentHasMessaged && c.showWaitTime) && (r.waitTime = r.waitTime < h ? 6E4 : r.waitTime - h, b.viewHandler.addWaitTime());
				this.hasChatStarted(this.visitorHasMessaged || this.agentHasMessaged)
			};
			I.prototype.handleIndicator = function () {
				b.viewHandler.indicator.show();
				s.mobileBrowserName && (b.viewHandler.hasChatStarted = !0)
			};
			I.prototype.handleMessageFromServer = function (a) {
				var e = null;
				if (a.md && a.md.ao) return v.chatVersion = a.cver;
				if ("offline" === r.pageStatus())
					if ("a" === a.ut) r.pageStatus("online");
					else return;
				if (!v.chatSynced) return v.chatBuffer.push(a);
				this.hasChatEnded && this.startNewChat();
				"WEBRTC_CALL" === a.m && a.md && a.md.webrtc ? this.hasWebRTCall = !0 : "CHAT_ENDED" !== a.m || this.hasChatEnded ? ("v" === a.ut && "c" === a.t && b.viewHandler.addWaitTime(), c.isPopup || ("c" !== a.t || b.viewHandler.isMaximized || "v" === a.ut || c.isEmbedded || !s.mobileBrowserName) ||
					(b.viewHandler.hasChatStarted = !0), v.chatVersion = a.cver, "s" === a.ut || ("c" !== a.t || this.hasChatStarted()) || (this.hasChatStarted(!0), k.triggerApiHandlers("onChatStarted", {
						chatId: v.chatId
					})), "c" === a.t ? "a" === a.ut ? a.md && a.md.file ? k.triggerApiHandlers("onFileUpload", "https://tawkto.link/" + a.md.file.name) : k.triggerApiHandlers("onChatMessageAgent", a.m) : "s" === a.ut && k.triggerApiHandlers("onChatMessageSystem", a.m) : "n" === a.t && ("AGENT_JOIN_CONVERSATION" === a.m ? (a.md && (a.md.pi && a.md.pi.length) && (e = "https://s3.amazonaws.com/talk-pi/" +
						a.md.pi), k.triggerApiHandlers("onAgentJoinChat", {
						name: a.n,
						position: a.md.pst,
						image: e,
						id: a.uid
					})) : "AGENT_LEFT_CONVERSATION" === a.m && k.triggerApiHandlers("onAgentLeaveChat", {
						name: a.n,
						id: a.uid
					})), this.prepareMessage(a, !1), b.scheduler.calculate()) : (v.chatId = a.md.nchid, this.endChat(a.md.cev))
			};
			I.prototype.prepareMessage = function (a, c, f, d) {
				var g, h, k, l, m = !0;
				"n" === a.t && "v" === a.ut ? "VISITOR_RATING" === a.m && this.changeRating(a.md.rt, !0) : ("v" === a.ut ? (g = z.displayName(), h = a.uid) : (g = a.n, "a" === a.ut ? h = v.profiles[a.md.rsc] :
					"s" === a.ut && a.md && (l = a.md.pi)), "n" !== a.t || "AGENT_JOIN_CONVERSATION" !== a.m && "AGENT_LEFT_CONVERSATION" !== a.m || (m = !1, b.agents.updateAgentPresence(a.m, a.md, a.n, a.md.rsc, !f)), m && (k || (k = this.parseText(a.m)), void 0 === c && (c = !0), a.timeStamp = (new Date(a.co)).getTime(), a.messageId = b.viewHandler.appendMessage({
					message: k,
					name: g,
					type: a.t,
					time: a.co,
					data: a.md,
					isPending: !1,
					senderType: a.ut,
					ownerId: h,
					dontPlaySound: c,
					profileImg: l,
					reDisplay: d,
					timeStamp: a.timeStamp
				}), d || v.chatOrder++, this.messages[v.chatOrder] = a))
			};
			I.prototype.parseText =
				function (a) {
					if (a) return a = a.replace(l.regLineBreaks, l.br), a = this.createUrl(a.split(/\s/), " ")
				};
			I.prototype.createUrl = function (a, c) {
				function f(a) {
					return b.chatHandler.parseUrl(a)
				}

				function d(a) {
					return b.chatHandler.parseEmail(a)
				}
				var g, h, k;
				h = 0;
				for (k = a.length; h < k; h++) - 1 !== a[h].indexOf(l.br) ? (g = a[h].split(l.regBr), a[h] = this.createUrl(g, l.br)) : a[h].match(l.regEmailMatch) ? a[h] = a[h].replace(l.regEmailMatch, d) : (a[h] = a[h].replace(l.regMatchUrl, f), a[h] = a[h].replace(l.regMatchIp, f));
				return a.join(c)
			};
			I.prototype.parseUrl =
				function (a) {
					var b, c = "";
					if ("undefined" !== typeof G && G.unifyUnicode(a) !== a) return a;
					a.match(l.regEmailMatch) && (c = "mailto:");
					if ("mailto:" === c) return b = a.match(l.regEmailMatch)[0], -1 !== b.indexOf("mailto") && (c = ""), a.replace(l.regEmailMatch, '<a href="' + (c + b) + '" title="' + (c + b) + '" style="word-wrap:break-word; white-space:normal;>' + b + "</a> ");
					0 !== a.toLowerCase().indexOf("http") && 0 !== a.toLowerCase().indexOf("ftp") && (c = "http://");
					return '<a target="_blank" href="' + (c + a) + '" title="' + (c + a) + '" style="word-wrap:break-word; white-space:normal;">' +
						a + "</a> "
				};
			I.prototype.parseEmail = function (a) {
				var b = "";
				if ("undefined" !== typeof G && G.unifyUnicode(a) !== a) return a; - 1 === a.indexOf("mailto") && (b = "mailto:");
				return '<a href="' + (b + a) + '" title="' + (b + a) + '">' + a + "</a> "
			};
			I.prototype.sendTextPreview = function (a) {
				var e, f, d = this;
				e = b.eventHandler.getTargetElement(a);
				if (13 === a.keyCode && !a.shiftKey && !s.mobileBrowserName) return b.eventHandler.cancelEvent(a), f = l.trim(e.value), e.value = "", this.sendMessage(f);
				!this.keyDownTimeout && c.showVisitorTyping() && (this.keyDownTimeout =
					setTimeout(function () {
						f = l.trim(e.value);
						"undefined" !== typeof G && (f = G.toShort(f));
						b.socketManager.sendToConnector("notifyMessagePreview", f);
						clearTimeout(d.keyDownTimeout);
						d.keyDownTimeout = 0
					}, 1E3))
			};
			I.prototype.sendMessage = function (a, c, f) {
				var d = (new Date).getTime();
				a = l.trim(a);
				clearTimeout(this.keyDownTimeout);
				this.keyDownTimeout = 0;
				if (!a) return f ? f() : !1;
				"undefined" !== typeof G && (a = G.toShort(a));
				this.previousText && (this.previousTextTime && this.previousText === a && 500 > d - this.previousTextTime) && b.loggingHandler.logIncident("Double message occured", {
					previousText: this.previousText,
					currentText: a,
					currentT: d,
					previousT: this.previousTextTime
				});
				this.previousTextTime = d;
				this.previousText = a;
				c = !!c;
				c = b.viewHandler.appendMessage({
					message: this.parseText(l.rawEncode(a)),
					name: z.displayName(),
					type: "c",
					time: new Date,
					isPending: !0,
					senderType: "v",
					ownerId: z.visitorId,
					dontPlaySound: c
				});
				this.sendMessageToServer(a, c, f)
			};
			I.prototype.sendMessageToServer = function (a, c, f) {
				var d = this,
					g;
				f = f || function (a) {
					b.viewHandler.handleAcknowledgment(a)
				};
				b.socketManager.sendToConnector("sendChatMessage",
					a,
					function (b, h, m) {
						b || (g = ++v.chatOrder, d.messages[g] = {
							ut: "v",
							t: "c",
							m: l.rawEncode(a),
							co: h,
							messageId: c,
							uid: z.visitorId
						}, v.chatVersion = m, d.hasChatStarted() || "offline" === r.pageStatus() || (d.hasChatStarted(!0), k.triggerApiHandlers("onChatStarted", {
							chatId: v.chatId
						})), k.triggerApiHandlers("onChatMessageVisitor", a));
						f({
							error: b,
							messageId: c,
							order: g
						})
					})
			};
			I.prototype.conversationUpdate = function (a) {
				a = a || {};
				var e, f, d = a.cver || 0,
					g = a.c || [];
				f = v.chatBuffer;
				v.chatSynced = !0;
				if (!(v.chatVersion >= d)) {
					a = 0;
					for (e = f.length; a <
						e; a++) f[a].cver > d && g.push(f[a]);
					a = 0;
					for (e = g.length; a < e; a++) f = g[a], f.md && f.md.ao || this.prepareMessage(f, !1);
					this.visitorHasMessaged && (!this.agentHasMessaged && c.showWaitTime) && b.viewHandler.addWaitTime();
					v.chatVersion = d;
					this.isScrollbar = b.viewHandler.isChatScrollbar();
					b.viewHandler.scrollToBottom()
				}
			};
			I.prototype.handleAgentTyping = function (a) {
				var c = v.profiles[a];
				c && (v.agentProfiles[c] && !this.agentsTyping[a]) && (this.agentsTyping[a] = !0, this.agentProfilesTyping[c] ? this.agentProfilesTyping[c]++ : (this.agentProfilesTyping[c] =
					1, b.viewHandler.appendAgentIsTypingElement(c)))
			};
			I.prototype.handleAgentStoppedTyping = function (a) {
				var c = v.profiles[a];
				this.agentsTyping[a] && delete this.agentsTyping[a];
				!this.agentProfilesTyping[c] || 0 < --this.agentProfilesTyping[c] || (delete this.agentProfilesTyping[c], b.viewHandler.removeAgentTypingElement(c))
			};
			I.prototype.changeRating = function (a, c) {
				v.rating() === a && (a = 0);
				v.rating(a);
				c || (b.socketManager.sendToConnector("setRating", a), k.triggerApiHandlers("onChatSatisfaction", v.rating()))
			};
			I.prototype.toggleSound =
				function (a) {
					var e = !c.soundOn();
					void 0 !== a && (e = a);
					c.soundOn(e);
					void 0 === a && b.socketManager.sendToConnector("toggleSound", e)
				};
			I.prototype.clearChatMessages = function () {
				this.agentHasMessaged = this.visitorHasMessaged = !1;
				this.messageBuffer = [];
				this.messages = {};
				this.agentsTyping = [];
				this.agentProfilesTyping = [];
				this.lastMessageOwner = null;
				v.chatOrder = 0;
				v.chatSynced = !1;
				v.chatBuffer = []
			};
			I.prototype.startNewChat = function () {
				this.clearChatMessages();
				b.viewHandler.removeWaitTime();
				b.viewHandler.resetView();
				b.viewHandler.handleRestartChat();
				v.chatSynced = !0;
				s.mobileBrowserName || ("max" === r.chatWindowState() ? b.viewHandler.maximizeWidget() : b.viewHandler.minimizeWidget());
				this.hasChatEnded = !1
			};
			I.prototype.endChat = function (a) {
				b.viewHandler.handleEndChat();
				b.agents.clearAgents();
				this.hasChatEnded = !0;
				this.hasChatStarted(!1);
				v.chatEndVersion = a;
				k.triggerApiHandlers("onChatEnded")
			};
			I.prototype.sendFileMessage = function (a) {
				var c = this,
					f = {
						fileName: a.filename,
						name: a.name,
						type: a.extension,
						mimeType: a.mimeType,
						size: a.size
					};
				b.socketManager.sendToConnector("fileUploadMessage",
					f,
					function (d, g, h) {
						d || (b.viewHandler.fileUploaded(a.handle), f.fileName = l.rawEncode(f.fileName), messageId = b.viewHandler.appendMessage({
							message: "FILE",
							name: z.displayName(),
							type: "c",
							time: g,
							isPending: !1,
							senderType: "v",
							ownerId: z.visitorId,
							dontPlaySound: !0,
							data: {
								file: f
							}
						}), chatOrder = ++v.chatOrder, c.messages[chatOrder] = {
							ut: "v",
							t: "c",
							m: "FILE",
							co: g,
							messageId: messageId,
							uid: z.visitorId,
							md: {
								file: f
							}
						}, v.chatVersion = h, k.triggerApiHandlers("onFileUpload", "https://tawkto.link/" + f.name))
					})
			};
			I.prototype.isChatOngoing =
				function () {
					return !this.hasChatEnded && this.visitorHasMessaged && 0 < b.agents.totalAgents()
				};
			I.prototype.isVisitorEngaged = function () {
				return !this.hasChatEnded && this.visitorHasMessaged
			};
			I.prototype.triggerEndChat = function () {
				var a = this;
				b.socketManager.sendToConnector("endVisitorChat", {}, function (b, c) {
					b || (v.chatId = c.nextChatId, a.endChat(c.chatEndVersion))
				})
			};
			I.prototype.getMessageObjectById = function (a) {
				var b = null,
					c;
				for (c in this.messages)
					if (this.messages[c].messageId === a) {
						b = this.messages[c];
						break
					}
				return b
			};
			var ma = function () {
				this.agentsCount = 0;
				this.totalAgents = w.observable(0)
			};
			ma.prototype.updateAgentPresence = function (a, b, f, d, g) {
				if (!c.showAgentBar) return !0;
				if ("AGENT_JOIN_CONVERSATION" !== a && "AGENT_LEFT_CONVERSATION" !== a) return !1;
				switch (a) {
					case "AGENT_JOIN_CONVERSATION":
						return this.addAgentToList(b, f, d, g);
					case "AGENT_LEFT_CONVERSATION":
						return this.removeAgentFromList(b, d, g)
				}
			};
			ma.prototype.addAgentToList = function (a, c, f, d) {
				var g = v.agents[f];
				if (g)
					if (g.seq.time < a.seq.time || g.seq.time === a.seq.time && g.seq.inc <
						a.seq.inc) {
						g.seq = a.seq;
						if (g.pid === a.pid) return !1;
						this.changeAgentProfile(g.pid, d);
						g.pid = a.pid;
						v.profiles[f] = a.pid
					} else return !1;
				else v.agents[f] = a, v.profiles[f] = a.pid;
				if (!a.pid) return !1;
				this.totalAgents(this.totalAgents() + 1);
				if ("undefined" !== typeof v.agentProfiles[a.pid]) return v.agentProfiles[a.pid].pi = a.pi, v.agentProfiles[a.pid].count++, !1;
				c = {
					pi: a.pi,
					pst: a.pst || "",
					pid: a.pid,
					n: c,
					count: 1
				};
				v.agentProfiles[a.pid] = c;
				d && b.viewHandler.appendAgent(c);
				return !0
			};
			ma.prototype.changeAgentProfile = function (a,
				c) {
				var f;
				f = v.agentProfiles[a];
				this.decrementProfileCount(a, c) && c && (f = {
					message: b.languageParser.translate("chat", "AGENT_LEFT_CONVERSATION", {
						n: "<b>" + f.n + "</b>"
					}),
					name: "",
					type: "n",
					time: new Date,
					isPending: !1,
					senderType: "a",
					ownerId: "",
					dontPlaySound: !0
				}, v.chatOrder++, b.chatHandler.messages[v.chatOrder] = f, b.viewHandler.appendMessage(f))
			};
			ma.prototype.removeAgentFromList = function (a, b, c) {
				var d = v.agents[b];
				if (!d) return v.agents[b] = a, !1;
				b = d.pid;
				if (d.seq.time < a.seq.time || d.seq.time === a.seq.time && d.seq.inc < a.seq.inc) d.seq =
					a.seq, d.pid = null;
				else return !1;
				this.totalAgents(this.totalAgents() - 1);
				return this.decrementProfileCount(b, c)
			};
			ma.prototype.decrementProfileCount = function (a, c) {
				var f = v.agentProfiles[a];
				if (f) return f.count--, 1 > f.count ? (delete v.agentProfiles[a], c && b.viewHandler.removeAgent(a), !0) : !1
			};
			ma.prototype.clearAgents = function () {
				this.agentsCount = 0;
				this.totalAgents(0);
				v.agentProfiles = {};
				v.agents = {};
				v.profiles = {};
				b.viewHandler.clearAgentFooter();
				b.viewHandler.clearAgentHeader();
				b.viewHandler.closeAgentList()
			};
			var da = function () {
				var a = this;
				this.stack = [];
				this.socketConnector = new oa;
				this.events = {};
				b.eventEmitter.on("socketReady", function () {
					a.clearStack();
					b.viewHandler && b.visitorHandler.sendNavigationEvent()
				})
			};
			da.prototype.initConnector = function () {
				this.socketConnector.init()
			};
			da.prototype.sendToConnector = function (a, b, c) {
				if (u.connected)
					if (void 0 !== c || "function" === typeof b) this.safeCallback(a, b, c);
					else try {
						this.socketConnector.emit(a, b, c)
					} catch (d) {
						q.handleError("Unable to emit to socket connector in sendToConnector for command : " +
							a + " with data :" + JSON.stringify(b), d.fileName, d.lineNumber, d.stack)
					} else this.addToStack(a, b, c)
			};
			da.prototype.addToStack = function (a, b, c) {
				"sendChatMessage" === a && delete this.events.notifyMessagePreview;
				"notifyMessagePreview" === a ? this.events[a] = {
					command: a,
					data: b,
					callback: c
				} : this.stack.push({
					command: a,
					data: b,
					callback: c
				})
			};
			da.prototype.clearStack = function () {
				var a = this;
				this.stack.forEach(function (b) {
					a.sendToConnector(b.command, b.data, b.callback)
				});
				for (var b in this.events) a.sendToConnector(a.events[b].command,
					a.events[b].data, a.events[b].callback);
				this.stack = [];
				this.events = {}
			};
			da.prototype.safeCallback = function (a, b, c) {
				var d, g;
				"function" === typeof b && (c = b, b = null);
				d = setTimeout(function () {
					c(!0);
					throw Error("Socket server did not execute the callback for " + a + " with data : " + JSON.stringify(b));
				}, 35E3);
				g = function () {
					clearTimeout(d);
					g = function () {};
					c.apply(null, arguments)
				};
				try {
					null === b ? this.socketConnector.emit(a, g) : this.socketConnector.emit(a, b, g)
				} catch (h) {
					q.handleError("Unable to emit to socket connector in safeCallback for command : " +
						a + " with data :" + JSON.stringify(b), h.fileName, h.lineNumber, h.stack)
				}
			};
			da.prototype.disconnectConnector = function () {
				this.socketConnector.disconnectSocket()
			};
			da.prototype.connectorListeningOn = function (a) {
				return 0 !== this.socketConnector.listeners(a).length
			};
			da.prototype.isForcedDisconnect = function () {
				return this.socketConnector.forceDisconnected
			};
			var T = function () {
				this.started = this.maximize = this.isDocumentReady = !1;
				this.previousSessionKey = null;
				this.waitingForLanguage = !1;
				this.startTime = u.startTime;
				this.versionReloadTimeout =
					null;
				this.dataIsReady = this.viewIsReady = !1
			};
			T.prototype.load = function () {
				var a = this;
				L.pageId = $_Tawk_AccountKey;
				c.widgetId = $_Tawk_WidgetId;
				"undefined" !== typeof L.pageId && "undefined" !== typeof c.widgetId && (m.processSettings(u.widgetSettings), this.init(), this.isDocumentReady || (b.eventHandler.listen(document, "DOMContentLoaded", function () {
					a.init()
				}, "domloaded"), b.eventHandler.listen(document, "readystatechange", function () {
					("complete" === document.readyState || "interactive" === document.readyState && document.body) &&
					a.init()
				}, "domstatechange"), b.eventHandler.listen(d, "load", function () {
					a.init()
				}, "windowload")), b.eventEmitter.on("removeWidget", function (b) {
					a.removeWidget()
				}), b.eventEmitter.on("submitConsent", function (b) {
					a.registerWithConsent()
				}))
			};
			T.prototype.init = function () {
				var a, e;
				if ("XMLHttpRequest" in d && "withCredentials" in new XMLHttpRequest && (x.cookieEnabled && !this.isDocumentReady) && (this.isDocumentReady = !0, e = l.parseQueryString(), !e.$_tawk_beacon && "operamini" !== s.mobileBrowserName)) {
					if (a = l.getReloadedScript()) a =
						l.parseQueryString(a.src), r.restarted = a.restarted, this.maximize = a.maximized;
					X();
					k.isPopup && (r.transferKey = e.$_tawk_tk, r.sessionKey = e.$_tawk_sk, c.isPopup = !0);
					k.embedded && (c.isEmbedded = !0, s.mobileBrowserName = null);
					s.mobileBrowserName ? (c.isPopup ? b.viewHandler = new fa : this.initRenderer(s.mobileBrowserName), b.formHandler = new J) : (b.formHandler = new J, b.viewHandler = new cb);
					b.viewHandler && (b.sessionHandler.setVisitorAttributes(), k.triggerApiHandlers("onBeforeLoad"), this.bootStrap())
				}
			};
			T.prototype.bootStrap =
				function () {
					var a = this;
					this.dataIsReady = this.viewIsReady = !1;
					setTimeout(function () {
						b.viewHandler.begin();
						a.viewIsReady = !0;
						a.setupDone()
					}, 0);
					setTimeout(function () {
						h.register()
					}, 0)
				};
			T.prototype.initRenderer = function (a) {
				switch (a) {
					case "chrome":
						b.viewHandler = new Ba(a);
						break;
					case "safari":
						b.viewHandler = new pa(a);
						break;
					case "opera":
						b.viewHandler = new Ca(a);
						break;
					case "android":
						b.viewHandler = new ka(a);
						break;
					case "android2.3":
						b.viewHandler = new Da(a);
						break;
					case "android2":
						b.viewHandler = new la(a);
						break;
					case "firefox":
						b.viewHandler =
							new Ea(a);
						break;
					case "ie":
						b.viewHandler = 10 > s.version ? new la(a) : new Fa(a);
						break;
					case "blackberry":
						b.viewHandler = new la(a);
						break;
					case "nokia":
						b.viewHandler = new la(a);
						break;
					case "uc":
						b.viewHandler = new ka(a)
				}
				b.viewHandler && b.viewHandler.init()
			};
			T.prototype.begin = function (a) {
				h.registerStarted = !1;
				h.clearTimers();
				h.registerTime = (new Date).getTime() - h.registerStart;
				h.registerStart = null;
				a.error ? "USER_ERROR" === a.error || "SERVER_DOWN" === a.error ? this.hideWidget() : h.retryRegister() : (b.activityManager.initActivityReset(),
					this.started ? this.reinited(a) : (this.started = !0, this.extractRegisterData(a), this.dataIsReady = !0, this.setupDone()))
			};
			T.prototype.extractRegisterData = function (a) {
				a.wdgt && (a.wdgt.lc !== u.widgetSettings.lc && (this.waitingForLanguage = !0, l.insertScript("https://static-v.tawk.to/694/languages/" + a.wdgt.lc + ".js")), m.processSettings(a.wdgt));
				a.rcf && c.consentOption ? (this.needConsent = !0, c.showConsentForm = !0) : (this.needConsent = !1, c.showConsentForm = !1);
				"max" !== c.onClickAction || s.mobileBrowserName || (this.maximize =
					"max" === a.cw, r.chatWindowState(a.cw));
				r.criticalVersion = a.cjsv || 0;
				r.visitorSocketServer = a.vss;
				r.sessionKey = a.sk;
				r.transferKey = a.tk;
				r.transferedSession = !!a.ts;
				r.serverVersion = a.jsv || 0;
				this.needConsent || (b.visitorHandler.updateVisitorUUID(a), b.visitorHandler.updateVisitorInformation(a));
				c.soundOn() && c.soundOn(a.sdo);
				c.whiteLabel(a.wl);
				a.wl && (c.key = l.h(a.wl.label));
				c.scheduleTimezone = a.wstz;
				r.prechatFormSubmitted(!!a.pcfs);
				r.departments = l.isArray(a.dptst) ? a.dptst.reverse() : [];
				r.pageStatusVersion = a.asver ||
					0;
				r.waitTime = a.ewt ? 1E3 * a.ewt : 6E4;
				L.tawkId = a.twid;
				L.pageName(l.rawDecode(a.pgn));
				r.pageStatus(a.ast || "offline");
				r.chatBubbleClosed(!!a.bblc);
				v.chatVersion = a.cver || 0;
				v.chatDepartment = a.dpt || "any";
				v.chatHistory = a.c || [];
				v.chatId = a.chid;
				c.webRTCSettings(a.webrtc);
				c.brandingRedirect(a.otl);
				r.lastMessageTimestamp = a.lmst
			};
			T.prototype.initBuildChat = function () {
				b.chatHandler.parseHistory();
				b.viewHandler.applyWhiteLabelSettings();
				this.showWidget();
				this.needConsent || (b.socketManager.initConnector(), delete u.init);
				u.ready = !0;
				k.triggerApiHandlers("onLoad")
			};
			T.prototype.reinited = function (a) {
				var c = r.sessionKey;
				this.extractRegisterData(a);
				c !== a.sk ? (b.chatHandler.clearChatMessages(), b.viewHandler.resetView(), b.agents.clearAgents()) : (r.visitorSocketServer = a.vss, r.sessionKey = a.sk, r.transferKey = a.tk, r.transferedSession = !!a.ts, r.serverVersion = a.jsv || 0, b.visitorHandler.updateVisitorUUID(a));
				b.scheduler.setup();
				b.viewHandler.updateViewByStatus(r.pageStatus());
				b.chatHandler.parseHistory(!0);
				b.socketManager.initConnector()
			};
			T.prototype.criticalRefresh = function (a, e, f) {
				var g = this,
					h = (new Date).getTime(),
					k = "https://embed.tawk.to/" + L.pageId + "/" + $_Tawk_WidgetId + "?refresh=true&";
				if (c.isPopup) return d.location.reload(!!e);
				this.dataIsReady = this.viewIsReady = !1;
				this.removeWidget();
				e && (k += "restarted=true&");
				f && (k += "maximized=true&");
				k += "v=" + a || r.serverVersion || r.currentVersion;
				delete u.downloaded;
				l.insertScript(k, "TawkScript-" + h);
				var m = setInterval(function () {
						d.$_Tawk.startTime !== g.startTime && (b = null, clearInterval(m), clearTimeout(g.versionReloadTimeout))
					},
					200)
			};
			T.prototype.removeWidget = function () {
				var a;
				b && (b.viewHandler && b.viewHandler.iframeContainer) && (a = document.getElementById(b.viewHandler.iframeContainer.elementId));
				h.clearTimers();
				b.eventHandler.clearEvents();
				b.activityManager.cleanUp();
				b.socketManager.disconnectConnector();
				b.eventEmitter.removeAllListeners();
				b.scheduler.cleanUp();
				clearTimeout(l.checkWhiteLabelRef);
				b.viewHandler.messagePreview && b.viewHandler.messagePreview.hide();
				"undefined" !== typeof l.messagePreviewCheckWhiteLabelRef && clearTimeout(l.messagePreviewCheckWhiteLabelRef);
				a && a.parentNode.removeChild(a)
			};
			T.prototype.setupDone = function (a) {
				a && (b.languageParser.language = u.language, this.waitingForLanguage = !1);
				this.viewIsReady && (this.dataIsReady && !this.waitingForLanguage) && this.initBuildChat()
			};
			T.prototype.showWidget = function () {
				b.scheduler.setup();
				!c.isPopup && c.hideWidgetOnLoad || b.viewHandler.show()
			};
			T.prototype.hideWidget = function () {
				b && b.viewHandler && b.viewHandler.hideWidget()
			};
			T.prototype.registerWithConsent = function () {
				this.maximize = !0;
				aa.storeSessionInformation(!1, "cf");
				h.register()
			};
			u.languageUpdater = function () {
				if (b && b.main && b.main.waitingForLanguage) {
					b.main.setupDone(!0);
					try {
						b.eventEmitter.emit("localeChanged"), l.updateFonts()
					} catch (a) {
						q.handleError("Unable to emit locale changed", a.fileName, a.lineNumber, a.stack)
					}
				}
			};
			var ta = function (a, b) {
				this.language = a;
				this.notFoundCallback = "function" === typeof b ? b : function () {}
			};
			ta.prototype.translate = function (a, b, c, d) {
				var g, h;
				g = [];
				var k = this.language || d;
				if (!k[a]) return this.notFoundCallback(Error("Missing context : {" + a + "}, {" +
					b + "}")), b;
				d = k[a][b];
				if (!d) return this.notFoundCallback(Error("Missing key : {" + a + "}, {" + b + "}")), b;
				b = d.pluralVars ? d.pluralVars.length : 0;
				h = d.vars ? d.vars.length : 0;
				if (0 < b) {
					for (a = 0; a < b; a++) g.push(k.pluralFormFunction(c[d.pluralVars[a]]));
					g = d.message[g.join("_")];
					for (a = 0; a < b; a++) g = g.replace(RegExp("#" + d.pluralVars[a], "g"), this.escapeStringReplacePlacement(c[d.pluralVars[a]]))
				} else g = d.message;
				if (0 < h)
					for (a = 0; a < h; a++) g = g.replace(RegExp("#" + d.vars[a], "g"), this.escapeStringReplacePlacement(c[d.vars[a]]));
				return g
			};
			ta.prototype.escapeStringReplacePlacement = function (a) {
				return "string" === typeof a ? a.replace(/\$/g, "$$$") : a
			};
			ta.prototype.hasTranslation = function (a, b, c) {
				c = c || this.language;
				return !!(c && c[a] && c[a][b])
			};
			"undefined" !== typeof module && (module.exports = ta);
			b.eventEmitter = new EventEmitter;
			b.eventEmitter.on("error", function (a) {
				q.handleError("EventEmitter on error", a.fileName, a.lineNumber, a.stack)
			});
			b.loggingHandler = new qa;
			b.eventHandler = new ea;
			b.activityManager = new sa;
			b.scheduler = new ga;
			b.main = new T;
			b.languageParser =
				new ta(u.language);
			b.socketManager = new da;
			b.sessionHandler = new Q;
			b.chatHandler = new I;
			b.agents = new ma;
			b.visitorHandler = new $;
			b.audioPlayer = new Ka;
			h = new V;
			b.fileUploadHandler = new La;
			if (void 0 !== u.downloaded) b.eventHandler.clearEvents(), b.eventEmitter.removeAllListeners(), b = null;
			else {
				u.downloaded = !0;
				if ("undefined" !== typeof d.Prototype && "string" === typeof d.Prototype.Version && 1.7 > parseFloat(d.Prototype.Version.substr(0, 3), 10) && "undefined" !== typeof Array.prototype.toJSON) {
					var db = JSON.stringify;
					JSON.stringify =
						function (a) {
							var b = Array.prototype.toJSON;
							delete Array.prototype.toJSON;
							a = db(a);
							Array.prototype.toJSON = b;
							return a
						}
				}
				var eb = d.history.pushState,
					fb = d.history.replaceState;
				d.history.pushState = function (a, c, d) {
					eb.apply(history, arguments);
					var g = d && "string" === typeof d ? d.indexOf("#max-widget") : -1;
					b && (b.visitorHandler && -1 === g) && b.visitorHandler.sendNavigationEvent()
				};
				d.history.replaceState = function (a, c, d) {
					fb.apply(history, arguments);
					b && b.visitorHandler && b.visitorHandler.sendNavigationEvent()
				};
				b.main.load()
			}
		} catch (ua) {
			if (q) q.handleError(ua.message,
				"tawk.js", ua.lineNumber || ua.line, ua.stack);
			else throw Error("tawk : " + ua.message);
		}
	}).call(this, window.$_Tawk);

})(window);