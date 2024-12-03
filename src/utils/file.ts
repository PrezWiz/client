/** 텍스트 파일을 다운로드합니다. */
export const downloadTextFile = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/plain' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${generateFileName(filename)}.txt`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(link.href);
};

/** 파일 이름에 사용할 수 없는 문자를 제거하고 공백을 언더스코어로 변경합니다. */
export const generateFileName = (input: string) => {
  const invalidChars = /[<>:"/\\|?*()]/g;

  return input.replace(invalidChars, '').replace(/\s+/g, '_');
};
