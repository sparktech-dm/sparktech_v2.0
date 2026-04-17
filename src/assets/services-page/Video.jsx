import React from "react";

const Video = () => {
  return (
    <section className="px-6 py-50 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4 text-[#f0c417]">Video Editing</h1>
      <p className="mb-6 text-lg">
        Our video editing services bring your raw footage to life. We specialize in turning clips into compelling stories through professional editing, motion graphics, sound design, and color grading. Whether it’s for YouTube, Instagram, or corporate use, our edits are sharp, dynamic, and brand-consistent.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Editing Services Include:</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Storyboarding and video scripting</li>
        <li>Transitions, effects, and overlays</li>
        <li>Subtitle generation and voiceover syncing</li>
        <li>Music licensing and background score editing</li>
        <li>Export in multiple formats and aspect ratios</li>
      </ul>
      <p className="text-lg">
        Let us help you turn ordinary footage into extraordinary content that tells your story and captures attention.
      </p>
    </section>
  );
};

export default Video;