/*
let tags = {
  BQNval: Tag.define(),
  BQNstring: Tag.define(),
  BQNnumber: Tag.define(),
  BQNnothing: Tag.define(),
  BQNparen: Tag.define(),
  BQNdelim: Tag.define(),
  BQNlist: Tag.define(),
  BQNblock: Tag.define(),
  BQNfun: Tag.define(),
  BQNmod1: Tag.define(),
  BQNmod2: Tag.define(),
  BQNcomment: Tag.define(),
};

export let highlightLight = HighlightStyle.define(
  [
    { tag: tags.BQNval, color: "#444" },
    { tag: tags.BQNstring, color: "#3e99ab" },
    { tag: tags.BQNnumber, color: "#a73227" },
    { tag: tags.BQNnothing, color: "#a73227" },
    { tag: tags.BQNparen, color: "#5a524a" },
    { tag: tags.BQNdelim, color: "#9c7dc1" },
    { tag: tags.BQNlist, color: "#9c7dc1" },
    { tag: tags.BQNblock, color: "#862f9e" },
    { tag: tags.BQNfun, color: "#3aa548" },
    { tag: tags.BQNmod1, color: "#93428b" },
    { tag: tags.BQNmod2, color: "#998819" },
    { tag: tags.BQNcomment, color: "#3f3daa" },
  ],
  { themeType: "light" },
);

export let highlightDark = HighlightStyle.define(
  [
    { tag: tags.BQNval, color: "#eee" },
    { tag: tags.BQNstring, color: "#3e99ab" },
    { tag: tags.BQNnumber, color: "#a73227" },
    { tag: tags.BQNnothing, color: "#a73227" },
    { tag: tags.BQNparen, color: "#5a524a" },
    { tag: tags.BQNdelim, color: "#9c7dc1" },
    { tag: tags.BQNlist, color: "#9c7dc1" },
    { tag: tags.BQNblock, color: "#862f9e" },
    { tag: tags.BQNfun, color: "#3aa548" },
    { tag: tags.BQNmod1, color: "#93428b" },
    { tag: tags.BQNmod2, color: "#998819" },
    { tag: tags.BQNcomment, color: "#3f3daa" },
  ],
  { themeType: "dark" },
);

let bqnStyleTags = styleTags({
  COMMENT: tags.BQNcomment,
  STRING: tags.BQNstring,
  CHAR: tags.BQNstring,
  NULL: tags.BQNstring,
  NUMBER: tags.BQNnumber,
  NOTHING: tags.BQNnothing,
  PAREN: tags.BQNparen,
  DELIM: tags.BQNdelim,
  STRIDE: tags.BQNdelim,
  LIST: tags.BQNlist,
  BLOCK: tags.BQNblock,
  FUN: tags.BQNfun,
  PRIMFUN: tags.BQNfun,
  SYSFUN: tags.BQNfun,
  SPECFUN: tags.BQNfun,
  MOD1: tags.BQNmod1,
  PRIMMOD1: tags.BQNmod1,
  SYSMOD1: tags.BQNmod1,
  MOD2: tags.BQNmod2,
  PRIMMOD2: tags.BQNmod2,
  SYSMOD2: tags.BQNmod2,
  SPECMOD2: tags.BQNmod2,
  VAL: tags.BQNval,
});

export let language = LRLanguage.define({
  parser: parser.configure({
    props: [
      bqnStyleTags,
      indentNodeProp.add({
        BLOCK: delimitedIndent({ closing: "}", align: true }),
      }),
    ],
  }),
  languageData: {
    commentTokens: { line: "#" },
    indentOnInput: /^\s*(\]|}|⟩)$/,
    closeBrackets: { brackets: ["(", "{", "⟨", "[", "'", '"'] },
  },
});
*/

export type Glyph = {
  glyph: string;
  key: string | null;
  tag: string;
  title: string;
};

