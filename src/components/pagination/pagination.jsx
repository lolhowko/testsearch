import * as S from "./styles"

export const Pagination = ({
    userData,
    perPage,
    setCurrentPage,
    currentPage,
  }) => {
    const allPages = Math.ceil((userData && userData.total_count) / perPage)
    const pages = []
    if (allPages > 10) {
      if (currentPage > 5) {
        for (let i = currentPage - 4; i <= currentPage + 5; i++) {
          pages.push(i)
          if (i === allPages) break
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          pages.push(i)
          if (i === allPages) break
        }
      }
    } else {
      for (let i = 1; i <= allPages; i++) {
        pages.push(i)
      }
    }
  
    return (
      <S.PageCountDiv>
        <S.PageCountText>Страница:</S.PageCountText>
        <S.PageCountNumberBox>
          {pages.map((page, index) => (
            <S.PageCountNumber
              key={index}
              isCurrentPage={!!(currentPage === page)}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </S.PageCountNumber>
          ))}
        </S.PageCountNumberBox>
      </S.PageCountDiv>
    )
  }
  