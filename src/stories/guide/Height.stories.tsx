import React, { ChangeEvent, useState } from 'react'

export default {
  title: 'Guide/Height',
  tags: ['autodocs'],
}

export const PXHeight = () => {
  const [value, setValue] = useState(100)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  return (
    <>
      <p className="title1">Pixel height global Class</p>
      <p className="body2">• Pixel height 정의합니다.</p>
      <p className="body2">• 1px ~ 1000px까지 정의</p>
      <br />
      <div className="align start gap_10">
        <p className="body1 grid1_4">Height(px) :</p>
        <div className="align start gap_4">
          <input className="sty_ipt" type="number" value={value} max={1000} min={1} onChange={handleChange} />
        </div>
      </div>
      <br />
      <br />
      <p className="title1">className: h{value}</p>
      <div className={`bg_blue100 align center h${value}`}>
        <p className="body3 white"> {value} px</p>
      </div>
    </>
  )
}

export const PercentHeight = () => {
  const [value, setValue] = useState(50)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  return (
    <>
      <p className="title1">Percentage height global Class</p>
      <p className="body2">• percentage height 정의합니다.</p>
      <p className="body2">• 1% ~ 100%까지 정의</p>
      <br />
      <div className="align start gap_10">
        <p className="body1 grid1_4">Height(%) :</p>
        <div className="align start gap_4">
          <input className="sty_ipt" type="number" value={value} max={100} min={1} onChange={handleChange} />
        </div>
      </div>
      <br />
      <br />
      <p className="title1">className: per_h{value}</p>
      <div className="h500 bg_blue10">
        <div className={`bg_blue100 align center per_h${value}`}>
          <p className="body3 white"> {value} %</p>
        </div>
      </div>
    </>
  )
}

export const MinHeight = () => {
  const [value, setValue] = useState(100)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  return (
    <>
      <p className="title1">Min height global Class</p>
      <p className="body2">• Min height 정의합니다.</p>
      <p className="body2">• 1px ~ 1000px까지 정의</p>
      <br />
      <div className="align start gap_10">
        <p className="body1 grid2">Min Height(px) :</p>
        <div className="align start gap_4">
          <input className="sty_ipt" type="number" value={value} max={1000} min={1} onChange={handleChange} />
        </div>
      </div>
      <br />
      <br />
      <p className="title1">className: min_h{value}</p>
      <div className={`bg_blue100 align center min_h${value}`}>
        <p className="body3 white"> {value} px</p>
      </div>
    </>
  )
}

export const MaxHeight = () => {
  const [value, setValue] = useState(100)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  return (
    <>
      <p className="title1">Max height global Class</p>
      <p className="body2">• Max height 정의합니다.</p>
      <p className="body2">• 1px ~ 1000px까지 정의</p>
      <br />
      <div className="align start gap_10">
        <p className="body1 grid2_1">Max Height(px) :</p>
        <div className="align start gap_4">
          <input className="sty_ipt" type="number" value={value} max={1000} min={1} onChange={handleChange} />
        </div>
      </div>
      <br />
      <br />
      <p className="title1">className: max_h{value}</p>
      <div className={`bg_blue100 pd_10 max_h${value} ovf_h`}>
        <p className="body3 white"> {value} px</p>
        국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의
        본질적인 내용을 침해할 수 없다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 재의의 요구가
        있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다. 대통령은
        제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이 공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에 의한 확정법률이 정부에 이송된 후 5일
        이내에 대통령이 공포하지 아니할 때에는 국회의장이 이를 공포한다. 중앙선거관리위원회는 대통령이 임명하는 3인, 국회에서 선출하는 3인과 대법원장이 지명하는
        3인의 위원으로 구성한다. 위원장은 위원중에서 호선한다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다. 명령·규칙 또는 처분이
        헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 대통령은 제1항과 제2항의 처분 또는 명령을 한
        때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다. 국가는 평생교육을 진흥하여야 한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에
        있어서 부당한 차별을 받지 아니한다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며,
        이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다. 대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다. 국가는
        주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의
        신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을
        때에는 사후에 영장을 청구할 수 있다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는
      </div>
    </>
  )
}