export let glyphs: Glyph[] = [
  {
    glyph: "+",
    title: "Conjuage/Add",
    tag: "BQNfun",
    key: null,
  },
  {
    glyph: "-",
    title: "Negate/Substract",
    tag: "BQNfun",
    key: null,
  },
  {
    glyph: "×",
    title: "Sign/Multiply",
    tag: "BQNfun",
    key: "=",
  },
  {
    glyph: "÷",
    title: "Reciprocal/Divide",
    tag: "BQNfun",
    key: "-",
  },
  {
    glyph: "⋆",
    title: "Exponential/Power",
    tag: "BQNfun",
    key: "+",
  },
  {
    glyph: "√",
    title: "Square root/Root",
    tag: "BQNfun",
    key: "_",
  },
  {
    glyph: "⌊",
    title: "Floor/Minimum",
    tag: "BQNfun",
    key: "b",
  },
  {
    glyph: "⌈",
    title: "Celing/Maximum",
    tag: "BQNfun",
    key: "B",
  },
  {
    glyph: "∧",
    title: "Sort up/And",
    tag: "BQNfun",
    key: "t",
  },
  {
    glyph: "∨",
    title: "Sort down/Or",
    tag: "BQNfun",
    key: "v",
  },
  {
    glyph: "¬",
    title: "Not/Span",
    tag: "BQNfun",
    key: "~",
  },
  {
    glyph: "|",
    title: "Absolute value/Modulus",
    tag: "BQNfun",
    key: null,
  },
  {
    glyph: "≤",
    title: "Less than or equal to",
    tag: "BQNfun",
    key: "<",
  },
  {
    glyph: "<",
    title: "Enclose/Less than",
    tag: "BQNfun",
    key: null,
  },
  {
    glyph: ">",
    title: "Merge/Greater than",
    tag: "BQNfun",
    key: null,
  },
  {
    glyph: "≥",
    title: "Greater than or equal to",
    tag: "BQNfun",
    key: ">",
  },
  {
    glyph: "=",
    title: "Rank/Equals",
    tag: "BQNfun",
    key: null,
  },
  {
    glyph: "≠",
    title: "Length/Not equals",
    tag: "BQNfun",
    key: "/",
  },
  {
    glyph: "≡",
    title: "Depth/Match",
    tag: "BQNfun",
    key: "m",
  },
  {
    glyph: "≢",
    title: "Shape/Not match",
    tag: "BQNfun",
    key: "M",
  },
  {
    glyph: "⊣",
    title: "Identity/Left",
    tag: "BQNfun",
    key: "{",
  },
  {
    glyph: "⊢",
    title: "Identity/Right",
    tag: "BQNfun",
    key: "}",
  },
  {
    glyph: "⥊",
    title: "Deshape/Reshape",
    tag: "BQNfun",
    key: "z",
  },
  {
    glyph: "∾",
    title: "Join/Join to",
    tag: "BQNfun",
    key: ",",
  },
  {
    glyph: "≍",
    title: "Solo/Couple",
    tag: "BQNfun",
    key: ".",
  },
  {
    glyph: "⋈",
    title: "Enlist/Pair",
    tag: "BQNfun",
    key: "Z",
  },
  {
    glyph: "↑",
    title: "Prefixes/Take",
    tag: "BQNfun",
    key: "r",
  },
  {
    glyph: "↓",
    title: "Suffixes/Drop",
    tag: "BQNfun",
    key: "c",
  },
  {
    glyph: "↕",
    title: "Range/Windows",
    tag: "BQNfun",
    key: "d",
  },
  {
    glyph: "«",
    title: "Shift before",
    tag: "BQNfun",
    key: "H",
  },
  {
    glyph: "»",
    title: "Shift after",
    tag: "BQNfun",
    key: "L",
  },
  {
    glyph: "⌽",
    title: "Reverse/Rotate",
    tag: "BQNfun",
    key: "q",
  },
  {
    glyph: "⍉",
    title: "Transpose/Reorder axis",
    tag: "BQNfun",
    key: "a",
  },
  {
    glyph: "/",
    title: "Indices/Replicate",
    tag: "BQNfun",
    key: null,
  },
  {
    glyph: "⍋",
    title: "Grade up/Bins up",
    tag: "BQNfun",
    key: "T",
  },
  {
    glyph: "⍒",
    title: "Grade down/Bins down",
    tag: "BQNfun",
    key: "V",
  },
  {
    glyph: "⊏",
    title: "First cell/Select",
    tag: "BQNfun",
    key: "i",
  },
  {
    glyph: "⊑",
    title: "First/Pick",
    tag: "BQNfun",
    key: "I",
  },
  {
    glyph: "⊐",
    title: "Classify/Index of",
    tag: "BQNfun",
    key: "o",
  },
  {
    glyph: "⊒",
    title: "Occurrence count/Progressive index of",
    tag: "BQNfun",
    key: "O",
  },
  {
    glyph: "∊",
    title: "Mark first/Member of",
    tag: "BQNfun",
    key: "e",
  },
  {
    glyph: "⍷",
    title: "Deduplicate/Find",
    tag: "BQNfun",
    key: "E",
  },
  {
    glyph: "⊔",
    title: "Group indices/Group",
    tag: "BQNfun",
    key: "u",
  },
  {
    glyph: "!",
    title: "Assert/Assert with message",
    tag: "BQNfun",
    key: null,
  },
  {
    glyph: "˙",
    title: "Constant",
    tag: "BQNmod1",
    key: '"',
  },
  {
    glyph: "˜",
    title: "Self/Swap",
    tag: "BQNmod1",
    key: "`",
  },
  {
    glyph: "∘",
    title: "Atop",
    tag: "BQNmod2",
    key: "j",
  },
  {
    glyph: "○",
    title: "Over",
    tag: "BQNmod2",
    key: "k",
  },
  {
    glyph: "⊸",
    title: "Before/Bind",
    tag: "BQNmod2",
    key: "h",
  },
  {
    glyph: "⟜",
    title: "After/Bind",
    tag: "BQNmod2",
    key: "l",
  },
  {
    glyph: "⌾",
    title: "Under",
    tag: "BQNmod2",
    key: "K",
  },
  {
    glyph: "⊘",
    title: "Valences",
    tag: "BQNmod2",
    key: "%",
  },
  {
    glyph: "◶",
    title: "Choose",
    tag: "BQNmod2",
    key: "$",
  },
  {
    glyph: "⎊",
    title: "Catch",
    tag: "BQNmod2",
    key: "^",
  },
  {
    glyph: "⎉",
    title: "Rank",
    tag: "BQNmod2",
    key: "!",
  },
  {
    glyph: "˘",
    title: "Cells",
    tag: "BQNmod1",
    key: "1",
  },
  {
    glyph: "⚇",
    title: "Depth",
    tag: "BQNmod2",
    key: "@",
  },
  {
    glyph: "¨",
    title: "Each",
    tag: "BQNmod1",
    key: "2",
  },
  {
    glyph: "⌜",
    title: "Table",
    tag: "BQNmod1",
    key: "4",
  },
  {
    glyph: "⍟",
    title: "Repeat",
    tag: "BQNmod2",
    key: "#",
  },
  {
    glyph: "⁼",
    title: "Undo",
    tag: "BQNmod1",
    key: "3",
  },
  {
    glyph: "´",
    title: "Fold",
    tag: "BQNmod1",
    key: "5",
  },
  {
    glyph: "˝",
    title: "Insert",
    tag: "BQNmod1",
    key: "6",
  },
  {
    glyph: "`",
    title: "Scan",
    tag: "BQNmod1",
    key: null,
  },
  {
    glyph: "←",
    title: "Define",
    tag: "BQNval",
    key: "[",
  },
  {
    glyph: "⇐",
    title: "Export",
    tag: "BQNval",
    key: "?",
  },
  {
    glyph: "↩",
    title: "Change",
    tag: "BQNval",
    key: "'",
  },
  {
    glyph: "⋄",
    title: "Separator",
    tag: "BQNlist",
    key: ";",
  },
  {
    glyph: ",",
    title: "Separator",
    tag: "BQNval",
    key: null,
  },
  {
    glyph: ".",
    title: "Namespace field",
    tag: "BQNval",
    key: null,
  },
  {
    glyph: "(",
    title: "Begin expression",
    tag: "BQNval",
    key: null,
  },
  {
    glyph: ")",
    title: "End expression",
    tag: "BQNval",
    key: null,
  },
  {
    glyph: "{",
    title: "Begin block",
    tag: "BQNblock",
    key: null,
  },
  {
    glyph: "}",
    title: "End block",
    tag: "BQNblock",
    key: null,
  },
  {
    glyph: ";",
    title: "Next body",
    tag: "BQNval",
    key: null,
  },
  {
    glyph: ":",
    title: "Header",
    tag: "BQNval",
    key: null,
  },
  {
    glyph: "?",
    title: "Predicate",
    tag: "BQNval",
    key: null,
  },
  {
    glyph: "⟨",
    title: "Begin list",
    tag: "BQNlist",
    key: "(",
  },
  {
    glyph: "⟩",
    title: "End list",
    tag: "BQNlist",
    key: ")",
  },
  {
    glyph: "‿",
    title: "Strand",
    tag: "BQNlist",
    key: " ",
  },
  {
    glyph: "·",
    title: "Nothing",
    tag: "BQNnothing",
    key: ":",
  },
  {
    glyph: "•",
    title: "System",
    tag: "BQNval",
    key: "0",
  },
  {
    glyph: "𝕨",
    title: "Left argument",
    tag: "BQNval",
    key: "w",
  },
  {
    glyph: "𝕎",
    title: "Left argument (as function)",
    tag: "BQNfun",
    key: "W",
  },
  {
    glyph: "𝕩",
    title: "Right argument",
    tag: "BQNval",
    key: "x",
  },
  {
    glyph: "𝕏",
    title: "Right argument (as function)",
    tag: "BQNfun",
    key: "X",
  },
  {
    glyph: "𝕗",
    title: "Modifier left operand",
    tag: "BQNval",
    key: "f",
  },
  {
    glyph: "𝔽",
    title: "Modifier left operand (as function)",
    tag: "BQNfun",
    key: "F",
  },
  {
    glyph: "𝕘",
    title: "Modifier right operand",
    tag: "BQNval",
    key: "g",
  },
  {
    glyph: "𝔾",
    title: "Modifier right operand (as function)",
    tag: "BQNfun",
    key: "G",
  },
  {
    glyph: "𝕤",
    title: "Current function (as subject)",
    tag: "BQNval",
    key: "s",
  },
  {
    glyph: "𝕊",
    title: "Current function",
    tag: "BQNfun",
    key: "S",
  },
  {
    glyph: "𝕣",
    title: "Current modifier",
    tag: "BQNmod2",
    key: "R",
  },
  {
    glyph: "¯",
    title: "Minus",
    tag: "BQNnumber",
    key: "9",
  },
  {
    glyph: "π",
    title: "Pi",
    tag: "BQNnumber",
    key: "p",
  },
  {
    glyph: "∞",
    title: "Infinity",
    tag: "BQNnumber",
    key: "8",
  },
  {
    glyph: "@",
    title: "Null character",
    tag: "BQNstring",
    key: null,
  },
  {
    glyph: "#",
    title: "Comment",
    tag: "BQNcomment",
    key: null,
  },
];

