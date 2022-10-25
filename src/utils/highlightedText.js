const highlightedText = (text, query) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'))

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span style={{ color: '#0065D0' }} key={index}>
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </>
    )
  }

  return text
}

export default highlightedText
