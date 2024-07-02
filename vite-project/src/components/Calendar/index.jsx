import * as C from './styledCalendar.styled'
export const Calendar = ({dateTitle, choosedDate}) => {
    return (
        <C.CaledndarPopNewCardCalendar>
            <C.CalendarTtlSubttl>Даты</C.CalendarTtlSubttl>
            <C.CalendarBlock>
                <C.Nav>
                    <C.Mounth>Сентябрь 2023</C.Mounth>
                    <C.NavActions>
                        <C.NavAction data-action="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                            </svg>
                        </C.NavAction>
                        <C.NavAction data-action="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                            </svg>
                        </C.NavAction>
                    </C.NavActions>
                </C.Nav>
                <C.CalendarContent>
                    <C.DaysNames>
                        <C.DayName>пн</C.DayName>
                        <C.DayName>вт</C.DayName>
                        <C.DayName>ср</C.DayName>
                        <C.DayName>чт</C.DayName>
                        <C.DayName>пт</C.DayName>
                        <C.DayName>сб</C.DayName>
                        <C.DayName>вс</C.DayName>
                    </C.DaysNames>
                    <C.Cells>
                        <C.CellOtherMonth>28</C.CellOtherMonth>
                        <C.CellOtherMonth>29</C.CellOtherMonth>
                        <C.CellOtherMonth>30</C.CellOtherMonth>
                        <C.CellDay>31</C.CellDay>
                        <C.CellDay>1</C.CellDay>
                        <C.CellDay>2</C.CellDay>
                        <C.CellDay>3</C.CellDay>
                        <C.CellDay>4</C.CellDay>
                        <C.CellDay>5</C.CellDay>
                        <C.CellDay>6</C.CellDay>
                        <C.CellDay>7</C.CellDay>
                        <C.CellDay>8</C.CellDay>
                        <C.CellDayActive>9</C.CellDayActive>
                        <C.CellDay>10</C.CellDay>
                        <C.CellDay>11</C.CellDay>
                        <C.CellDay>12</C.CellDay>
                        <C.CellDay>13</C.CellDay>
                        <C.CellDay>14</C.CellDay>
                        <C.CellDay>15</C.CellDay>
                        <C.CellDay>16</C.CellDay>
                        <C.CellDay>17</C.CellDay>
                        <C.CellDay>18</C.CellDay>
                        <C.CellDay>19</C.CellDay>
                        <C.CellDay>20</C.CellDay>
                        <C.CellDay>21</C.CellDay>
                        <C.CellDay>22</C.CellDay>
                        <C.CellDay>23</C.CellDay>
                        <C.CellDay>24</C.CellDay>
                        <C.CellDay>25</C.CellDay>
                        <C.CellDay>26</C.CellDay>
                        <C.CellDay>27</C.CellDay>
                        <C.CellDay>28</C.CellDay>
                        <C.CellDay>29</C.CellDay>
                        <C.CellDay>30</C.CellDay>
                        <C.CellOtherMonth>1</C.CellOtherMonth>
                    </C.Cells>
                </C.CalendarContent>
        
                <input type="hidden" id="datepick_value" value="08.09.2023"/>
                <C.Period>
                    <C.CalendarP>{dateTitle}<span>{choosedDate}</span></C.CalendarP>
                </C.Period>
            </C.CalendarBlock>
        </C.CaledndarPopNewCardCalendar>
    )
}