// export let glyphsMap: Map<string, Glyph> = new Map();
// for (let glyph of glyphs) glyphsMap.set(glyph.glyph, glyph);

// export let keymap: Map<string, Glyph> = new Map();
// for (let glyph of glyphs) if (glyph.key != null) keymap.set(glyph.key, glyph);

// /**
//  * BQN glyph input method using \-key as a dead key prefix.
//  */
// function glyphInputMethod(): State.Extension {
//   type InputState = {
//     timeout: NodeJS.Timeout;
//     editorState: State.EditorState;
//   };

//   type DeadKeyState = null | {
//     phase: "dead" | "after-dead";
//     editorState: State.EditorState;
//   };

//   let thisView: View.EditorView | null = null;
//   let prevEditorState: State.EditorState | null = null;
//   let deadKeyState: DeadKeyState | null = null;
//   let inputState: InputState | null = null;

//   let resetExpecting = () => {
//     if (inputState != null) {
//       clearTimeout(inputState.timeout);
//       inputState = null;
//     }
//   };

//   let scheduleExpecting = (editorState: State.EditorState) => {
//     resetExpecting();
//     inputState = {
//       editorState,
//       timeout: setTimeout(() => {
//         let editorState = inputState?.editorState;
//         inputState = null;
//         if (thisView != null && editorState === thisView.state)
//           Autocomplete.startCompletion(thisView);
//       }, 1000),
//     };
//   };

