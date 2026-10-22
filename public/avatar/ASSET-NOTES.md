# Ali portrait asset

Generated with the built-in image-generation tool using Ali's existing portrait for identity and the supplied cartoon for clothing/style.

Prompt: Create a polished full-body cartoon portrait of Ali, retaining his broad rounded face, warm brown skin, black side-swept hair, dark eyes, thick eyebrows, moustache and short beard. No glasses or graduation clothing. Use clean outlines, dimensional shading and fabric folds like the supplied cartoon. Dress him in a slate blue collared shirt, burgundy tie, charcoal trousers, brown belt and dark brown shoes. Left hand in pocket; right arm bent outward with raised open palm, separated from the torso for animation. Full body, transparent background, no lettering or props.

Asset: public/avatar/ali-portrait.png
Animation: WavingAvatar.tsx uses a weighted Three.js mesh around the elbow, with a static image fallback and reduced-motion support.

Baloch Builder screenshots are copied from its docs/design-preview directory. They contain illustrative sample records, not the device's business database. No public source or live-demo URL was provided; corresponding links are omitted.


Greeting update (October 22, 2026): ali-greeting-atlas.png is an eight-cell transparent illustrated pose atlas generated from ali-portrait.png. WavingAvatar uses the pocket pose as its default, steps through lifting/waving poses, then reverses back to rest. Cell 1 (alternate-hand pose) is intentionally unused. The original artwork is retained. Animation runs once on first visibility and on Say hello, ignores overlapping clicks, and stops at the pocket pose for reduced motion or when hidden.