//   let lifecycle = View.ViewPlugin.fromClass(
//     class {
//       constructor(view: View.EditorView) {
//         thisView = view;
//       }
//       destroy() {
//         resetExpecting();
//         thisView = null;
//       }
//     },
//   );

//   let updateListener = View.EditorView.updateListener.of((up) => {
//     prevEditorState = up.startState;
//   });

//   function skipDueToDeadKey(ev: KeyboardEvent, view: View.EditorView) {
//     if (ev.key === "Dead") {
//       deadKeyState = { phase: "dead", editorState: view.state };
//       return true;
//     }
//     if (
//       deadKeyState?.phase === "dead" &&
//       deadKeyState?.editorState === prevEditorState
//     ) {
//       deadKeyState = { phase: "after-dead", editorState: view.state };
//       return true;
//     }
//     if (
//       deadKeyState?.phase === "after-dead" &&
//       deadKeyState?.editorState === prevEditorState
//     ) {
//       deadKeyState = null;
//       return true;
//     }
//     deadKeyState = null;
//     return false;
//   }

//   let eventHandlers = View.EditorView.domEventHandlers({
//     keydown(ev, view) {
//       if (
//         ev.key === "Shift" ||
//         ev.key === "Control" ||
//         ev.key === "Alt" ||
//         ev.key === "Meta"
//       )
//         return;
//       if (skipDueToDeadKey(ev, view)) return;
//       if (inputState == null && ev.key === "\\") {
//         ev.preventDefault();
//         scheduleExpecting(view.state);
//       } else if (inputState != null && inputState.editorState === view.state) {
//         resetExpecting();
//         let key = ev.key;
//         if (ev.shiftKey) key = key.toUpperCase();
//         let glyph = keymap.get(key);
//         if (glyph == null) return;
//         ev.preventDefault();
//         document.execCommand("insertText", false, glyph.glyph);
//       }
//     },
//   });

//   return [updateListener, eventHandlers, lifecycle];
// }

// export function highlight(highlight: HighlightStyle, textContent: string) {
//   let nodes: HTMLElement[] = [];
//   let callback = (text: string, style: null | string): void => {
//     let node = document.createElement("span");
//     if (style) node.classList.add(style);
//     node.textContent = text;
//     nodes.push(node);
//   };
//   let tree = language.parser.parse(textContent);
//   let pos = 0;
//   Highlight.highlightTree(tree, highlight.match, (from, to, classes) => {
//     if (from > pos) callback(textContent.slice(pos, from), null);
//     callback(textContent.slice(from, to), classes);
//     pos = to;
//   });
//   pos != tree.length && callback(textContent.slice(pos, tree.length), null);
//   return nodes;
// }

// let glyphCompletionGlyph = (
//   completion: Autocomplete.Completion,
//   state: State.EditorState,
// ) => {
//   let isDarkTheme = state.facet(View.EditorView.darkTheme);
//   let highlightStyle = isDarkTheme ? highlightDark : highlightLight;
//   const glyph = glyphsMap.get(completion.apply as string);
//   if (glyph == null) return null;
//   let dom = document.createElement("div");
//   dom.classList.add("cm-bqn-completion-glyph");
//   dom.append(...highlight(highlightStyle, glyph.glyph as string));
//   return dom;
// };

// let glyphCompletionKey = (
//   completion: Autocomplete.Completion,
//   _state: State.EditorState,
// ) => {
//   const glyph = glyphsMap.get(completion.apply as string);
//   if (glyph == null) return null;
//   let key = glyph.key != null ? `\\${glyph.key}` : `${glyph.glyph}`;
//   let dom = document.createElement("span");
//   dom.classList.add("cm-bqn-completion-glyph-key");
//   let inner = document.createElement("span");
//   inner.classList.add("cm-bqn-completion-glyph-key-inner");
//   inner.textContent = key;
//   dom.appendChild(inner);
//   return dom;
// };

// let glyphCompletions: Autocomplete.Completion[] = glyphs.map((glyph) => {
//   return {
//     label: `${glyph.title}`,
//     apply: glyph.glyph,
//   };
// });

// let glyphCompletion: Autocomplete.CompletionSource = (
//   context: Autocomplete.CompletionContext,
// ) => {
//   if (context.matchBefore(/\u2022[A-Za-z\.]*/u) != null) return null;
//   let re = /[A-Za-z]*/;
//   let word = context.matchBefore(re);
//   if (word == null || (word.from == word.to && !context.explicit)) return null;
//   return {
//     from: word.from,
//     filter: true,
//     options: glyphCompletions,
//     span: re,
//   };
// };

// type ValueType =
//   | "array"
//   | "number"
//   | "character"
//   | "function"
//   | "1-modifier"
//   | "2-modifier"
//   | "namespace";

// type SysItem = { name: string; type: ValueType };
// type ListSys = (
//   ns: string | null,
//   state: State.EditorState,
// ) => Promise<SysItem[]>;

// export let sysCompletion =
//   (listSys: ListSys): Autocomplete.CompletionSource =>
//   async (context: Autocomplete.CompletionContext) => {
//     let word = context.matchBefore(/\u2022[A-Za-z0-9_\.]*/u);
//     if (word == null || (word.from == word.to && !context.explicit))
//       return null;
//     let ns: string | null = word.text.replace(/\.[A-Za-z0-9_]*$/, "");
//     if (ns === word.text) ns = null;
//     let items = await listSys(ns, context.state);
//     let span =
//       ns == null
//         ? /\u2022[A-Za-z0-9_]*/u
//         : new RegExp(escapeRegex(ns) + ".[A-Za-z0-9_]*", "u");
//     return {
//       from: word.from,
//       filter: true,
//       options: items.map(formatSysItem),
//       span,
//     };
//   };

// function escapeRegex(v: string) {
//   return v.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
// }

// function formatSysItem(item: SysItem) {
//   switch (item.type) {
//     case "function":
//       let name = item.name.replace(
//         /\.([^\.]+)$/,
//         (_, name) => "." + name[0].toUpperCase() + name.slice(1),
//       );
//       return { label: "•" + name };
//     default:
//       return { label: "•" + item.name };
//   }
// }

// /**
//  * Configure extension for BQN.
//  */
// export function bqn(cfg: { sysCompletion?: ListSys } = {}) {
//   let completions = [glyphCompletion];
//   if (cfg.sysCompletion != null)
//     completions.unshift(sysCompletion(cfg.sysCompletion));
//   let extensions: State.Extension[] = [
//     glyphInputMethod(),
//     highlightLight,
//     highlightDark,
//     Autocomplete.autocompletion({
//       override: completions,
//       activateOnTyping: false,
//       addToOptions: [
//         {
//           render: glyphCompletionGlyph,
//           position: 5,
//         },
//         {
//           render: glyphCompletionKey,
//           position: 90,
//         },
//       ],
//     }),
//   ];
//   return new LanguageSupport(language, extensions);
// };

for (let i in glyphs) {
  if (glyphs[i]["key"]) {
    console.log(`"\\\\${glyphs[i]["key"]}": "${glyphs[i]["glyph"]}" # ${glyphs[i]["title"]}`);
  }
}
